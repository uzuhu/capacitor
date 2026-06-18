---
layout: default
title: "Aluminum Electrolytic Capacitor Selection Guide | How to Choose | HUAYU"
description: "Step-by-step guide to selecting the right aluminum electrolytic capacitor for your application. Voltage, capacitance, ripple current, temperature, lifetime, and case size explained."
---

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <h1>Aluminum Electrolytic Capacitor Selection Guide</h1>
    <p>How to choose the right snap-in or screw terminal capacitor for your application</p>
  </div>
</section>

<!-- Breadcrumb -->
<div class="breadcrumb">
  <div class="container">
    <a href="{{ '/' | relative_url }}">Home</a> <span>&rsaquo;</span> <a href="{{ '/technical/' | relative_url }}">Technical Resources</a> <span>&rsaquo;</span> Selection Guide
  </div>
</div>

<!-- Summary -->
<section class="section" style="padding-bottom:0;">
  <div class="container">
    <p style="font-size:1.1rem;color:var(--gray-700);line-height:1.8;max-width:800px;">
      <strong>Summary:</strong> Selecting the correct aluminum electrolytic capacitor requires balancing multiple parameters: rated voltage, capacitance value, ripple current capability, operating temperature range, expected lifetime, and physical case size. This guide provides a structured approach to capacitor selection for industrial power electronics applications such as frequency inverters, UPS systems, welding equipment, solar inverters, and motor drives.
    </p>
  </div>
</section>

<!-- Selection Steps -->
<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>Step-by-Step Selection Process</h2>
      <div class="divider"></div>
    </div>

    <div style="display:grid;gap:30px;">
      <div class="feature-card" style="border-left:4px solid var(--blue-dark);">
        <h3 style="color:var(--blue-dark);">Step 1 &mdash; Determine Operating Voltage</h3>
        <p style="color:var(--gray-600);margin-top:8px;">The capacitor's rated voltage must be higher than the maximum DC bus voltage in your circuit, including ripple voltage peaks. A standard safety margin is <strong>20&ndash;30%</strong> above the nominal DC bus voltage.</p>
        <table class="product-table" style="margin-top:12px;">
          <thead>
            <tr><th>DC Bus Voltage</th><th>Recommended Capacitor Rated Voltage</th></tr>
          </thead>
          <tbody>
            <tr><td>120V (single-phase 220V input)</td><td>200&ndash;250V</td></tr>
            <tr><td>310V (3-phase 220V input)</td><td>400&ndash;450V</td></tr>
            <tr><td>540V (3-phase 380V input)</td><td>450&ndash;500V</td></tr>
            <tr><td>620V (3-phase 480V input)</td><td>500V</td></tr>
            <tr><td>800V+ (690V input with boost)</td><td>Series connection required</td></tr>
          </tbody>
        </table>
      </div>

      <div class="feature-card" style="border-left:4px solid var(--blue-mid);">
        <h3 style="color:var(--blue-dark);">Step 2 &mdash; Calculate Required Capacitance</h3>
        <p style="color:var(--gray-600);margin-top:8px;">Capacitance is determined by the required voltage ripple, load current, and switching frequency. For DC-link applications:</p>
        <p style="background:var(--gray-50);padding:12px;border-radius:var(--radius);font-family:monospace;margin:12px 0;">
          C = I &times; &Delta;t / &Delta;V
        </p>
        <p style="color:var(--gray-600);">Where: I = load current (A), &Delta;t = hold-up time (s), &Delta;V = allowable voltage ripple (V). For rectified AC inputs, &Delta;t is typically half the AC cycle period.</p>
      </div>

      <div class="feature-card" style="border-left:4px solid var(--blue-light);">
        <h3 style="color:var(--blue-dark);">Step 3 &mdash; Check Ripple Current Rating</h3>
        <p style="color:var(--gray-600);margin-top:8px;">The capacitor's rated ripple current must equal or exceed the actual RMS ripple current in your circuit. Operating above the rated ripple current causes internal heating that reduces capacitor life exponentially. For high-ripple applications, select from our <a href="{{ '/high-ripple-current-capacitors/' | relative_url }}">high ripple current series</a>.</p>
      </div>

      <div class="feature-card" style="border-left:4px solid var(--orange);">
        <h3 style="color:var(--blue-dark);">Step 4 &mdash; Evaluate Temperature & Lifetime</h3>
        <p style="color:var(--gray-600);margin-top:8px;">Capacitor life is halved for every 10&deg;C increase in core temperature. Consider:</p>
        <ul style="color:var(--gray-600);margin-top:8px;">
          <li>Your equipment's maximum ambient temperature</li>
          <li>Temperature rise from ripple current self-heating</li>
          <li>Proximity to heat-generating components (transformers, heat sinks, IGBTs)</li>
          <li>Required service life (years of continuous or intermittent operation)</li>
        </ul>
        <p style="margin-top:8px;">For extended life requirements, see our <a href="{{ '/long-life-capacitors/' | relative_url }}">long life capacitor series</a>.</p>
      </div>

      <div class="feature-card" style="border-left:4px solid var(--gray-300);">
        <h3 style="color:var(--blue-dark);">Step 5 &mdash; Select Terminal Type & Case Size</h3>
        <p style="color:var(--gray-600);margin-top:8px;">Choose between:</p>
        <ul style="color:var(--gray-600);margin-top:8px;">
          <li><strong>Snap-in terminal</strong> — For compact PCB mounting, automated assembly, applications up to 40&phi; diameter</li>
          <li><strong>Screw terminal</strong> — For high-current connections, vibration-prone environments, and large case sizes (35&phi;&ndash;100&phi;)</li>
        </ul>
        <p style="margin-top:8px;">Case size is determined by the capacitance/voltage combination and cooling requirements. Larger case sizes typically offer better thermal performance and longer life.</p>
      </div>

      <div class="feature-card" style="border-left:4px solid var(--blue-dark);">
        <h3 style="color:var(--blue-dark);">Step 6 &mdash; Review Special Requirements</h3>
        <p style="color:var(--gray-600);margin-top:8px;">Consider additional factors:</p>
        <ul style="color:var(--gray-600);margin-top:8px;">
          <li><strong>Altitude derating</strong> — Above 2000m, voltage and ripple current ratings may need derating</li>
          <li><strong>Vibration resistance</strong> — Screw terminal capacitors generally offer higher vibration tolerance</li>
          <li><strong>Polarity protection</strong> — Ensure correct polarity in your circuit design</li>
          <li><strong>Parallel/series operation</strong> — For higher capacitance or voltage, proper balancing resistors may be needed</li>
          <li><strong>Regulatory compliance</strong> — RoHS, REACH, UL recognition if required</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Quick Selection Table -->
