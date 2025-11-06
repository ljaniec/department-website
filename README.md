# Department Website

Official website for the Department of Cybernetics and Robotics at Wrocław University of Science and Technology.

## Overview

This is a bilingual (Polish/English), markdown-based static website built with Jekyll and jekyll-polyglot. It's designed to be easy to update and maintain, with all content stored in markdown files.

## Features

- 🌍 **Bilingual support** - Polish (default) and English via jekyll-polyglot
- 📝 **Markdown-based content** - Easy to write and update
- 🔬 **LaTeX support** - Mathematical formulas using MathJax
- 📱 **Responsive design** - Works on all devices
- 🎓 **Faculty profiles** - Individual pages for each faculty member
- 🔬 **Research topics** - Showcase research areas
- 🏢 **Laboratory pages** - Detailed information about facilities
- 📰 **News section** - Latest updates and achievements
- 🎤 **Seminar announcements** - Upcoming talks and events

## Local Development

### Prerequisites

- Ruby (version 3.0 or higher)
- Bundler

### Setup

1. Clone the repository:
```bash
git clone https://github.com/ljaniec/department-website.git
cd department-website
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser and visit:
   - Polish version: `http://localhost:4000/`
   - English version: `http://localhost:4000/en/`

The site will automatically rebuild when you make changes to files.

### Building for Production

To build the static site:
```bash
bundle exec jekyll build
```

The generated site will be in the `_site/` directory.

## Multilingual Content

The site supports Polish (default) and English. To add content in both languages:

### Language Structure

- **Polish pages**: Use regular filenames (e.g., `index.md`, `faculty.md`)
- **English pages**: Add `.en` before extension (e.g., `index.en.md`, `faculty.en.md`)
- Both versions should have the same `permalink` value
- Add `lang: pl` or `lang: en` to front matter

### Localized Navigation Labels

Navigation labels are stored in `_data/` directory:
- `_data/pl/strings.yml` - Polish labels
- `_data/en/strings.yml` - English labels

Example structure:
```yaml
nav:
  home: "Strona główna"
  faculty: "Zespół"
  research: "Badania"
  laboratories: "Laboratoria"
  news: "Aktualności"
  seminars: "Seminaria"
```

## Adding Content

### Adding a Faculty Member

Create **two files** for bilingual support:

**Polish version** (`_faculty/john-doe.md`):
```markdown
---
lang: pl
slug: john-doe
name: Prof. Jan Kowalski
position: Profesor nadzwyczajny
email: jan.kowalski@pwr.edu.pl
website: https://example.com/jkowalski
research_interests:
  - Robotyka mobilna
  - Systemy autonomiczne
publications:
  - "Publikacja 1"
  - "Publikacja 2"
---

Biografia po polsku...

## Badania

Szczegóły badań...
```

**English version** (`_faculty/john-doe.en.md`):
```markdown
---
lang: en
slug: john-doe
name: Prof. John Doe
position: Associate Professor
email: john.doe@pwr.edu.pl
website: https://example.com/johndoe
research_interests:
  - Mobile robotics
  - Autonomous systems
publications:
  - "Publication 1"
  - "Publication 2"
---

Biography in English...

## Research

Research details...
```

**Important**: Use the same `slug` in both files to link them together.

### Adding News Posts

Create **two files** in `_posts/` directory with the format `YYYY-MM-DD-title.md`:

**Polish** (`_posts/2025-01-15-nowy-grant.md`):
```markdown
---
layout: post
lang: pl
title: "Nowy grant badawczy"
date: 2025-01-15 10:00:00 +0100
author: Jan Kowalski
---

Treść wiadomości po polsku...
```

**English** (`_posts/2025-01-15-nowy-grant.en.md`):
```markdown
---
layout: post
lang: en
title: "New Research Grant"
date: 2025-01-15 10:00:00 +0100
author: Jan Kowalski
---

News content in English...
```

### Adding Other Content Pages

For research topics, laboratories, seminars, and other sections, follow the same bilingual pattern:

1. Create Polish version: `section-name.md` with `lang: pl`
2. Create English version: `section-name.en.md` with `lang: en`
3. Use the same `permalink` in both (e.g., `permalink: /research/topic-name/`)
4. Polyglot will automatically generate `/research/topic-name/` (PL) and `/en/research/topic-name/` (EN)

## Using LaTeX

You can include mathematical formulas using LaTeX syntax:

- Inline math: `$E = mc^2$`
- Display math: `$$\int_0^\infty e^{-x} dx = 1$$`

Example:
```markdown
The equation of motion is given by:

$$\ddot{x} + 2\zeta\omega_n\dot{x} + \omega_n^2 x = 0$$

where $\zeta$ is the damping ratio.
```

## Deployment

### GitHub Pages

This site is configured to work with GitHub Pages. Simply push to the `main` branch and GitHub will automatically build and deploy the site.

To enable GitHub Pages:
1. Go to repository Settings
2. Navigate to Pages
3. Select source branch (usually `main`)
4. The site will be available at `https://ljaniec.github.io/department-website/`

### Custom Deployment

To build the site for custom deployment:

```bash
bundle exec jekyll build
```

The generated site will be in the `_site/` directory.

## Site Structure

```
.
├── _config.yml              # Site configuration (includes polyglot settings)
├── _data/                   # Data files
│   ├── en/
│   │   └── strings.yml      # English UI strings (nav labels, etc.)
│   └── pl/
│       └── strings.yml      # Polish UI strings
├── _faculty/                # Faculty member profiles
│   ├── anna-nowak.md        # Polish version
│   └── anna-nowak.en.md     # English version
├── _posts/                  # News posts (use YYYY-MM-DD-title.md format)
│   ├── 2025-01-15-new-research-grant.md
│   └── 2025-01-15-new-research-grant.en.md
├── _layouts/                # Page layouts
│   ├── default.html         # Base layout with header/footer
│   ├── home.html            # Homepage layout
│   ├── faculty.html         # Faculty listing layout
│   └── post.html            # Blog post layout
├── _includes/               # Reusable components
│   ├── header.html          # Site header with nav and language switcher
│   └── footer.html          # Site footer with language switcher
├── assets/                  # Static assets
│   ├── css/
│   │   └── style.css        # Custom styles
│   └── favicon.svg          # Site favicon
├── index.md                 # Polish homepage
├── index.en.md              # English homepage
├── faculty.md               # Polish faculty listing
├── faculty.en.md            # English faculty listing
├── research.md              # Polish research page
├── research.en.md           # English research page
├── laboratories.md          # Polish laboratories page
├── laboratories.en.md       # English laboratories page
├── news.md                  # Polish news page
├── news.en.md               # English news page
├── seminars.md              # Polish seminars page
└── seminars.en.md           # English seminars page
```

### URLs Structure

- Polish (default): `https://example.com/page/`
- English: `https://example.com/en/page/`

Examples:
- Homepage: `/` (PL), `/en/` (EN)
- Faculty: `/faculty/` (PL), `/en/faculty/` (EN)
- Faculty member: `/faculty/anna-nowak/` (PL), `/en/faculty/anna-nowak/` (EN)

## Customization

### Styling

Edit `assets/css/style.css` to customize the appearance. The site uses CSS variables for colors:

```css
:root {
    --primary-color: #003d82;
    --secondary-color: #0066cc;
    --accent-color: #ff6b35;
}
```

### Navigation

Edit `_includes/header.html` to modify the navigation menu.

### Footer

Edit `_includes/footer.html` to update footer content.

## License

MIT License - see LICENSE file for details.

## Contact

For questions about the website, contact the department administration.
