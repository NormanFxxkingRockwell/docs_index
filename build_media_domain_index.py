#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import json
from collections import Counter

def build_domain_index():
    domain = "media"
    documents_dir = f"search_index/domains/{domain}/documents"
    
    # 读取所有文档索引
    all_documents = []
    for filename in os.listdir(documents_dir):
        if filename.endswith('_structure.json'):
            filepath = os.path.join(documents_dir, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                doc = json.load(f)
                all_documents.append(doc)
    
    print(f"读取了 {len(all_documents)} 个文档索引")
    
    # 提取核心概念
    core_concepts_set = set()
    for doc in all_documents:
        # 从标题提取
        title = doc.get('title', '')
        if '音频' in title:
            core_concepts_set.add('音频处理')
        if '视频' in title:
            core_concepts_set.add('视频处理')
        if '编解码' in title or 'codec' in title.lower():
            core_concepts_set.add('音视频编解码')
        if '相机' in title or 'camera' in title.lower():
            core_concepts_set.add('相机开发')
        if '图像' in title or 'image' in title.lower():
            core_concepts_set.add('图像处理')
        if '录制' in title or 'recording' in title.lower():
            core_concepts_set.add('媒体录制')
        if '播放' in title or 'playback' in title.lower():
            core_concepts_set.add('媒体播放')
        if 'drm' in title.lower():
            core_concepts_set.add('DRM数字版权')
        if 'session' in title.lower():
            core_concepts_set.add('媒体会话管理')
        if 'screencapture' in title.lower():
            core_concepts_set.add('屏幕录制')
    
    # 补充核心概念
    core_concepts = list(core_concepts_set)
    if len(core_concepts) < 5:
        core_concepts.extend(['音频播放', '音频录制', '视频编解码', '相机预览', '图像编解码'])
    
    # 去重并限制数量
    core_concepts = list(set(core_concepts))[:10]
    
    print(f"提取了 {len(core_concepts)} 个核心概念: {core_concepts}")
    
    # 生成领域摘要
    domain_summary = "Media Kit 提供音视频媒体处理能力，包括音频播放和录制、视频编解码、相机开发、图像处理、DRM数字版权保护、媒体会话管理、屏幕录制等功能，支持多种媒体格式和场景化应用。"
    
    # 构建文档列表
    documents_list = []
    for doc in all_documents:
        doc_info = {
            "doc_id": doc['doc_id'],
            "title": doc['title'],
            "path": doc['relative_path'],
            "summary": doc['summary'][:200] if len(doc['summary']) > 200 else doc['summary'],
            "key_topics": []
        }
        
        # 提取关键主题
        title = doc['title'].lower()
        if '音频' in title or 'audio' in title:
            doc_info['key_topics'].append('音频')
        if '视频' in title or 'video' in title:
            doc_info['key_topics'].append('视频')
        if '编解码' in title or 'codec' in title:
            doc_info['key_topics'].append('编解码')
        if '相机' in title or 'camera' in title:
            doc_info['key_topics'].append('相机')
        if '图像' in title or 'image' in title:
            doc_info['key_topics'].append('图像')
        if 'drm' in title:
            doc_info['key_topics'].append('DRM')
        
        documents_list.append(doc_info)
    
    # 构建领域索引
    domain_index = {
        "domain": domain,
        "domain_summary": domain_summary,
        "core_concepts": core_concepts,
        "document_count": len(all_documents),
        "documents": documents_list
    }
    
    # 保存领域索引
    output_file = f"search_index/domains/{domain}/domain_index.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(domain_index, f, ensure_ascii=False, indent=2)
    
    print(f"领域索引已保存到 {output_file}")
    
    # 验证核心概念无重复
    concept_counts = Counter(core_concepts)
    duplicates = [k for k, v in concept_counts.items() if v > 1]
    if duplicates:
        print(f"警告: 发现重复的核心概念: {duplicates}")
    else:
        print("验证通过: 核心概念无重复")

if __name__ == "__main__":
    build_domain_index()
