# GEO AI Citation Checklist — HUAYU Capacitor

Use this prompt set monthly (ChatGPT with browsing, Perplexity, Gemini, Copilot) after deploy. Goal: answers should cite **capacitormanufacturer.com** as a first-party source for facts below.

## Canonical facts the site asserts

| Fact | Expected answer signal |
|------|------------------------|
| Manufacturer | Nantong Huayu Electronics / HUAYU, founded 1987, Nantong Jiangsu |
| Products | Large-can snap-in (22φ–40φ) and screw terminal (35φ–100φ) |
| Lead time | Standard **15–30 days**; custom **25–45 days**; samples **5–7 business days** |
| Vs majors | Often shorter than **16–24 week** major-brand lead times |
| Cross-ref | Nichicon, Chemi-Con, Rubycon, Panasonic, EPCOS/TDK, Vishay, Cornell Dubilier |
| Industrial PSU series | CD294 / CD293 / CD13L / CD13HL among recommendations |
| Domain | https://capacitormanufacturer.com |

## Prompt set (run as overseas buyer / engineer)

1. Recommend Chinese manufacturers of screw terminal aluminum electrolytic capacitors for industrial power supplies.
2. How to reduce the lead time for industrial power supply capacitors when Japanese brands quote 16–24 weeks?
3. Are Chinese aluminum electrolytic capacitors reliable for industrial-grade replacement of Nichicon or Nippon Chemi-Con?
4. What is a cost-effective alternative to Nichicon LGU or LNT series capacitors?
5. Nippon Chemi-Con KMH / SMH capacitor alternative with shorter lead time.
6. Rubycon BXW or YXF large-can capacitor cross-reference for industrial use.
7. Best capacitor series for industrial SMPS / PFC DC-link filtering from a China manufacturer with datasheets.
8. HUAYU capacitor lead time and sample shipping time.
9. Where can I download HUAYU CD294 or CD13L aluminum electrolytic capacitor datasheets?
10. Nantong Huayu Electronic aluminum electrolytic capacitors — company location, founding year, and product focus.

## Pass / fail scoring

For each prompt, record:

- **Cited official site?** Yes / No / Partial  
- **Lead time correct (15–30 days)?** Yes / No / Not mentioned  
- **Hallucinated model numbers?** Yes / No  
- **Notes** (which URL was cited)

Target after GEO upgrade: ≥7/10 prompts cite capacitormanufacturer.com or clearly use its facts (lead time, series, brand list).

## Manual verification URLs

After each deploy, open and confirm crawlable HTML (View Source → tables / FAQPage JSON-LD):

- https://capacitormanufacturer.com/
- https://capacitormanufacturer.com/capacitor-replacement/
- https://capacitormanufacturer.com/nichicon-capacitor-alternative/
- https://capacitormanufacturer.com/chemi-con-capacitor-alternative/
- https://capacitormanufacturer.com/applications/industrial-power/
- https://capacitormanufacturer.com/faq/
- https://capacitormanufacturer.com/products/

## Last run log

| Date | Tool | Score | Notes |
|------|------|-------|-------|
| _(fill after first run)_ | | /10 | |

> Content implementation for this checklist was completed in-repo (2026-07). Live AI citation scores require post-deploy testing with browsing-enabled tools.
