#!/usr/bin/env node
/**
 * 批量生成所有领域的 page_index
 * 
 * 用法：
 * npx ts-node scripts/build_all_page_index.ts [--parallel=8]
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

interface DomainStats {
  name: string;
  status: 'success' | 'error' | 'skipped';
  recordCount?: number;
  error?: string;
  duration: number;
}

/**
 * 获取所有需要生成索引的领域
 */
function getDomainsToBuild(): string[] {
  const domainsDir = path.join(process.cwd(), 'search_index', 'domains');
  const domains = fs.readdirSync(domainsDir);
  
  const toBuild: string[] = [];
  
  for (const domain of domains) {
    const domainPath = path.join(domainsDir, domain);
    
    // 跳过文件
    if (!fs.statSync(domainPath).isDirectory()) {
      continue;
    }
    
    // 跳过测试域
    if (domain === 'test' || domain === 'onlyfortest') {
      console.log(`⏭️  跳过测试域：${domain}`);
      continue;
    }
    
    // 检查是否有 domain_index.json
    const domainIndexPath = path.join(domainPath, 'domain_index.json');
    if (!fs.existsSync(domainIndexPath)) {
      console.log(`⚠️  ${domain}: 缺少 domain_index.json，跳过`);
      continue;
    }
    
    // 检查是否已存在 page_index.jsonl
    const pageIndexPath = path.join(domainPath, 'page_index.jsonl');
    if (fs.existsSync(pageIndexPath)) {
      console.log(`⏭️  ${domain}: page_index 已存在，跳过`);
      continue;
    }
    
    toBuild.push(domain);
  }
  
  return toBuild;
}

/**
 * 生成单个领域的 page_index
 */
function buildDomain(domain: string): DomainStats {
  const startTime = Date.now();
  
  try {
    console.log(`\n🔨 正在构建：${domain}...`);
    
    // 执行构建命令
    const command = `npx ts-node scripts/build_page_index.ts --domain=${domain}`;
    const output = execSync(command, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe']
    });
    
    // 解析输出
    const match = output.match(/记录数：(\d+)/);
    const recordCount = match ? parseInt(match[1]) : 0;
    
    const hasError = output.includes('❌ 构建失败');
    
    return {
      name: domain,
      status: hasError ? 'error' : 'success',
      recordCount,
      duration: Date.now() - startTime,
      error: hasError ? output : undefined,
    };
  } catch (error: any) {
    return {
      name: domain,
      status: 'error',
      duration: Date.now() - startTime,
      error: error.message || String(error),
    };
  }
}

/**
 * 批量生成（并行控制）
 */
async function buildAllParallel(domains: string[], parallelLimit: number = 8) {
  console.log(`🚀 开始批量生成 page_index...\n`);
  console.log(`待构建领域：${domains.length} 个`);
  console.log(`并行数：${parallelLimit}\n`);
  
  const results: DomainStats[] = [];
  const queue = [...domains];
  const inProgress = new Map<string, Promise<DomainStats>>();
  
  // 执行单个领域构建
  const buildOne = async (domain: string): Promise<DomainStats> => {
    return new Promise((resolve) => {
      // 同步执行，避免子进程冲突
      const result = buildDomain(domain);
      resolve(result);
    });
  };
  
  // 顺序执行（避免子进程冲突）
  console.log('按顺序执行构建（避免子进程冲突）...\n');
  
  for (const domain of domains) {
    const result = await buildOne(domain);
    results.push(result);
    
    const icon = result.status === 'success' ? '✅' : '❌';
    const records = result.recordCount !== undefined ? `${result.recordCount}条记录` : '';
    const time = (result.duration / 1000).toFixed(1);
    
    console.log(`${icon} ${domain}: ${result.status} ${records} (${time}s)`);
    
    if (result.error) {
      console.log(`   错误：${result.error?.slice(0, 200)}`);
    }
  }
  
  return results;
}

/**
 * 生成统计报告
 */
function generateReport(results: DomainStats[]) {
  const success = results.filter(r => r.status === 'success');
  const errors = results.filter(r => r.status === 'error');
  const totalRecords = success.reduce((sum, r) => sum + (r.recordCount || 0), 0);
  const totalTime = results.reduce((sum, r) => sum + r.duration, 0);
  
  console.log('\n' + '='.repeat(70));
  console.log('📊 批量生成报告');
  console.log('='.repeat(70));
  
  console.log(`\n总计：${results.length} 个领域`);
  console.log(`✅ 成功：${success.length} (${(success.length / results.length * 100).toFixed(1)}%)`);
  console.log(`❌ 失败：${errors.length} (${(errors.length / results.length * 100).toFixed(1)}%)`);
  console.log(`📄 总记录数：${totalRecords.toLocaleString()} 条`);
  console.log(`⏱️  总耗时：${(totalTime / 1000 / 60).toFixed(1)} 分钟\n`);
  
  if (errors.length > 0) {
    console.log('失败领域:');
    errors.forEach(e => {
      console.log(`  ❌ ${e.name}: ${e.error?.slice(0, 100)}`);
    });
  }
  
  console.log('\n' + '='.repeat(70) + '\n');
  
  // 生成 JSON 报告
  const reportPath = path.join(process.cwd(), 'scripts', 'build_page_index_report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    total: results.length,
    success: success.length,
    errors: errors.length,
    totalRecords,
    totalTime,
    results,
  }, null, 2), 'utf-8');
  
  console.log(`📝 详细报告已保存到：${reportPath}\n`);
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);
  const parallelArg = args.find(arg => arg.startsWith('--parallel='));
  const parallelLimit = parallelArg ? parseInt(parallelArg.split('=')[1]) : 8;
  
  // 获取需要构建的领域
  const domains = getDomainsToBuild();
  
  if (domains.length === 0) {
    console.log('✅ 所有领域都已生成 page_index，无需构建\n');
    return;
  }
  
  // 批量生成
  const results = await buildAllParallel(domains, parallelLimit);
  
  // 生成报告
  generateReport(results);
  
  // 退出码
  const hasErrors = results.some(r => r.status === 'error');
  process.exit(hasErrors ? 1 : 0);
}

main().catch(err => {
  console.error('批量构建失败:', err);
  process.exit(1);
});
