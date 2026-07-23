---
layout: default
title: "Articles - HUAYU Capacitor Knowledge & Technical Articles"
description: "Explore HUAYU capacitor technical articles, selection guides, and industry insights."
permalink: /blog/
---

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <h1>Articles</h1>
    <p>Technical knowledge, selection guides, and engineering insights about aluminum electrolytic capacitors</p>
  </div>
</section>

<!-- Blog Listing -->
<section class="section">
  <div class="container">

    {% if site.posts.size > 0 %}
    <div class="blog-grid">
      {% for post in site.posts %}
      <article class="blog-card">
        <a href="{{ post.url | relative_url }}" class="blog-card-thumb">
          {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" loading="lazy">
          {% else %}
          <div class="blog-card-placeholder">
            <span>📄</span>
          </div>
          {% endif %}
        </a>
        <div class="blog-card-body">
          {% if post.categories %}
          <div class="blog-card-tags">
            {% for cat in post.categories limit:3 %}
            <span class="blog-tag">{{ cat }}</span>
            {% endfor %}
          </div>
          {% endif %}
          <h2 class="blog-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
          <p class="blog-card-excerpt">{{ post.excerpt | strip_html | truncate: 160 }} <a href="{{ post.url | relative_url }}" class="blog-read-more">Read More &rarr;</a></p>
        </div>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <div style="text-align:center; padding:60px 0; color:var(--gray-300);">
      <div style="font-size:3rem; margin-bottom:16px;">📝</div>
      <h3>No posts yet</h3>
      <p>Upload a new <code>.md</code> file to <code>_posts/</code> and it will appear here automatically.</p>
    </div>
    {% endif %}

  </div>
</section>
