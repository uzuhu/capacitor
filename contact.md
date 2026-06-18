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

      </div>

      <!-- Right: Inquiry Form -->
      <div>
        <h2 style="margin-bottom:20px;">Send an Inquiry</h2>
        <p style="color:var(--gray-600);margin-bottom:20px;">Fill out the form below and we will get back to you within 24 hours. For faster response, email us directly at <a href="mailto:{{ site.company_email }}">{{ site.company_email }}</a>.</p>

        <form class="contact-form" id="inquiry-form">
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
              <input type="email" id="email" name="email" placeholder="your@email.com" required>
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
              <option value="Snap-In Terminal Capacitors">Snap-In Terminal Capacitors</option>
              <option value="Screw Terminal Capacitors">Screw Terminal Capacitors</option>
              <option value="Custom Specification Capacitors">Custom Specification Capacitors</option>
              <option value="Sample Request">Sample Request</option>
              <option value="Other / General Inquiry">Other / General Inquiry</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Your Message / Requirements *</label>
            <textarea id="message" name="message" rows="6" placeholder="Please describe your requirements: capacitance, voltage, case size, quantity, delivery timeline..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Send Inquiry</button>
          <p style="font-size:0.75rem;color:var(--gray-300);margin-top:10px;text-align:center;">
            Your email app will open with the inquiry pre-filled. Just click Send.
          </p>
        </form>

        <script>
        document.getElementById('inquiry-form').addEventListener('submit', function(e) {
          e.preventDefault();
          var name    = document.getElementById('name').value;
          var company = document.getElementById('company').value;
          var email   = document.getElementById('email').value;
          var phone   = document.getElementById('phone').value;
          var product = document.getElementById('product');
          var productText = product.options[product.selectedIndex].text;
          var msg     = document.getElementById('message').value;

          var body = "Inquiry from: " + name + "\n";
          body += "Company: " + company + "\n";
          body += "Email: " + email + "\n";
          if (phone) body += "Phone: " + phone + "\n";
          if (product.value) body += "Product Interest: " + productText + "\n";
          body += "\n" + msg;

          var mailto = "mailto:{{ site.company_email }}?subject=" + encodeURIComponent("Inquiry from " + name) + "&body=" + encodeURIComponent(body);
          window.location.href = mailto;
        });
        </script>
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
        <h3>📩 Request a Quotation</h3>
        <p>Fill out the form above or email us directly at {{ site.company_email }}. Include your target specifications (capacitance, voltage, case size, quantity) for an accurate quote. We respond within 24 hours.</p>
      </div>
      <div class="feature-card">
        <h3>📬 Sample Request</h3>
        <p>We offer samples for evaluation and qualification testing. Standard samples can be shipped within 5&ndash;7 business days.</p>
      </div>
      <div class="feature-card">
        <h3>🏭 OEM / ODM Service</h3>
        <p>We provide full OEM and ODM services. Capacitors can be manufactured with your brand and custom packaging.</p>
      </div>
    </div>
  </div>
</section>

<!-- Ordering FAQ -->
<section class="section">
  <div class="container" style="max-width:800px;">
    <div class="section-title">
      <h2>Ordering &amp; Shipping FAQ</h2>
      <div class="divider"></div>
    </div>

    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>How can I request a quotation?</span>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>You can request a quotation by filling out our online inquiry form above, or by emailing us directly at <a href="mailto:{{ site.company_email }}">{{ site.company_email }}</a>. Please include your target specifications (capacitance, voltage, case size, quantity, and any special requirements) for an accurate quotation. We typically respond within 24 hours.</p>
      </div>
    </div>

    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>What payment terms do you accept?</span>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>We accept <strong>T/T (wire transfer)</strong>, <strong>L/C (letter of credit)</strong>, and for established customers, negotiated payment terms. Standard terms for new customers are 30% deposit with 70% before shipment, or 100% T/T in advance for smaller orders.</p>
      </div>
    </div>

    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>What shipping methods do you use?</span>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>We ship via <strong>air freight, sea freight, or international express</strong> (DHL, FedEx, UPS, TNT) depending on order size and urgency. For smaller orders and samples, express shipping is typically the most cost-effective option, with delivery in 3&ndash;7 business days worldwide.</p>
      </div>
    </div>

    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>Do you export to my country?</span>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>We currently export to <strong>over 50 countries</strong> across Asia, Europe, the Americas, the Middle East, and Africa. <a href="{{ '/contact/' | relative_url }}">Contact us</a> to check availability for your location.</p>
      </div>
    </div>

    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>What is your return/warranty policy?</span>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>All HUAYU capacitors are covered by our <strong>manufacturing warranty</strong> against defects in materials and workmanship. Our warranty terms are detailed in our standard sales conditions, available upon request.</p>

<!-- FAQPage Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I request a quotation from HUAYU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fill out the online inquiry form on our website or email zuwho@hotmail.com with your target specifications. We typically respond within 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What payment terms does HUAYU accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HUAYU accepts T/T wire transfer, L/C letter of credit, and negotiated terms for established customers."
      }
    },
    {
      "@type": "Question",
      "name": "What shipping methods does HUAYU use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HUAYU ships via air freight, sea freight, or international express (DHL, FedEx, UPS, TNT) depending on order size and urgency."
      }
    },
    {
      "@type": "Question",
      "name": "Does HUAYU export worldwide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HUAYU exports to over 50 countries across Asia, Europe, the Americas, the Middle East, and Africa."
      }
    }
  ]
}
</script>

<style>
.faq-item {
  margin-bottom: 2px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  overflow: hidden;
}
.faq-item:hover { box-shadow: var(--shadow); }
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--white);
  cursor: pointer;
  user-select: none;
}
.faq-question:hover { background: var(--gray-50); }
.faq-question span:first-child {
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--gray-800);
  line-height: 1.4;
}
.faq-toggle {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-200);
  border-radius: 50%;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--gray-600);
  transition: all 0.25s;
}
.faq-item.open .faq-toggle {
  background: var(--blue-mid);
  color: var(--white);
  transform: rotate(45deg);
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
  padding: 0 20px;
  background: var(--gray-50);
}
.faq-item.open .faq-answer {
  max-height: 400px;
  padding: 16px 20px;
}
.faq-answer p {
  margin: 0;
  color: var(--gray-600);
  line-height: 1.7;
  font-size: 0.95rem;
}
</style>

<script>
function toggleFaq(el) {
  var item = el.closest('.faq-item');
  if (!item) return;
  var parent = item.closest('.section');
  if (parent) {
    parent.querySelectorAll('.faq-item.open').forEach(function(i) {
      if (i !== item) i.classList.remove('open');
    });
  }
  item.classList.toggle('open');
}
</script>
