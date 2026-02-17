#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import json

def build_domain_map():
    domain = "media"
    domain_index_file = f"search_index/domains/{domain}/domain_index.json"
    
    # 读取领域索引
    with open(domain_index_file, 'r', encoding='utf-8') as f:
        domain_index = json.load(f)
    
    # 生成学习路径
    learning_path = []
    order = 1
    
    # 基础文档
    for doc in domain_index['documents']:
        title = doc['title'].lower()
        if any(kw in title for kw in ['简介', 'intro', 'overview', '概览', 'readme']):
            learning_path.append({
                "doc_id": doc['doc_id'],
                "title": doc['title'],
                "order": order,
                "category": "基础"
            })
            order += 1
    
    # 音频相关
    for doc in domain_index['documents']:
        title = doc['title'].lower()
        if '音频' in title or 'audio' in title:
            if not any(kw in title for kw in ['简介', 'intro', 'overview', '概览']):
                learning_path.append({
                    "doc_id": doc['doc_id'],
                    "title": doc['title'],
                    "order": order,
                    "category": "音频"
                })
                order += 1
    
    # 视频编解码
    for doc in domain_index['documents']:
        title = doc['title'].lower()
        if '编解码' in title or 'codec' in title:
            if not any(kw in title for kw in ['简介', 'intro', 'overview', '概览']):
                learning_path.append({
                    "doc_id": doc['doc_id'],
                    "title": doc['title'],
                    "order": order,
                    "category": "编解码"
                })
                order += 1
    
    # 相机
    for doc in domain_index['documents']:
        title = doc['title'].lower()
        if '相机' in title or 'camera' in title:
            if not any(kw in title for kw in ['简介', 'intro', 'overview', '概览']):
                learning_path.append({
                    "doc_id": doc['doc_id'],
                    "title": doc['title'],
                    "order": order,
                    "category": "相机"
                })
                order += 1
    
    # 图像
    for doc in domain_index['documents']:
        title = doc['title'].lower()
        if '图像' in title or 'image' in title:
            if not any(kw in title for kw in ['简介', 'intro', 'overview', '概览']):
                learning_path.append({
                    "doc_id": doc['doc_id'],
                    "title": doc['title'],
                    "order": order,
                    "category": "图像"
                })
                order += 1
    
    # 其他
    for doc in domain_index['documents']:
        title = doc['title'].lower()
        if not any(kw in title for kw in ['简介', 'intro', 'overview', '概览', '音频', 'audio', '编解码', 'codec', '相机', 'camera', '图像', 'image']):
            learning_path.append({
                "doc_id": doc['doc_id'],
                "title": doc['title'],
                "order": order,
                "category": "其他"
            })
            order += 1
    
    print(f"生成了 {len(learning_path)} 个学习路径节点")
    
    # 创建快速参考
    quick_reference = {}
    for doc in domain_index['documents']:
        quick_reference[doc['title']] = doc['path']
    
    print(f"创建了 {len(quick_reference)} 个快速参考条目")
    
    # 生成领域概述
    overview = domain_index['domain_summary']
    
    # 构建领域地图 JSON
    domain_map = {
        "domain": domain,
        "overview": overview,
        "core_concepts": domain_index['core_concepts'],
        "learning_path": learning_path,
        "quick_reference": quick_reference,
        "document_count": domain_index['document_count']
    }
    
    # 保存领域地图 JSON
    json_output = f"search_index/domains/{domain}/domain_map.json"
    with open(json_output, 'w', encoding='utf-8') as f:
        json.dump(domain_map, f, ensure_ascii=False, indent=2)
    
    print(f"领域地图 JSON 已保存到 {json_output}")
    
    # 生成领域地图 Markdown
    markdown_lines = []
    markdown_lines.append(f"# {domain.capitalize()} 领域地图")
    markdown_lines.append("")
    markdown_lines.append("## 领域概述")
    markdown_lines.append(overview)
    markdown_lines.append("")
    markdown_lines.append("## 核心概念")
    for concept in domain_index['core_concepts']:
        markdown_lines.append(f"- **{concept}**")
    markdown_lines.append("")
    markdown_lines.append("## 文档索引")
    markdown_lines.append("")
    
    # 按类别分组
    categories = {}
    for item in learning_path:
        cat = item['category']
        if cat not in categories:
            categories[cat] = []
        categories[cat].append(item)
    
    for cat in ['基础', '音频', '编解码', '相机', '图像', '其他']:
        if cat in categories:
            markdown_lines.append(f"### {cat}")
            for item in categories[cat]:
                markdown_lines.append(f"{item['order']}. [{item['title']}]({item['doc_id']})")
            markdown_lines.append("")
    
    markdown_lines.append("## 学习路径")
    for item in learning_path[:20]:  # 只显示前20个
        markdown_lines.append(f"{item['order']}. [{item['title']}]({item['doc_id']}) - {item['category']}")
    markdown_lines.append("")
    
    markdown_lines.append("## 快速参考")
    markdown_lines.append("| 功能 | 文档路径 |")
    markdown_lines.append("|------|----------|")
    for title, path in list(quick_reference.items())[:20]:  # 只显示前20个
        markdown_lines.append(f"| {title} | [{path}]({path}) |")
    markdown_lines.append("")
    
    markdown_lines.append("## 统计信息")
    markdown_lines.append(f"- 文档总数：{domain_map['document_count']}")
    markdown_lines.append(f"- 核心概念：{len(domain_map['core_concepts'])}")
    markdown_lines.append(f"- 学习路径：{len(learning_path)}")
    markdown_lines.append("")
    
    # 保存领域地图 Markdown
    md_output = f"search_index/domains/{domain}/domain_map.md"
    with open(md_output, 'w', encoding='utf-8') as f:
        f.write('\n'.join(markdown_lines))
    
    print(f"领域地图 Markdown 已保存到 {md_output}")

if __name__ == "__main__":
    build_domain_map()
