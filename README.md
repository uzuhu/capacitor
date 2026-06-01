# HUAYU Capacitor Website

Nantong HUAYU Electronics Co., Ltd. — Professional aluminum electrolytic capacitor manufacturer since 1987.

**Live site:** [https://capacitormanufacturer.com](https://capacitormanufacturer.com)

---

## Tech Stack

- **Jekyll** (static site generator)
- **GitHub Pages** (free hosting)
- **Markdown** (write articles directly in `.md` format)

---

## How to Publish a New Blog Post

1. Go to the `_posts/` folder in this repository
2. Create a new file named: `YYYY-MM-DD-your-title.md`
   - Example: `2026-06-01-new-capacitor-series.md`
3. Add the following at the top of the file:

````yaml
---
layout: post
title: "Your Article Title"
date: 2026-06-01 10:00:00 +0800
categories: [Category Name]
author: "Your Name"
---
```

4. Write your article content in **Markdown** below the `---` line
5. **Commit** the file to the `main` branch
7. Wait **1–2 minutes** — GitHub Pages will automatically rebuild the site
8. Your article will appear at: `https://capacitormanufacturer.com/blog/`

---

## Writing Tips

### Use Markdown Syntax

````markdown
# Heading 1
## Heading 2

**Bold text**
*Italic text*

- Bullet list item 1
- Bullet list item 2

> Blockquote

[Link text](https://example.com)
````

### Add Images

1. Upload your image to `assets/images/` (or create a subfolder like `assets/images/blog/`)
2. Reference it in your article:

`markdown
![Image description]({{ '/assets/images/blog/your-image.jpg' | relative_url }})
````

> **Note:** After binding your custom domain, change `{{ '/assets/...' | relative_url }}` to `/assets/...` for simplicity.

---

## Site Structure

| File / Folder | Description |
|---|---|
| `_config.yml` | Site configuration (company info, URLs, etc.) |
| `_layouts/` | Page layout templates |
| `_posts/` | **Upload blog articles here** |
| `index.md` | Homepage |
| `products.md` | Product catalog page |
| `about.md` | About Us page |
| `contact.md` | Contact page |
| `technial.md` | Technical resources page |
| `assets/css/main.css` | Main stylesheet |
| `assets/js/main.js` | JavaScript (mobile menu, tabs) |

---

## Useful Links

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
