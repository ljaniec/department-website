# Deployment Guide

This website is built with Jekyll and can be easily deployed to GitHub Pages.

## GitHub Pages Deployment (Recommended)

GitHub Pages has native Jekyll support, making deployment automatic.

### Steps:

1. **Merge this PR to the main branch**

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select the branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"

3. **Wait for deployment:**
   - GitHub will automatically build and deploy the site
   - The first build may take 1-2 minutes
   - Your site will be available at: `https://ljaniec.github.io/department-website/`

4. **Custom Domain (Optional):**
   - If you have a custom domain, add it in the GitHub Pages settings
   - Update the `url` in `_config.yml` to match your custom domain

### Automatic Updates

Once enabled, any push to the main branch will automatically trigger a rebuild and deployment.

## Local Development

To test the site locally before deploying:

```bash
# Install dependencies (first time only)
bundle install

# Run local server
bundle exec jekyll serve

# Open browser to http://localhost:4000
```

The site will auto-reload when you make changes to files.

## Alternative Deployment Methods

### Deploy to Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build command: `jekyll build`
4. Publish directory: `_site`
5. Click "Deploy"

### Deploy to Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Jekyll
4. Click "Deploy"

### Manual Deployment

Build the site locally and upload the `_site` folder to any web host:

```bash
bundle exec jekyll build
# Upload contents of _site/ to your web server
```

## Configuration

Before deploying, update these settings in `_config.yml`:

- `url`: Your website URL (e.g., `https://example.com`)
- `baseurl`: Subpath if not at root (e.g., `/department` for `example.com/department`)

## Troubleshooting

### Site not updating

- Check the "Actions" tab in GitHub for build logs
- Ensure there are no syntax errors in markdown files
- Clear browser cache

### Pages not found (404)

- Verify `baseurl` in `_config.yml` matches your deployment path
- Check that all internal links use `{{ site.baseurl }}`

### LaTeX not rendering

- Verify internet connection (MathJax loads from CDN)
- Check browser console for errors
- Ensure LaTeX syntax is correct

## Security

The site is static HTML/CSS/JS with no server-side code or database, making it highly secure. The only external dependency is the MathJax CDN for LaTeX rendering.

## Performance

Jekyll generates static HTML files, providing excellent performance:
- Fast page loads
- No database queries
- CDN-friendly
- SEO-optimized

## Maintenance

To keep the site updated:

1. **Add content** by creating new markdown files in appropriate folders
2. **Update existing content** by editing markdown files
3. **Modify design** by editing CSS in `assets/css/style.css`
4. **Change layout** by editing HTML templates in `_layouts/`

All changes are version-controlled through Git, allowing easy rollback if needed.
