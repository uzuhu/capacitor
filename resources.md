---
layout: default
title: "Articles & FAQ | HUAYU Capacitor Knowledge"
description: "Explore HUAYU's capacitor knowledge — technical articles, FAQs, selection guides, and quality information."
---

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <h1>Articles & FAQ</h1>
    <p>Technical articles, frequently asked questions, and guides for aluminum electrolytic capacitors</p>
  </div>
</section>

<!-- Two Main Cards -->
<section class="section">
  <div class="container">
    <div class="resources-grid">

      <!-- Blog Card -->
      <a href="{{ '/blog/' | relative_url }}" class="resource-card">
        <div class="resource-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="6" y="6" width="36" height="36" rx="6" stroke="#2471a3" stroke-width="2.5" fill="#eaf2f8"/>
            <line x1="15" y1="17" x2="33" y2="17" stroke="#2471a3" stroke-width="2" stroke-linecap="round"/>
            <line x1="15" y1="24" x2="33" y2="24" stroke="#2471a3" stroke-width="2" stroke-linecap="round"/>
            <line x1="15" y1="31" x2="27" y2="31" stroke="#2471a3" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h2>Articles</h2>
        <p>In-depth articles about capacitor selection, application, reliability, and testing. Written by our engineering team to help you make informed decisions.</p>
        <span class="resource-meta">11 articles &rarr;</span>
      </a>

      <!-- FAQ Card -->
      <a href="{{ '/faq/' | relative_url }}" class="resource-card">
        <div class="resource-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="18" stroke="#2471a3" stroke-width="2.5" fill="#eaf2f8"/>
            <text x="24" y="30" text-anchor="middle" font-size="22" font-weight="bold" fill="#2471a3" font-family="sans-serif">?</text>
          </svg>
        </div>
        <h2>Frequently Asked Questions</h2>
        <p>Quick answers to the most common questions about HUAYU capacitors — products, custom orders, quality, ordering, and tech support.</p>
        <span class="resource-meta">9 answers &rarr;</span>
      </a>

    </div>
  </div>
</section>

<!-- Quick Links Row -->
<section class="section section-alt">
  <div class="container">
    <div class="section-title">
      <h2>Quick Links</h2>
      <div class="divider"></div>
    </div>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a href="{{ '/selection-guide/' | relative_url }}" class="btn btn-secondary" style="padding:10px 28px;">Capacitor Selection Guide &rarr;</a>
      <a href="{{ '/quality-control/' | relative_url }}" class="btn btn-secondary" style="padding:10px 28px;">Quality Control &rarr;</a>
      <a href="{{ '/products/' | relative_url }}" class="btn btn-secondary" style="padding:10px 28px;">Product Datasheets &rarr;</a>
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
.resources-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  max-width: 780px;
  margin: 0 auto;
}
@media (max-width: 640px) {
  .resources-grid { grid-template-columns: 1fr; }
}
.resource-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 28px;
  background: var(--white);
  border: 2px solid var(--gray-200);
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.25s;
}
.resource-card:hover {
  border-color: var(--blue-light);
  box-shadow: 0 8px 32px rgba(36,113,163,0.12);
  transform: translateY(-3px);
}
.resource-icon {
  margin-bottom: 18px;
}
.resource-card h2 {
  margin: 0 0 12px;
  font-size: 1.3rem;
  color: var(--blue-dark);
}
.resource-card p {
  margin: 0 0 18px;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--gray-600);
}
.resource-meta {
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--blue-light);
  letter-spacing: 0.3px;
}
</style>
