---
layout: default
title: "Contact HUAYU - Aluminum Electrolytic Capacitor Manufacturer"
description: "Contact Nantong HUAYU Electronics Co., Ltd. for snap-in and screw terminal aluminum electrolytic capacitors. Request a quote or get technical support."
---

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <h1>Contact Us</h1>
    <p>Get in touch for quotations, custom specifications, or technical support</p>
  </div>
</section>

<!-- Breadcrumb -->
<div class="breadcrumb">
  <div class="container">
    <a href="{{ '/' | relative_url }}">Home</a> <span>&rsaquo;</span> Contact Us
  </div>
</div>

<!-- Contact Section -->
<section class="section">
  <div class="container">
    <div class="contact-grid">
      <!-- Left: Contact Info -->
      <div>
        <h2 style="margin-bottom:20px;">Get in Touch</h2>

        <div class="contact-info-card">
          <div class="contact-icon">📧</div>
          <div>
            <h4>Email</h4>
            <p><a href="mailto:{{ site.company_email }}">{{ site.company_email }}</a></p>
            <p style="font-size:0.8rem;color:var(--gray-300);margin-top:4px;">For quotations, custom specifications, and general inquiries. We typically respond within 24 hours.</p>
          </div>
        </div>

        <div class="contact-info-card">
          <div class="contact-icon">📞</div>
          <div>
            <h4>Phone</h4>
            <p><a href="tel:{{ site.company_tel | replace: '-', '' }}">{{ site.company_tel }}</a> (Office)</p>
            <p><a href="tel:{{ site.company_mobile | replace: '-', '' }}">{{ site.company_mobile }}</a> (Mobile / WhatsApp)</p>
            <p style="font-size:0.8rem;color:var(--gray-300);margin-top:4px;">Available Monday to Saturday, 8:00 AM &ndash; 5:30 PM (China Standard Time, UTC+8)</p>
          </div>
        </div>

        <div class="contact-info-card">
          <div class="contact-icon">📍</div>
          <div>
            <h4>Factory Address</h4>
            <p>
              {{ site.company_name }}<br>
              {{ site.company_address }}
            </p>
          </div>
        </div>

        <div class="contact-info-card">
          <div class="contact-icon">🕒</div>
          <div>
            <h4>Working Hours</h4>
            <p>Monday &ndash; Saturday: 8:00 AM &ndash; 5:30 PM (CST, UTC+8)</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div class="img-placeholder" style="height:200px;margin-top:16px;">
          <div>📷</div>
          <div>Replace with factory location map or aerial photo</div>
          <div class="size-hint">Recommended: 560 &times; 200px</div>
        </div>
      </div>

      <!-- Right: Inquiry Form -->
      <div>
        <h2 style="margin-bottom:20px;">Send an Inquiry</h2>
        <p style="color:var(--gray-600);margin-bottom:20px;">Fill out the form below and we will get back to you within 24 hours. For faster response, email us directly at <a href="mailto:{{ site.company_email }}">{{ site.company_email }}</a>.</p>

        <form action="https://formspree.io/f/{% if site.formspree_id %}{{ site.formspree_id }}{% else %}your-formspree-id{% endif %}" method="POST" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input type="text" id="name" name="name" placeholder="Your full name" required>
            </div>
            <div class="form-group">
              <label for="company">Company Name *</label>
              <input type="text" id="company" name="company" placeholder="Your company name" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="email">Email Address *</label>
              <input type="email" id="email" name="_replyto" placeholder="your@email.com" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone / WhatsApp</label>
              <input type="tel" id="phone" name="phone" placeholder="+1-xxx-xxx-xxxx">
            </div>
          </div>
          <div class="form-group">
            <label for="product">Product Interest</label>
            <select id="product" name="product_interest">
              <option value="">-- Select a product category --</option>
              <option value="snap-in">Snap-In Terminal Capacitors</option>
              <option value="screw">Screw Terminal Capacitors</option>
              <option value="custom">Custom Specification Capacitors</option>
              <option value="samples">Sample Request</option>
              <option value="other">Other / General Inquiry</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Your Message / Requirements *</label>
            <textarea id="message" name="message" rows="6" placeholder="Please describe your requirements: capacitance, voltage, case size, quantity, delivery timeline..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Send Inquiry</button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- FAQ / Quick Info -->
<section class="section section-alt">
  <div class="container">
    <div class="section-title">
      <h2>Common Inquiry Topics</h2>
      <div class="divider"></div>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <h3>📦 Custom Specification Request</h3>
        <p>Need a capacitor with non-standard parameters? Provide us with your target capacitance, voltage, case size, ripple current, operating temperature, and expected lifespan.</p>
      </div>
      <div class="feature-card">
        <h3>📬 Sample Request</h3>
        <p>We offer samples for evaluation and qualification testing. Standard samples can be shipped within 5&ndash;7 business days.</p>
      </div>
      <div class="feature-card">
        <h3>🏭 OEM / ODM Service</h3>
        <p>We provide full OEM and ODM services. Capacitors can be manufactured with your brand and custom packaging.</p>
      </div>
      <div class="feature-card">
        <h3>🌐 International Shipping</h3>
        <p>We ship globally via sea freight and air freight. Standard packaging includes individual carton boxes with moisture barrier bags.</p>
      </div>
    </div>
  </div>
</section>
