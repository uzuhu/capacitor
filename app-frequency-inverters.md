---
layout: default
title: "VFD Capacitors - Frequency Inverter DC-Link & Braking Solutions | HUAYU"
description: "Aluminum electrolytic capacitor solutions for Variable Frequency Drives (VFDs). DC bus support and braking circuit capacitor selection with CD13NH and CD13HL series."
permalink: /applications/frequency-inverters/
---

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <h1>Frequency Inverters (VFDs)</h1>
    <p>Aluminum Electrolytic Capacitor Solutions for Variable Frequency Drive Applications</p>
  </div>
</section>

<!-- Breadcrumb -->
<div class="breadcrumb">
  <div class="container">
    <a href="{{ '/' | relative_url }}">Home</a> <span>&rsaquo;</span> <a href="{{ '/applications/' | relative_url }}">Applications</a> <span>&rsaquo;</span> Frequency Inverters
  </div>
</div>



<!-- Summary -->
<section class="section" style="padding-bottom:0;">
  <div class="container">
    <p style="font-size:1.1rem;color:var(--gray-700);line-height:1.8;max-width:800px;">
      <strong>Summary:</strong> HUAYU provides aluminum electrolytic capacitor solutions for variable frequency drives (VFDs) and frequency inverters. Our snap-in (CD294, CD295) and screw terminal (CD13HL, CD13NH) series handle DC-link filtering, bus support, and braking circuits in VFD applications from 220V to 690V input.
    </p>
  </div>
</section>



<!-- VFD Architecture -->
<section class="section section-alt">
  <div class="container">
    <div class="section-title">
      <h2>Capacitor Functions in a VFD</h2>
      <div class="divider"></div>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🔄</div>
        <h3>DC-Link Smoothing</h3>
        <p>The primary role &mdash; smooths the 6-pulse rectified AC into stable DC. The capacitor bank must absorb the 300 Hz (50 Hz input) or 360 Hz (60 Hz input) ripple from the rectifier stage while also handling the high-frequency ripple from the inverter PWM output stage.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Energy Buffer</h3>
        <p>Provides ride-through capability during brief power interruptions and absorbs energy during motor deceleration (regenerative braking). Insufficient capacitance leads to DC bus voltage collapse during transient loads.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🛑</div>
        <h3>Braking Absorption</h3>
        <p>In VFDs without regenerative front ends, the capacitor bank absorbs regenerated energy during motor braking. For high-inertia loads, a dedicated braking chopper and resistor are used, but the DC-link capacitor must still handle the current pulses.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📉</div>
        <h3>dv/dt Filtering</h3>
        <p>Output filter capacitors (often in LC filter configurations) reduce the dv/dt of the PWM output waveform to protect motor insulation and reduce electromagnetic interference (EMI).</p>
      </div>
    </div>
  </div>
</section>

<!-- Voltage Selection Table -->
<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>Voltage Selection Guide</h2>
      <div class="divider"></div>
    </div>
    <table class="spec-table">
      <thead>
        <tr>
          <th>VFD Input Voltage</th>
          <th>Nominal DC Bus Voltage</th>
          <th>Peak DC Bus Voltage</th>
          <th>Recommended Capacitor Voltage Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>220V AC (1-phase)</td>
          <td>~280V DC</td>
          <td>~311V DC</td>
          <td><strong>400V</strong></td>
        </tr>
        <tr>
          <td>380V AC (3-phase)</td>
          <td>~510V DC</td>
          <td>~537V DC</td>
          <td><strong>400V</strong> (series pair) or <strong>600V</strong></td>
        </tr>
        <tr>
          <td>440V AC (3-phase)</td>
          <td>~591V DC</td>
          <td>~622V DC</td>
          <td><strong>400V</strong> (series pair) or <strong>600V</strong></td>
        </tr>
        <tr>
          <td>690V AC (3-phase)</td>
          <td>~930V DC</td>
          <td>~976V DC</td>
          <td><strong>500V</strong> (series pair with balancing)</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Recommended Series -->
<section class="section section-alt">
  <div class="container">
    <div class="section-title">
      <h2>Recommended Series</h2>
      <div class="divider"></div>
      <p>HUAYU series best suited for VFD applications</p>
    </div>
    <table class="spec-table">
      <thead>
        <tr>
          <th>Series</th>
          <th>Type</th>
          <th>Key Features</th>
          <th>Typical VFD Application</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>CD294</strong></td>
          <td>Snap-In</td>
          <td>Ultra-low ESR, extended life</td>
          <td>Small VFD DC-link (&lt;7.5kW)</td>
        </tr>
        <tr>
          <td><strong>CD297</strong></td>
          <td>Snap-In</td>
          <td>Load-life optimized, high ripple</td>
          <td>Medium VFD DC-link (7.5&ndash;37kW)</td>
        </tr>
        <tr>
          <td><strong>CD13NH</strong></td>
          <td>Screw Terminal</td>
          <td>High temperature, compact</td>
          <td>Medium-large VFD DC-link (37&ndash;110kW)</td>
        </tr>
        <tr>
          <td><strong>CD13HL</strong></td>
          <td>Screw Terminal</td>
          <td>105&deg;C, 10,000h+ life</td>
          <td>Large VFD DC-link (110kW+)</td>
        </tr>
        <tr>
          <td><strong>CD135</strong></td>
          <td>Screw Terminal</td>
          <td>Large can, high capacitance</td>
          <td>High-power VFD DC-link (250kW+)</td>
        </tr>
        <tr>
          <td><strong>CD17FX</strong></td>
          <td>Snap-In</td>
          <td>Miniature, high reliability</td>
          <td>VFD output filter (dv/dt filter)</td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top:16px;">
      <a href="{{ '/products/' | relative_url }}" class="btn btn-sm btn-secondary">View All Product Series &rarr;</a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <div class="container">
    <h2>Need Capacitors for Your VFD Design?</h2>
    <p>Our team specializes in VFD capacitor bank design, from capacitance calculation to thermal and lifetime analysis. Send us your motor and drive specifications.</p>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Contact Our Engineers &rarr;</a>
  </div>
</section>