<section class="section section-alt">
  <div class="container">
    <div class="section-title">
      <h2>Quick Selection by Application</h2>
      <div class="divider"></div>
    </div>
    <div style="overflow-x:auto;">
      <table class="product-table">
        <thead>
          <tr>
            <th>Application</th>
            <th>Recommended Series</th>
            <th>Key Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="{{ '/applications/frequency-inverters/' | relative_url }}">Frequency Inverters / VFD</a></td>
            <td>CD294, CD295 (Snap-In), CD136, CD13HL (Screw)</td>
            <td>400&ndash;500V, high ripple, 105&deg;C</td>
          </tr>
          <tr>
            <td><a href="{{ '/applications/ups-systems/' | relative_url }}">UPS Systems</a></td>
            <td>CD295, CD296 (Snap-In), CD13HL (Screw)</td>
            <td>400&ndash;450V, long life, low ESR</td>
          </tr>
          <tr>
            <td><a href="{{ '/applications/welding-equipment/' | relative_url }}">Welding Equipment</a></td>
            <td>CD294, CD13NH (Screw)</td>
            <td>400&ndash;500V, ultra-high ripple, rugged</td>
          </tr>
          <tr>
            <td><a href="{{ '/applications/solar-inverters/' | relative_url }}">Solar Inverters</a></td>
            <td>CD295, CD296 (Snap-In)</td>
            <td>400&ndash;500V, long life, wide temp</td>
          </tr>
          <tr>
            <td><a href="{{ '/applications/industrial-power/' | relative_url }}">Industrial Power Supplies</a></td>
            <td>CD292, CD293 (Snap-In)</td>
            <td>200&ndash;450V, standard ripple</td>
          </tr>
          <tr>
            <td><a href="{{ '/applications/servo-drives/' | relative_url }}">Servo Drives</a></td>
            <td>CD17FX, CD295 (Snap-In)</td>
            <td>300&ndash;450V, compact, reliable</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <div class="container">
    <h2>Still Not Sure Which Capacitor to Choose?</h2>
    <p>Our engineering team can review your application requirements and recommend the optimal capacitor.</p>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Get a Selection Recommendation &rarr;</a>
  </div>
</section>
