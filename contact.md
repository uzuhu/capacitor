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

        <form class="contact-form" id="inquiry-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="20cf6209-371e-4965-8a98-d7655734d626">
          <input type="hidden" name="subject" value="New General Inquiry from capacitormanufacturer.com">
          <input type="hidden" name="from_name" value="HUAYU Capacitor Website">

          <div class="form-row">
            <div class="form-group">
              <label for="inq-name">Full Name *</label>
              <input type="text" id="inq-name" name="name" placeholder="Your full name" required>
            </div>
            <div class="form-group">
              <label for="inq-company">Company Name *</label>
              <input type="text" id="inq-company" name="company" placeholder="Your company name" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="inq-email">Email Address *</label>
              <input type="email" id="inq-email" name="email" placeholder="your@email.com" required>
            </div>
            <div class="form-group">
              <label for="inq-phone">Phone / WhatsApp</label>
              <input type="tel" id="inq-phone" name="phone" placeholder="+1-xxx-xxx-xxxx">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="inq-country">Country</label>
              <input type="text" id="inq-country" name="country" placeholder="e.g. United States">
            </div>
            <div class="form-group">
              <label for="inq-type">Customer Type</label>
              <select id="inq-type" name="customer_type">
                <option value="">-- Select --</option>
                <option value="Distributor">Distributor</option>
                <option value="OEM Manufacturer">OEM Manufacturer</option>
                <option value="Repair Shop">Repair / Aftermarket</option>
                <option value="Engineer / Individual">Engineer / Individual</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="inq-product">Product Interest</label>
            <select id="inq-product" name="product_interest">
              <option value="">-- Select a product category --</option>
              <option value="Snap-In Terminal Capacitors">Snap-In Terminal Capacitors</option>
              <option value="Screw Terminal Capacitors">Screw Terminal Capacitors</option>
              <option value="Custom Specification Capacitors">Custom Specification Capacitors</option>
              <option value="Sample Request">Sample Request</option>
              <option value="Other / General Inquiry">Other / General Inquiry</option>
            </select>
          </div>
          <div class="form-group">
            <label for="inq-message">Your Message *</label>
            <textarea id="inq-message" name="message" rows="5" placeholder="Please describe your requirements: capacitance, voltage, case size, quantity, delivery timeline..." required></textarea>
          </div>
          <div class="form-group" style="display:none;">
            <input type="text" name="honeypot" placeholder="Leave empty">
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Send Inquiry</button>
          <p class="form-note" id="inq-note">We'll get back to you within 24 hours.</p>
        </form>
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

      <form class="contact-form" id="specs-form" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="20cf6209-371e-4965-8a98-d7655734d626">
        <input type="hidden" name="subject" value="New Technical Specification from capacitormanufacturer.com">
        <input type="hidden" name="from_name" value="HUAYU Capacitor Website">
        <div class="form-row">
          <div class="form-group">
            <label for="spec-name">Full Name *</label>
            <input type="text" id="spec-name" name="name" placeholder="Your full name" required>
          </div>
          <div class="form-group">
            <label for="spec-company">Company Name *</label>
            <input type="text" id="spec-company" name="company" placeholder="Your company name" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="spec-email">Email Address *</label>
            <input type="email" id="spec-email" name="email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="spec-country">Country</label>
            <input type="text" id="spec-country" name="country" placeholder="e.g. Germany">
          </div>
        </div>

        <h3 class="specs-divider">Technical Parameters</h3>

        <div class="form-row">
          <div class="form-group">
            <label for="spec-type">Capacitor Type</label>
            <select id="spec-type" name="capacitor_type">
              <option value="">-- Select --</option>
              <option value="Snap-In">Snap-In Terminal</option>
              <option value="Screw Terminal">Screw Terminal</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          <div class="form-group">
            <label for="spec-voltage">Rated Voltage (V)</label>
            <input type="text" id="spec-voltage" name="voltage" placeholder="e.g. 400, 450, 500">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="spec-cap">Capacitance (&mu;F)</label>
            <input type="text" id="spec-cap" name="capacitance" placeholder="e.g. 4700, 10000">
          </div>
          <div class="form-group">
            <label for="spec-size">Case Size (mm)</label>
            <input type="text" id="spec-size" name="case_size" placeholder="e.g. 35x50, 76x105">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="spec-ripple">Ripple Current (A)</label>
            <input type="text" id="spec-ripple" name="ripple_current" placeholder="e.g. 5.6, 10.2">
          </div>
          <div class="form-group">
            <label for="spec-life">Lifetime (hours)</label>
            <input type="text" id="spec-life" name="lifetime" placeholder="e.g. 2000, 5000, 10000">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="spec-temp">Operating Temperature (&deg;C)</label>
            <input type="text" id="spec-temp" name="temperature" placeholder="e.g. -40 to +85, -25 to +105">
          </div>
          <div class="form-group">
            <label for="spec-qty">Annual Quantity</label>
            <input type="text" id="spec-qty" name="annual_qty" placeholder="e.g. 5000 pcs/year">
          </div>
        </div>

        <h3 class="specs-divider">Current Reference (Optional)</h3>

        <div class="form-row">
          <div class="form-group">
            <label for="spec-brand">Current Brand</label>
            <input type="text" id="spec-brand" name="current_brand" placeholder="e.g. Nichicon, EPCOS, Panasonic">
          </div>
          <div class="form-group">
            <label for="spec-part">Current Part Number</label>
            <input type="text" id="spec-part" name="part_number" placeholder="e.g. LNT2W472MSE">
          </div>
        </div>

        <div class="form-group">
            <label for="spec-app">Application</label>
            <input type="text" id="spec-app" name="application" placeholder="e.g. UPS, solar inverter, VFD, welding machine, power supply">
        </div>

        <div class="form-group">
            <label for="spec-msg">Additional Notes</label>
            <textarea id="spec-msg" name="notes" rows="4" placeholder="Any other requirements or special requests..."></textarea>
        </div>

        <div class="form-group" style="display:none;">
          <input type="text" name="honeypot" placeholder="Leave empty">
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Submit Specifications</button>
        <p class="form-note" id="spec-note">Our engineering team will review and recommend a suitable model within 24 hours.</p>
      </form>
    </div>
  </div>
