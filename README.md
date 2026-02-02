# Dehao Zhang — Personal Portfolio Website

A modern, responsive personal portfolio website built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/). Features glassmorphism effects, smooth animations, dark/light mode, and a clean design perfect for showcasing your work.

🌐 **Live Site:** [dehaoterryzhang.github.io](https://dehaoterryzhang.github.io)

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

- 🌓 **Dark/Light Mode** — Toggle between themes with system preference detection
- 🎨 **Modern UI** — Glassmorphism effects, gradient animations, and smooth transitions
- 📱 **Fully Responsive** — Looks great on all devices
- ⚡ **Fast Performance** — Static site generation with Astro for blazing-fast loads
- 🔗 **Blog with Dropdown** — Collapsible sections for Technical and Reading blogs
- 💼 **Project Showcase** — Clickable project cards linking to GitHub repos
- 📄 **About Page** — Experience, education, skills, certifications, and publications
- ♿ **Accessible** — WCAG-compliant with proper focus states and ARIA labels

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or higher
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dehaoterryzhang/dehaoterryzhang.github.io.git
cd dehaoterryzhang.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── ProfilePicture_1_1.jpg  # YOUR PROFILE PICTURE HERE
│   └── robots.txt
├── content/                     # YOUR CONTENT (Markdown files)
│   ├── Blog_Posts/             # Your blog post markdown files
│   ├── GitHub_Summary.md
│   ├── LinkedIn_Summary.md
│   └── Medium_Summary.md
├── src/
│   ├── components/
│   │   ├── BlogCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ProjectCard.astro
│   │   └── SocialIcons.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── projects.astro
│   │   ├── blog.astro
│   │   └── about.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## ⚠️ IMPORTANT: Personalization Required

To use this template for your own portfolio, you **must** complete the following steps:

### 1. 📷 Add Your Profile Picture

> **Drop your profile picture in the `public/` folder!**

```
public/
└── ProfilePicture_1_1.jpg   ← Replace with YOUR photo
```

**Requirements:**
- ✅ Square aspect ratio (1:1) recommended
- ✅ At least 400x400 pixels for best quality
- ✅ Name it `ProfilePicture_1_1.jpg` OR update the reference in `src/pages/index.astro` and `src/pages/about.astro`

### 2. 📝 Add Your Content as Markdown

> **Save your content as Markdown files in the `content/` folder!**

```
content/
├── Blog_Posts/
│   ├── my-first-post.md        ← Your blog posts in Markdown
│   ├── another-post.md
│   └── ...
├── GitHub_Summary.md            ← Your GitHub profile summary
├── LinkedIn_Summary.md          ← Your LinkedIn summary
└── Medium_Summary.md            ← Your Medium articles summary
```

**Example blog post markdown:**
```markdown
---
title: "My First Blog Post"
description: "A brief description of the post"
date: "2024-01-15"
tags: ["Tech", "Tutorial"]
---

# My First Blog Post

Your content here...
```

### 3. 🔧 Update Personal Information

Edit these files to add your own information:

| File | What to Update |
|------|----------------|
| `src/pages/index.astro` | Name, title, bio, featured projects |
| `src/pages/about.astro` | Experience, education, skills, certifications, publications |
| `src/pages/projects.astro` | Your project details and GitHub links |
| `src/pages/blog.astro` | Your blog posts and categories |
| `src/components/SocialIcons.astro` | Your social media links (LinkedIn, GitHub, Medium) |
| `src/components/Footer.astro` | Footer information |

---

## 🎨 Customization

### Colors & Theme

Modify the color palette in `tailwind.config.mjs` under `theme.extend.colors`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize your brand colors
    900: '#1e3a8a',
  },
}
```

### Fonts

The default font is Inter. Change it in `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Your-Font', 'system-ui', 'sans-serif'],
},
```

## 🚀 Deployment

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to the `main` branch to trigger deployment

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## 📝 License

MIT License — feel free to use this template for your own portfolio!

## 👤 Author

**Dehao (Terry) Zhang**

- Website: [dehaoterryzhang.github.io](https://dehaoterryzhang.github.io)
- LinkedIn: [@dehao-terry-zhang](https://www.linkedin.com/in/dehao-terry-zhang/)
- GitHub: [@dehaoterryzhang](https://github.com/dehaoterryzhang)
- Medium: [@terryz_](https://medium.com/@terryz_)

---

