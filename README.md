# Department Website

Official website for the Department of Cybernetics and Robotics at Wrocław University of Science and Technology.

## Overview

This is a simple, markdown-based static website built with Jekyll. It's designed to be easy to update and maintain, with all content stored in markdown files.

## Features

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

- Ruby (version 2.7 or higher)
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

4. Open your browser and visit `http://localhost:4000`

The site will automatically rebuild when you make changes to files.

## Adding Content

### Adding a Faculty Member

Create a new file in `_faculty/` directory (e.g., `_faculty/john-doe.md`):

```markdown
---
name: Prof. John Doe
position: Associate Professor
email: john.doe@pwr.edu.pl
website: https://example.com/johndoe
research_interests:
  - Topic 1
  - Topic 2
publications:
  - "Publication 1"
  - "Publication 2"
---

Biography text here...

## Research

Details about research...
```

### Adding a Research Topic

Create a new file in `_research/` directory:

```markdown
---
title: Research Topic Name
lead: Prof. Name
team:
  - Team member 1
  - Team member 2
---

Description of the research topic...
```

### Adding a Laboratory

Create a new file in `_laboratories/` directory:

```markdown
---
title: Laboratory Name
director: Prof. Name
location: Building X, Room Y
equipment:
  - Equipment 1
  - Equipment 2
research_areas:
  - Area 1
  - Area 2
---

Laboratory description...
```

### Adding News

Create a new file in `_posts/` directory with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "News Title"
date: 2024-01-15 10:00:00 +0100
author: Author Name
tags: [tag1, tag2]
---

News content...
```

### Adding a Seminar

Create a new file in `_seminars/` directory:

```markdown
---
title: "Seminar Title"
speaker: Speaker Name
date: 2024-04-15 14:00:00 +0100
location: Building, Room
speaker_bio: "Short bio..."
---

Seminar abstract...
```

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
├── _config.yml           # Site configuration
├── _faculty/            # Faculty member profiles
├── _research/           # Research topic pages
├── _laboratories/       # Laboratory pages
├── _seminars/           # Seminar announcements
├── _posts/              # News posts
├── _layouts/            # Page layouts
├── _includes/           # Reusable components
├── assets/              # CSS, images, etc.
├── index.md             # Homepage
├── faculty.md           # Faculty listing page
├── research.md          # Research listing page
├── laboratories.md      # Laboratories listing page
├── news.md              # News listing page
└── seminars.md          # Seminars listing page
```

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