</section>

<script>
// Submit forms via Web3Forms AJAX
function submitWeb3Form(formId, noteId) {
  var form = document.getElementById(formId);
  var note = document.getElementById(noteId);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var origText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    note.textContent = 'Submitting your inquiry...';

    var data = {};
    var inputs = form.querySelectorAll('[name]');
    for (var i = 0; i < inputs.length; i++) {
      var el = inputs[i];
      if (el.type === 'select-one') {
        data[el.name] = el.options[el.selectedIndex].value;
      } else if (el.type !== 'submit') {
        data[el.name] = el.value;
      }
    }

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function(r) { return r.json(); })
    .then(function(res) {
      if (res.success) {
        form.innerHTML = '<div style="text-align:center; padding:40px 20px;">' +
          '<div style="font-size:3rem; margin-bottom:16px;">✅</div>' +
          '<h3 style="color:#1a5276;">Thank You!</h3>' +
          '<p style="color:#566573;">Your message has been sent successfully. We\'ll get back to you within 24 hours.</p>' +
          '</div>';
      } else {
        note.textContent = 'Something went wrong. Please try again or email us directly.';
        btn.textContent = origText;
        btn.disabled = false;
      }
    })
    .catch(function() {
      note.textContent = 'Network error. Please try again or email us directly.';
      btn.textContent = origText;
      btn.disabled = false;
    });
  });
}

submitWeb3Form('inquiry-form', 'inq-note');
submitWeb3Form('specs-form', 'spec-note');
</script>
