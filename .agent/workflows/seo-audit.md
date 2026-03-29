---
description: Run a full SEO audit on any URL and generate an actionable report
---

# SEO Audit Workflow

Perform a comprehensive SEO health check on any page or site.

## Inputs
- `TARGET_URL` — the full URL to audit (e.g. `https://example.com`)

## Steps

1. **Check page accessibility and status code**
// turbo
```bash
curl -s -o /dev/null -w "%{http_code}" $TARGET_URL
```
Verify the page returns a `200` status.

2. **Extract meta tags**
// turbo
```bash
curl -s $TARGET_URL | Select-String -Pattern '<title>|<meta' -AllMatches
```
Verify:
- A `<title>` tag exists and is under 60 characters
- A `meta description` exists and is under 160 characters
- An `og:title` and `og:description` exist for social sharing

3. **Check heading hierarchy**
// turbo
```bash
curl -s $TARGET_URL | Select-String -Pattern '<h[1-6]' -AllMatches
```
Verify:
- Exactly one `<h1>` exists on the page
- Headings follow a logical hierarchy (h1 → h2 → h3)

4. **Check for missing alt attributes on images**
// turbo
```bash
curl -s $TARGET_URL | Select-String -Pattern '<img(?![^>]*alt=)' -AllMatches
```
Flag any `<img>` tags missing `alt` attributes.

5. **Validate structured data (JSON-LD)**
// turbo
```bash
curl -s $TARGET_URL | Select-String -Pattern 'application/ld\+json' -AllMatches
```
Check if JSON-LD schema markup is present.

6. **Check page load performance**
// turbo
```bash
curl -s -w "DNS: %{time_namelookup}s | Connect: %{time_connect}s | TTFB: %{time_starttransfer}s | Total: %{time_total}s" -o /dev/null $TARGET_URL
```
Flag if TTFB exceeds 800ms.

7. **Generate report**
Compile all findings into a ranked list of issues sorted by severity (Critical → Warning → Info). Include specific fix recommendations for each issue.
