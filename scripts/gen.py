import json
import datetime
import re
from pathlib import Path

def slugify(title):
   slug = title.lower()
   slug = re.sub(r'[^\w\s-]', '', slug)
   slug = re.sub(r'[-\s]+', '-', slug)
   return slug.strip('-')

def run(data):
   posts = data['published_posts']
   output_dir = Path('content')
   output_dir.mkdir(exist_ok=True)

   for post_id, post in posts.items():
       date = datetime.datetime.fromisoformat(post['createdDate'].replace('Z', '+00:00'))
       formatted_date = date.strftime('%Y-%m-%dT%H:%M:00Z')
       filename = f"{slugify(post['title'])}.md"

       content = f"""---
title: {post['title']}
description: {post['title']}
pubDate: {formatted_date}
---

[This is a legacy post!](https://old.tjbai.com/{post_id})
"""

       with open(output_dir / filename, 'w', encoding='utf-8') as f:
           f.write(content)

with open('dump.json', 'r') as f:
   data = json.load(f)
   run(data)
