#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import re
import json
import hashlib
from pathlib import Path
from collections import Counter

def extract_metadata(content_lines):
    """从文档头部提取元数据"""
    metadata = {
        "kit": "",
        "subsystem": "",
        "owner": "",
        "designer": "",
        "tester": "",
        "adviser": ""
    }
    
    for line in content_lines[:30]:
        kit_match = re.search(r'<!--Kit:\s*(.+?)\s*-->', line)
        if kit_match:
            metadata["kit"] = kit_match.group(1).strip()
        
        subsystem_match = re.search(r'<!--Subsystem:\s*(.+?)\s*-->', line)
        if subsystem_match:
            metadata["subsystem"] = subsystem_match.group(1).strip()
        
        owner_match = re.search(r'<!--Owner:\s*(.+?)\s*-->', line)
        if owner_match:
            metadata["owner"] = owner_match.group(1).strip()
        
        designer_match = re.search(r'<!--Designer:\s*(.+?)\s*-->', line)
        if designer_match:
            metadata["designer"] = designer_match.group(1).strip()
        
        tester_match = re.search(r'<!--Tester:\s*(.+?)\s*-->', line)
        if tester_match:
            metadata["tester"] = tester_match.group(1).strip()
        
        adviser_match = re.search(r'<!--Adviser:\s*(.+?)\s*-->', line)
        if adviser_match:
            metadata["adviser"] = adviser_match.group(1).strip()
    
    return metadata

def parse_document_structure(content):
    """解析文档结构，提取标题和章节"""
    lines = content.split('\n')
    sections = []
    title = ""
    
    for i, line in enumerate(lines, 1):
        # 提取一级标题作为文档标题
        if not title and line.startswith('# '):
            title = line[2:].strip()
        
        # 提取二级标题作为章节
        if line.startswith('## '):
            section_title = line[3:].strip()
            sections.append({
                "section_id": f"section-{len(sections) + 1}",
                "title": section_title,
                "level": 2,
                "line_start": i,
                "line_end": i  # 临时值，后面会更新
            })
    
    # 更新章节的结束行号
    for i in range(len(sections)):
        if i < len(sections) - 1:
            sections[i]["line_end"] = sections[i + 1]["line_start"] - 1
        else:
            sections[i]["line_end"] = len(lines)
    
    return title, sections

def generate_summary(title, metadata, sections):
    """生成文档摘要"""
    if not title:
        return "本文档介绍相关功能和开发指南。"
    
    summary_parts = [title]
    
    if metadata.get("kit"):
        summary_parts.append(f"属于{metadata['kit']}")
    
    if sections:
        summary_parts.append(f"包含{len(sections)}个章节")
    
    return "，".join(summary_parts) + "。"

def generate_section_summary(section_title):
    """生成章节摘要"""
    return f"介绍{section_title}的相关内容和使用方法。"

def convert_links(content, doc_path):
    """转换文档中的相对路径"""
    # 计算相对路径深度
    depth = doc_path.count('/')
    prefix = "../" * depth + "docs/"
    
    # 转换 markdown 链接
    def replace_link(match):
        text = match.group(1)
        path = match.group(2)
        
        # 跳过已经是绝对路径或外部链接
        if path.startswith('http') or path.startswith('/') or path.startswith('#'):
            return match.group(0)
        
        # 转换相对路径
        if not path.startswith('..'):
            return f'[{text}]({prefix}{path})'
        
        return match.group(0)
    
    return re.sub(r'\[([^\]]+)\]\(([^)]+)\)', replace_link, content)

def process_document(doc_path, output_dir):
    """处理单个文档"""
    try:
        # 读取文档内容
        with open(doc_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if not content.strip():
            print(f"警告: 文档为空 {doc_path}")
            return None
        
        lines = content.split('\n')
        
        # 提取元数据
        metadata = extract_metadata(lines)
        
        # 解析文档结构
        title, sections = parse_document_structure(content)
        
        # 生成 doc_id
        relative_path = doc_path.replace('docs/zh-cn/application-dev/media/', '')
        doc_id = relative_path.replace('.md', '').replace('/', '-').replace('\\', '-')
        
        # 生成摘要
        summary = generate_summary(title, metadata, sections)
        
        # 生成章节摘要
        for section in sections:
            section['summary'] = generate_section_summary(section['title'])
        
        # 转换链接路径
        converted_content = convert_links(content, relative_path)
        
        # 构建文档索引
        doc_index = {
            "doc_id": doc_id,
            "title": title or doc_id,
            "path": relative_path,
            "relative_path": f"../../docs/zh-cn/application-dev/media/{relative_path}",
            "metadata": metadata,
            "summary": summary,
            "structure": {
                "title": title or doc_id,
                "sections": sections
            }
        }
        
        # 保存文档索引
        output_file = os.path.join(output_dir, f"{doc_id}_structure.json")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(doc_index, f, ensure_ascii=False, indent=2)
        
        return doc_index
    
    except Exception as e:
        print(f"错误: 处理文档失败 {doc_path}: {e}")
        return None

def main():
    # 配置
    domain = "media"
    docs_dir = "docs/zh-cn/application-dev/media"
    output_dir = f"search_index/domains/{domain}/documents"
    
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    # 扫描所有文档
    doc_files = []
    for root, dirs, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.md'):
                doc_files.append(os.path.join(root, file))
    
    print(f"找到 {len(doc_files)} 个文档")
    
    # 处理所有文档
    processed_docs = []
    failed_docs = []
    
    for doc_path in doc_files:
        result = process_document(doc_path, output_dir)
        if result:
            processed_docs.append(result)
        else:
            failed_docs.append(doc_path)
    
    print(f"成功处理 {len(processed_docs)} 个文档")
    print(f"失败 {len(failed_docs)} 个文档")
    
    # 保存处理结果
    result_file = f"search_index/domains/{domain}/_processing_result.json"
    with open(result_file, 'w', encoding='utf-8') as f:
        json.dump({
            "total": len(doc_files),
            "success": len(processed_docs),
            "failed": len(failed_docs),
            "failed_files": failed_docs
        }, f, ensure_ascii=False, indent=2)
    
    print(f"处理结果已保存到 {result_file}")

if __name__ == "__main__":
    main()
