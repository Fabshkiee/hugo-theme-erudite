# Hugo Theme Erudite

**Hugo Theme Erudite** is a minimalist, dark-mode focused Hugo theme ported from the elegant [astro-erudite](https://github.com/jktrn/astro-erudite) theme, enhanced with a pure native Hugo architecture and layout system.

> **📖 Want to learn more about the original design?**
> This theme's layout and styling are heavily based on [astro-erudite](https://github.com/jktrn/astro-erudite) by [@jktrn](https://github.com/jktrn), which I discovered through [merox-erudite](https://github.com/meroxdotdev/merox-erudite) by [@meroxdotdev](https://github.com/meroxdotdev). For detailed design philosophy and the original implementation, visit the official astro-erudite repository.

## 🎯 What's Different from astro-erudite?

This theme has been completely rebuilt from the ground up to support the **Hugo** Static Site Generator. 

### ✨ New Hugo-Native Features
- **Zero NPM Dependencies** - Pure HTML, CSS, and Hugo templating. No React, Astro, or Tailwind required.
- **Blazing Fast Builds** - Leverages Go-based Hugo for sub-second build times.
- **Hugo Taxonomy Support** - Native support for Tags and Categories.
- **Projects & Blog Sections** - Separate content types natively routed through Hugo `mainSections`.
- **Pure CSS Layouts** - Un-minified, easy to read, modular CSS (`color.css`, `layout.css`, `typography.css`, etc.)

## 📋 Features

- 🌓 **Dark/Light Mode Toggle** (Respects system preference by default)
- 📱 Fully responsive layout
- 📝 Blog authoring with Markdown
- 🏢 Project portfolio section
- 🏷️ Tagging system
- ⏱️ Dynamic Experience Timeline component
- ⚡ Minimal JavaScript footprint (only for theme toggling)
- 🔍 Automatic Sitemap generation

## 🚀 Getting Started

### 1. Create a new Hugo Site
If you don't already have a Hugo site, create one:
```bash
hugo new site my-blog
cd my-blog
```

### 2. Install the Theme
Clone this repository into your `themes` folder:
```bash
git clone https://github.com/Fabshkiee/hugo-theme-erudite.git themes/erudite
```

*(Alternatively, you can add it as a git submodule: `git submodule add ... themes/erudite`)*

### 3. Update Configuration
Add the theme to your site's configuration file (`hugo.toml`):
```toml
theme = 'erudite'
```

### 4. Start the Server
Run the local Hugo development server:
```bash
hugo server -D
```
Open your browser and visit `http://localhost:1313`

## ⚙️ Configuration

Copy the following into your `hugo.toml` to get the necessary parameters for the timeline, navigation, and sidebar to work:

```toml
baseURL = 'https://yoursite.com/'
locale = 'en-us'
title = 'Your Name'
theme = 'erudite'

[params]
  description = "Role · Hobbyist · Creator"
  mainSections = ["blog"]

[params.author]
  name = "Your Name"
  role = "Your Role @ Company"
  avatar = "https://github.com/ghost.png" # Link to your Avatar

[markup.goldmark.renderer]
  unsafe = true # Required for raw HTML components like the timeline

[[menu.main]]
  identifier = "blog"
  name = "Blog"
  url = "/blog/"
  weight = 10

[[menu.main]]
  identifier = "projects"
  name = "Projects"
  url = "/projects/"
  weight = 20

[[menu.main]]
  identifier = "about"
  name = "About"
  url = "/about/"
  weight = 30

[[menu.social]]
  name = "GitHub"
  url = "https://github.com/yourusername"
  weight = 10

[[menu.social]]
  name = "LinkedIn"
  url = "https://linkedin.com/in/yourusername"
  weight = 20
```

## 📝 Adding Content

### Blog Posts
Create a new post in the blog directory:
```bash
hugo new blog/my-first-post.md
```
**Front matter example:**
```markdown
---
title: "My First Blog Post"
date: 2026-06-21
tags: ["tech", "coding"]
pinned: true
---
```

### About Section / Timeline
In `content/about.md` (or `content/_index.md`), you can use pure HTML inside your markdown to generate the timeline:
```html
<ul class="timeline">
    <li>
        <span class="year">Present</span>
        <span class="desc">Working on exciting new projects.</span>
    </li>
</ul>
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Original Theme Architecture:** [astro-erudite](https://github.com/jktrn/astro-erudite) by [@jktrn](https://github.com/jktrn).
- **Inspirational Fork:** [merox-erudite](https://github.com/meroxdotdev/merox-erudite) by [@meroxdotdev](https://github.com/meroxdotdev).
- Developed with the assistance of Antigravity to speed up the architecture porting process from Astro to Hugo natively.
