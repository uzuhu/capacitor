---
layout: default
title: "Blog - HUAYU Capacitor News & Technical Articles"
description: "Stay updated with HUAYU capacitor product news, technical articles, and industry insights."
---

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <h1>Blog & News</h1>
    <p>Product updates, technical insights, and company news</p>
  </div>
</section>

<!-- Breadcrumb -->
<div class="breadcrumb">
  <div class="container">
    <a href="{{ '/' | relative_url }}">Home</a> <span>&rsaquo;</span> Blog
  </div>
</div>

<!-- Blog Listing -->
<section class="section">
  <div class="container" style="max-width:900px;">

    {% assign posts = site.posts %}
    {% if posts.size > 0 %}
      {% for post in posts %}
      <article style="margin-bottom:40px; padding-bottom:30px; border-bottom:1px solid var(--gray-100);">
        <div style="display:flex; gap:24px; align-items:flex-start; flex-wrap:wrap;">
          {% if post.image %}
          <div style="flex:0 0 240px;">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" style="width:100%; border-radius:var(--radius);">
          </div>
          {% endif %}
          <div style="flex:1; min-width:250px;">
            <div class="post-meta" style="margin-bottom:8px;">
              {% if post.categories %}
                <span style="margin-left:0;">🏷️ {{ post.categories | join: ", " }}</span>
              {% endif %}
            </div>
            <h2 style="font-size:1.4rem; margin-bottom:10px;">
              <a href="{{ post.url | relative_url }}" style="color:var(--gray-800); text-decoration:none;">{{ post.title }}</a>
            </h2>
            <p style="color:var(--gray-600); font-size:0.92rem; line-height:1.7;">
              {{ post.excerpt | strip_html | truncate: 200 }}
            </p>
            <a href="{{ post.url | relative_url }}" style="color:var(--blue-mid); font-weight:600; font-size:0.9rem; text-decoration:none;">Read More &rarr;</a>
          </div>
        </div>
      </article>
      {% endfor %}
    {% else %}
      <div style="text-align:center; padding:60px 0; color:var(--gray-300);">
        <div style="font-size:3rem; margin-bottom:16px;">📝</div>
        <h3>No posts yet</h3>
        <p>Upload a new <code>.md</code> file to <code>_posts/</code> and it will appear here automatically.</p>
      </div>
    {% endif %}

  </div>
</section>
