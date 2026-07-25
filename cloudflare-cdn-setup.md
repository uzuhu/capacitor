# Cloudflare CDN Setup for capacitormanufacturer.com

Goal: overseas first paint under ~3 seconds so AI crawlers and engineers do not abandon the site. Stack stays **Jekyll → GitHub Pages**; Cloudflare sits in front as reverse proxy + CDN.

## 1. Prerequisites

- Domain `capacitormanufacturer.com` already points at GitHub Pages (see `CNAME` in repo).
- GitHub Pages custom domain verified and HTTPS working.
- Cloudflare account (free plan is enough for static HTML/PDF).

## 2. Add site to Cloudflare

1. Cloudflare Dashboard → **Add a site** → enter `capacitormanufacturer.com`.
2. Choose Free plan.
3. Cloudflare scans existing DNS records. Keep:
   - `A` / `AAAA` or `CNAME` for apex and `www` that currently target GitHub Pages.
   - Do **not** delete email-related records (MX / TXT) if any.
4. Change domain nameservers at your registrar to the two Cloudflare nameservers shown.
5. Wait until Cloudflare status is **Active**.

## 3. Proxy (orange cloud) settings

| Record | Proxy status | Notes |
|--------|--------------|--------|
| Apex `@` → GitHub Pages | **Proxied** (orange) | Required for CDN |
| `www` → GitHub Pages or apex | **Proxied** | Redirect www → apex in Cloudflare or GitHub |

GitHub Pages IP/CNAME targets (confirm current GitHub docs if changed):

- Apex often uses GitHub Pages A records, or `CNAME` flattening to `OWNER.github.io`.
- Subdomain: `CNAME` → `OWNER.github.io`.

## 4. SSL / TLS

1. SSL/TLS → Overview → set mode to **Full** (not Flexible).
2. Enable **Always Use HTTPS**.
3. Edge Certificates → enable **Automatic HTTPS Rewrites**.
4. Keep GitHub Pages “Enforce HTTPS” enabled as origin.

## 5. Cache strategy (static GEO site)

Recommended **Cache Rules** (or Page Rules on Free):

| URL pattern | Cache level | Edge TTL | Browser TTL |
|-------------|-------------|----------|-------------|
| `*.css`, `*.js`, `/assets/*` | Standard | 1 month | 1 week |
| `/pdf/*` | Standard | 1 week | 1 day |
| HTML pages (`/`, `/*.html`, pretty URLs) | Standard | 2 hours | Respect origin | 
| `/sitemap.xml`, `/feed.xml` | Standard | 1 hour | 1 hour |

Also:

- Caching → Configuration → **Browser Cache TTL**: Respect Existing Headers (or 4 hours).
- Enable **Auto Minify** for HTML/CSS/JS (optional; test after enable).
- Enable **Brotli**.
- Speed → Optimization → **Early Hints** if available.

After content deploys from GitHub Actions / Pages:

```text
Cloudflare → Caching → Configuration → Purge Everything
```

Or purge only changed paths after GEO content updates.

## 6. Performance checks

After DNS is active:

1. From a non-China VPS or [WebPageTest](https://www.webpagetest.org/) (Virginia / Frankfurt):
   - Home, `/capacitor-replacement/`, `/products/`
   - Target: LCP / document complete under **3s** on cable.
2. Confirm response headers include `cf-cache-status: HIT` on second request for CSS/PDF.
3. Confirm HTTPS certificate is Cloudflare edge cert and origin still serves GitHub Pages.

## 7. AI crawler notes

- Do **not** block GPTBot / ClaudeBot / PerplexityBot / Google-Extended in `robots.txt` unless legal requires it.
- Keep HTML cross-reference tables and FAQPage JSON-LD on origin; CDN caching does not strip them.
- Prefer cache short TTL on HTML so GEO copy updates propagate quickly after deploy.

## 8. Rollback

If GitHub Pages custom domain breaks under proxy:

1. Cloudflare DNS → set records to **DNS only** (grey cloud).
2. Or restore previous registrar nameservers.
3. Re-verify GitHub Pages custom domain settings.

## Owner checklist

- [ ] Nameservers switched to Cloudflare
- [ ] Apex + www Proxied
- [ ] SSL mode Full + Always HTTPS
- [ ] Cache rules for `/assets/*` and `/pdf/*`
- [ ] Overseas speed test < 3s
- [ ] Purge cache after major deploy
