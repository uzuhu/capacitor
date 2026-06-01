---
layout: default
title: "Blog - HUAYU Capacitor News & Technical Articles"
description: "Stay updated with HUAYU capacitor product news, technical articles, and industry insights."
permalink: /blog/
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
  <div class="container" style="max-width:1100px;">

    <div class="blog-grid">
      {% for post in paginator.posts %}
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

    <!-- Pagination -->
    {% if paginator.total_pages > 1 %}
    <div class="pagination">
      {% if paginator.previous_page %}
        <a href="{{ paginator.previous_page_path | relative_url }}">&larr; Previous</a>
      {% endif %}

      {% if paginator.page == 1 %}
        <span class="current-page">1</span>
      {% else %}
        <a href="{{ '/' | relative_url }}blog/">1</a>
      {% endif %}

      {% for page in (2..paginator.total_pages) %}
        {% if page == paginator.page %}
          <span class="current-page">{{ page }}</span>
        {% else %}
          <a href="{{ site.url }}{{ site.baseurl }}/blog/page{{ page }}/">{{ page }}</a>
        {% endif %}
      {% endfor %}

      {% if paginator.next_page %}
        <a href="{{ paginator.next_page_path | relative_url }}">Next &rarr;</a>
      {% endif %}
    </div>
    {% endif %}

    {% if paginator.posts.size == 0 %}
    <div style="text-align:center; padding:60px 0; color:var(--gray-300);">
      <div style="font-size:3rem; margin-bottom:16px;">📝</div>
      <h3>No posts yet</h3>
      <p>Upload a new `.md` file to `_posts/` and it will appear here automatically.</p>
    </div>
    {% endif %}

  </div>
</section>
