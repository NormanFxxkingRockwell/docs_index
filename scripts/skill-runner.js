#!/usr/bin/env node
/**
 * Skill 运行器 - 通用 Skill 执行框架
 * 
 * 使用方式：
 * node scripts/skill-runner.js --skill=harmonyos "问题"
 * node scripts/skill-runner.js --skill=harmonyos --step=filter "问题"
 */

const path = require('path');
const { execSync } = require('child_process');

function runSkill(skillName, question, options = {}) {
  const skillPath = path.join(__dirname, '../search_index/skills', skillName);
  const runnerPath = path.join(skillPath, 'run.js');
  
  if (!require('fs').existsSync(runnerPath)) {
    throw new Error(`Skill "${skillName}" not found at ${runnerPath}`);
  }
  
  const args = [
    `"${question}"`,
    options.step ? `--step=${options.step}` : '',
    options.domain ? `--domain=${options.domain}` : ''
  ].filter(Boolean).join(' ');
  
  return execSync(`node "${runnerPath}" ${args}`, {
    encoding: 'utf-8',
    timeout: 60000
  });
}

// 命令行调用
if (require.main === module) {
  const args = process.argv.slice(2);
  const skillMatch = args.find(a => a.startsWith('--skill='));
  const skillName = skillMatch ? skillMatch.split('=')[1] : 'harmonyos';
  const question = args.find(a => !a.startsWith('--'));
  
  if (!question) {
    console.error('HarmonyOS Skill Runner');
    console.error('');
    console.error('Usage:');
    console.error('  node skill-runner.js --skill=harmonyos "问题"');
    console.error('  node skill-runner.js --skill=harmonyos --step=filter "问题"');
    console.error('');
    console.error('Steps:');
    console.error('  filter   - 入口过滤');
    console.error('  domain   - 领域识别');
    console.error('  search   - 文档检索');
    console.error('  validate - 答案校验');
    process.exit(1);
  }
  
  const options = {
    step: args.find(a => a.startsWith('--step='))?.split('=')[1],
    domain: args.find(a => a.startsWith('--domain='))?.split('=')[1]
  };
  
  try {
    const result = runSkill(skillName, question, options);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

module.exports = { runSkill };
