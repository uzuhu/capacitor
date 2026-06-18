---
layout: default
title: "Resources - Blog & FAQ | HUAYU Capacitor"
description: "Explore HUAYU's capacitor resources — technical blog articles, frequently asked questions, selection guides, and quality information."
---

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <h1>Resources</h1>
    <p>Technical blog, frequently asked questions, and guides for aluminum electrolytic capacitors</p>
  </div>
</section>

<!-- Breadcrumb -->
<div class="breadcrumb">
  <div class="container">
    <a href="{{ '/' | relative_url }}">Home</a> <span>&rsaquo;</span> Resources
  </div>
</div>

<!-- Quick Links -->
<section class="section" style="padding-bottom:0;">
  <div class="container">
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-bottom:20px;">
      <a href="#blog" class="btn btn-primary" style="padding:10px 28px;">Blog Articles &darr;</a>
      <a href="{{ '/faq/' | relative_url }}" class="btn btn-outline" style="padding:10px 28px;">FAQ &rarr;</a>
      <a href="{{ '/selection-guide/' | relative_url }}" class="btn btn-outline" style="padding:10px 28px;">Selection Guide &rarr;</a>
      <a href="{{ '/quality-control/' | relative_url }}" class="btn btn-outline" style="padding:10px 28px;">Quality Control &rarr;</a>
    </div>
  </div>
</section>

<!-- Blog Section -->
<section class="section section-alt" id="blog">
  <div class="container">
    <div class="section-title">
      <h2>Technical Blog</h2>
      <div class="divider"></div>
      <p>In-depth articles about aluminum electrolytic capacitor selection, application, reliability, and testing</p>
    </div>
    <div class="blog-list">
      {% for post in site.posts limit:10 %}
      <article class="blog-card">
        <div class="blog-card-body">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <div class="blog-meta">
            <span class="blog-date">{{ post.date | date: "%b %d, %Y" }}</span>
            <span class="blog-category">{{ post.categories | join: ", " }}</span>
          </div>
          <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
          <a href="{{ post.url | relative_url }}" class="btn btn-sm btn-secondary">Read More &rarr;</a>
        </div>
      </article>
      {% endfor %}
    </div>
    <div style="text-align:center;margin-top:30px;">
      <a href="{{ '/blog/' | relative_url }}" class="btn btn-primary">View All Blog Posts &rarr;</a>
    </div>
  </div>
</section>

<!-- FAQ Preview -->
<section class="section" id="faq">
  <div class="container">
    <div class="section-title">
      <h2>Frequently Asked Questions</h2>
      <div class="divider"></div>
      <p>Quick answers to the most common questions about HUAYU capacitors</p>
    </div>
    <div style="display:grid;gap:12px;max-width:700px;margin:0 auto;">
      <div class="faq-preview-item">
        <a href="{{ '/faq/' | relative_url }}#faq-products" class="faq-preview-link">
          <span class="faq-preview-icon">🔲</span>
          <span>Products &amp; Specifications</span>
          <span class="faq-preview-arrow">&rarr;</span>
        </a>
      </div>
      <div class="faq-preview-item">
        <a href="{{ '/faq/' | relative_url }}#faq-custom" class="faq-preview-link">
          <span class="faq-preview-icon">⚙️</span>
          <span>Custom Orders &amp; OEM</span>
          <span class="faq-preview-arrow">&rarr;</span>
        </a>
      </div>
      <div class="faq-preview-item">
        <a href="{{ '/faq/' | relative_url }}#faq-quality" class="faq-preview-link">
          <span class="faq-preview-icon">✓</span>
          <span>Quality &amp; Reliability</span>
          <span class="faq-preview-arrow">&rarr;</span>
        </a>
      </div>
      <div class="faq-preview-item">
        <a href="{{ '/faq/' | relative_url }}#faq-ordering" class="faq-preview-link">
          <span class="faq-preview-icon">📦</span>
          <span>Ordering &amp; Shipping</span>
          <span class="faq-preview-arrow">&rarr;</span>
        </a>
      </div>
      <div class="faq-preview-item">
        <a href="{{ '/faq/' | relative_url }}#faq-support" class="faq-preview-link">
          <span class="faq-preview-icon">🔧</span>
          <span>Technical Support</span>
          <span class="faq-preview-arrow">&rarr;</span>
        </a>
      </div>
    </div>
    <div style="text-align:center;margin-top:24px;">
      <a href="{{ '/faq/' | relative_url }}" class="btn btn-primary">View Full FAQ &rarr;</a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <div class="container">
    <h2>Still Can't Find What You Need?</h2>
    <p>Our engineering team is ready to answer your specific questions.</p>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Contact Our Team &rarr;</a>
  </div>
</section>

<style>
.faq-preview-item {
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, border-color 0.2s;
}
.faq-preview-item:hover {
  box-shadow: var(--shadow);
  border-color: var(--blue-light);
}
.faq-preview-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--gray-800);
}
.faq-preview-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}
.faq-preview-link span:not(.faq-preview-icon):not(.faq-preview-arrow) {
  flex: 1;
}
.faq-preview-arrow {
  color: var(--blue-light);
  font-size: 1.2rem;
  flex-shrink: 0;
}
</style>
