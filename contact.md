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

<!-- Contact Info + General Inquiry -->
<section class="section">
  <div class="container">
    <div class="contact-grid">
      <!-- Left: Contact Info -->
      <div>
        <h2 style="margin-bottom:20px;">Contact Information</h2>

        <div class="contact-info-card">
          <div class="contact-icon">📧</div>
          <div>
            <h4>Email</h4>
            <p><a href="mailto:{{ site.company_email }}">{{ site.company_email }}</a></p>
            <p class="contact-hint">For quotations, custom specs, and general inquiries. We respond within 24 hours.</p>
          </div>
        </div>

        <div class="contact-info-card">
          <div class="contact-icon">📞</div>
          <div>
            <h4>Phone / WhatsApp</h4>
            <p><a href="tel:{{ site.company_mobile | replace: '-', '' }}">{{ site.company_mobile }}</a></p>
            <p class="contact-hint">Available Mon–Sat, 8:00 AM – 5:30 PM (CST, UTC+8)</p>
          </div>
        </div>

        <div class="contact-info-card">
          <div class="contact-icon">📍</div>
          <div>
            <h4>Factory Address</h4>
            <p>{{ site.company_name }}<br>{{ site.company_address }}</p>
          </div>
        </div>

        <div class="contact-info-card">
          <div class="contact-icon">🏢</div>
          <div>
            <h4>Established</h4>
            <p>{{ site.company_founded }} &middot; Nantong, Jiangsu, China</p>
          </div>
        </div>
      </div>

      <!-- Right: General Inquiry Form -->
      <div>
        <h2 style="margin-bottom:8px;">General Inquiry</h2>
        <p class="form-subtitle">For distributors, resellers, and general inquiries</p>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSclFS3__I2lUeqoR4srV17NQ7d7-o9y-goWC9w8WF6q2BNdig/viewform?embedded=true" width="560" height="750" frameborder="0" marginheight="0" marginwidth="0" style="border:none; border-radius:6px; max-width:100%;">Loading…</iframe>
      </div>
    </div>
  </div>
</section>

<!-- Send Your Specifications -->
<section class="section section-alt">
  <div class="container">
    <div class="specs-form-wrap">
      <div class="specs-form-header">
        <h2>Send Your Specifications</h2>
        <p class="form-subtitle">For engineers and technical buyers — provide your target parameters and we'll recommend the right capacitor model</p>
      </div>

      <form class="contact-form" id="specs-form">
        <div class="form-row">
          <div class="form-group">
            <label for="spec-name">Full Name *</label>
            <input type="text" id="spec-name" placeholder="Your full name" required>
          </div>
          <div class="form-group">
            <label for="spec-company">Company Name *</label>
            <input type="text" id="spec-company" placeholder="Your company name" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="spec-email">Email Address *</label>
            <input type="email" id="spec-email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="spec-country">Country</label>
            <input type="text" id="spec-country" placeholder="e.g. Germany">
          </div>
        </div>

        <h3 class="specs-divider">Technical Parameters</h3>

        <div class="form-row">
          <div class="form-group">
            <label for="spec-type">Capacitor Type</label>
            <select id="spec-type">
              <option value="">-- Select --</option>
              <option value="Snap-In">Snap-In Terminal</option>
              <option value="Screw Terminal">Screw Terminal</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          <div class="form-group">
            <label for="spec-voltage">Rated Voltage (V)</label>
            <input type="text" id="spec-voltage" placeholder="e.g. 400, 450, 500">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="spec-cap">Capacitance (&mu;F)</label>
            <input type="text" id="spec-cap" placeholder="e.g. 4700, 10000">
          </div>
          <div class="form-group">
            <label for="spec-size">Case Size (mm)</label>
            <input type="text" id="spec-size" placeholder="e.g. 35x50, 76x105">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="spec-ripple">Ripple Current (A)</label>
            <input type="text" id="spec-ripple" placeholder="e.g. 5.6, 10.2">
          </div>
          <div class="form-group">
            <label for="spec-life">Lifetime (hours)</label>
            <input type="text" id="spec-life" placeholder="e.g. 2000, 5000, 10000">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="spec-temp">Operating Temperature (&deg;C)</label>
            <input type="text" id="spec-temp" placeholder="e.g. -40 to +85, -25 to +105">
          </div>
          <div class="form-group">
            <label for="spec-qty">Annual Quantity</label>
            <input type="text" id="spec-qty" placeholder="e.g. 5000 pcs/year">
          </div>
        </div>

        <h3 class="specs-divider">Current Reference (Optional)</h3>

        <div class="form-row">
          <div class="form-group">
            <label for="spec-brand">Current Brand</label>
            <input type="text" id="spec-brand" placeholder="e.g. Nichicon, EPCOS, Panasonic">
          </div>
          <div class="form-group">
            <label for="spec-part">Current Part Number</label>
            <input type="text" id="spec-part" placeholder="e.g. LNT2W472MSE">
          </div>
        </div>

        <div class="form-group">
          <label for="spec-app">Application</label>
          <input type="text" id="spec-app" placeholder="e.g. UPS, solar inverter, VFD, welding machine, power supply">
        </div>

        <div class="form-group">
          <label for="spec-msg">Additional Notes</label>
          <textarea id="spec-msg" rows="4" placeholder="Any other requirements or special requests..."></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="width:100%;">Submit Specifications</button>
        <p class="form-note">Our engineering team will review and recommend a suitable model within 24 hours.</p>
      </form>
    </div>
  </div>
</section>

<script>
// Send Your Specifications form
document.getElementById('specs-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var s = function(id) { return document.getElementById(id).value; };
  var sel = function(id) { var el = document.getElementById(id); return el.options[el.selectedIndex].text; };

  var typeVal = document.getElementById('spec-type');
  var typeText = typeVal.options[typeVal.selectedIndex].text;

  var body = "=== Technical Specifications Submission ===\n\n";
  body += "Name: " + s('spec-name') + "\nCompany: " + s('spec-company') + "\nEmail: " + s('spec-email');
  if (s('spec-country')) body += "\nCountry: " + s('spec-country');
  body += "\n\n--- Technical Parameters ---";
  if (typeVal.value) body += "\nType: " + typeText;
  if (s('spec-voltage')) body += "\nVoltage: " + s('spec-voltage') + "V";
  if (s('spec-cap')) body += "\nCapacitance: " + s('spec-cap') + "\u00B5F";
  if (s('spec-size')) body += "\nCase Size: " + s('spec-size') + "mm";
  if (s('spec-ripple')) body += "\nRipple Current: " + s('spec-ripple') + "A";
  if (s('spec-life')) body += "\nLifetime: " + s('spec-life') + "h";
  if (s('spec-temp')) body += "\nTemperature: " + s('spec-temp') + "\u00B0C";
  if (s('spec-qty')) body += "\nAnnual Qty: " + s('spec-qty');
  if (s('spec-brand')) body += "\nCurrent Brand: " + s('spec-brand');
  if (s('spec-part')) body += "\nPart Number: " + s('spec-part');
  if (s('spec-app')) body += "\nApplication: " + s('spec-app');
  if (s('spec-msg')) body += "\n\n--- Notes ---\n" + s('spec-msg');

  window.location.href = "mailto:{{ site.company_email }}?subject=" + encodeURIComponent("Specification from " + s('spec-name')) + "&body=" + encodeURIComponent(body);
});
</script>
