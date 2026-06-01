---
layout: post
title: "How to Read an Aluminum Electrolytic Capacitor Datasheet"
date: 2026-06-07 09:00:00 +0800
categories: [Technical Guide, Datasheet]
author: "HUAYU Engineering Team"
excerpt: "A step-by-step guide to reading aluminum electrolytic capacitor datasheets. Learn how to interpret electrical specifications, dimensions, and performance curves."
tags: [capacitor datasheet, aluminum electrolytic capacitor, how to read datasheet, capacitor specifications, ESR, ripple current, capacitor parameters]
---

Reading a capacitor datasheet correctly is essential for proper component selection. This guide explains how to interpret the key parameters in aluminum electrolytic capacitor datasheets.

## Datasheet Structure - What You'll Find

A typical aluminum electrolytic capacitor datasheet includes:
1. **Electrical specifications** (voltage, capacitance, ripple current, etc.)
2. **Dimensional drawings** with case sizes
3. **Performance curves** (temperature, frequency, lifetime)
4. **Test conditions** and methods
5. **Part numbering system** for ordering

## Key Electrical Specifications

### 1. Rated Voltage (V)
The maximum continuous DC voltage the capacitor can withstand.

**Example from datasheet**:

<div style="background:#f4f6f8; border-left:4px solid #2980b9; padding:14px 18px; border-radius:0 8px 8px 0; margin:1rem 0; font-size:0.9rem; font-family:'Fira Code','Consolas',monospace; color:var(--gray-800);">
  Rated Voltage: 450V DC<br>
  Test Condition: +20°C, 120 Hz
</div>

**Interpretation**: The capacitor is designed to operate continuously at up to 450V DC at 20°C.

### 2. Capacitance (µF)
The nominal capacitance value with tolerance.

**Example**:

<div style="background:#f4f6f8; border-left:4px solid #2980b9; padding:14px 18px; border-radius:0 8px 8px 0; margin:1rem 0; font-size:0.9rem; font-family:'Fira Code','Consolas',monospace; color:var(--gray-800);">
  Nominal Capacitance: 10,000 µF<br>
  Tolerance: ±20% (M)
</div>

**Interpretation**: Actual capacitance will be between 8,000 µF and 12,000 µF.

### 3. Rated Ripple Current (A rms)
The maximum RMS ripple current at specified frequency and temperature.

**Example**:

<div style="background:#f4f6f8; border-left:4px solid #2980b9; padding:14px 18px; border-radius:0 8px 8px 0; margin:1rem 0; font-size:0.9rem; font-family:'Fira Code','Consolas',monospace; color:var(--gray-800);">
  Rated Ripple Current: 8.5A rms<br>
  Test Condition: 105°C, 100-120 Hz
</div>

**Important**: Ripple current capability **increases with frequency** and **decreases with temperature**.

### 4. Tangent of Loss Angle (tan δ) - Equivalent to ESR
A measure of power loss in the capacitor.

**Example**:

<div style="background:#f4f6f8; border-left:4px solid #2980b9; padding:14px 18px; border-radius:0 8px 8px 0; margin:1rem 0; font-size:0.9rem; font-family:'Fira Code','Consolas',monospace; color:var(--gray-800);">
  tan δ (at 20°C, 120 Hz): 0.15 max
</div>

**Conversion to ESR**: ESR ≈ (tan δ) / (2πfC)

### 5. Leakage Current
The DC current that flows when rated voltage is applied.

| Leakage Current Test | Value |
|---|---|
| Test Condition | Rated voltage, 20°C |
| Acceptance Criteria | < 0.01 CV or 3 µA |

## Performance Curves - How to Read Them

### 1. Ripple Current vs. Frequency Curve
Shows how ripple current capability changes with frequency.

**How to read**:
- Find your operating frequency on the X-axis
- Read the **multiplier** on the Y-axis
- Multiply by the rated ripple current at 100-120 Hz

**Example**: At 10 kHz, multiplier might be 1.5×, so 8.5A becomes 12.75A.

### 2. Capacitance Change vs. Temperature
Shows how capacitance varies with temperature.

| Temperature | Capacitance (% of nominal) |
|---|---|
| -25°C | ~85% |
| +20°C | 100% |
| +105°C | ~90% |

### 3. Lifetime vs. Temperature (Arrhenius Plot)
Shows expected lifetime at different operating temperatures.

**How to read**:
- Find your expected operating temperature on the X-axis
- Read the **lifetime multiplier** on the Y-axis
- Multiply by the rated lifetime at maximum temperature

**Example**: 105°C / 5,000h capacitor at 65°C:
Lifetime = 5,000 × 2^((105-65)/10) = **80,000+ hours**

## Dimensional Drawings

Datasheets include detailed dimensions:
- **Diameter** (D) and **length** (L)
- **Terminal type** (snap-in, screw, radial)
- **Terminal pitch** and **hole diameter**
- **Recommended PCB layout** (for snap-in types)

**Important**: Always check the **maximum case size** to ensure it fits your enclosure.

## Part Numbering System

Understanding the part numbering system helps you order the right capacitor.

**HUAYU part number format**:

<div style="background:#f4f6f8; border:1px solid #d0d7e0; border-radius:8px; padding:16px 20px; margin:1rem 0; font-size:0.86rem; font-family:'Fira Code','Consolas',monospace; color:var(--gray-800); line-height:1.9;">

<pre style="margin:0; padding:0; background:transparent; border:none; font-size:inherit; color:inherit;">CD 292  –  M  4  7  10  000  E
│       │    │  │  │    │     │
│       │    │  │  │    │     └─ Tolerance code (E)
│       │    │  │  │    └─ Capacitance code (10,000 µF)
│       │    │  │  └─ Voltage code (47 = 450V)
│       │    │  └─ Terminal/lead style
│       │    └─ Case size code
│       └─ Tolerance (M = ±20%)
└─ Series code (CD292 = Snap-In)</pre>
</div>

## Datasheet Checklist for Engineers

- [ ] **Voltage rating** ≥ 1.2-1.3 × maximum operating voltage
- [ ] **Capacitance** meets circuit requirements with tolerance considered
- [ ] **Ripple current** rating ≥ calculated RMS ripple (check at operating frequency)
- [ ] **tan δ (ESR)** is sufficiently low for application
- [ ] **Operating temperature** range covers your environment
- [ ] **Lifetime** at expected operating temperature meets design requirements
- [ ] **Case size** fits your enclosure with proper clearance
- [ ] **Terminal type** matches your mounting method

## Common Datasheet Mistakes to Avoid

### 1. Ignoring Frequency Multiplier
**Mistake**: Using rated ripple current at 120 Hz for a 100 kHz application.  
**Solution**: Always apply the frequency multiplier from the performance curve.

### 2. Not Considering Temperature Derating
**Mistake**: Assuming rated lifetime applies at all temperatures.  
**Solution**: Calculate actual lifetime at your operating temperature using Arrhenius law.

### 3. Overlooking Case Size Variations
**Mistake**: Assuming all capacitors with same voltage/capacitance have same size.  
**Solution**: Always check dimensional drawings and case codes.

## HUAYU Datasheets and Support

HUAYU provides **comprehensive datasheets** for all our series:
- **17 standard series** with detailed specifications
- **Performance curves** for engineering calculations
- **Dimensional drawings** with PCB layout recommendations
- **Part numbering guide** for easy ordering

*Contact our engineering team to discuss your capacitor requirements and request a custom quote.*

*Next article: **"Capacitor Reliability and Lifetime Prediction"** — subscribe to our blog for updates.*
