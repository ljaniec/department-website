# How to Share Your Jekyll Website for Preview

This guide explains different methods to share your Jekyll-based website with others before deploying it to production.

## Method 1: Local Network Sharing (Quick & Free)

Best for: Showing to people on the same network (office, home, etc.)

1. **Start the Jekyll server with network access:**
   ```bash
   bundle exec jekyll serve --host 0.0.0.0 --port 4000
   ```

2. **Find your local IP address:**
   - **Linux/Mac:** `ip addr show` or `ifconfig`
   - **Windows:** `ipconfig`
   - Look for something like `192.168.1.x` or `10.0.0.x`

3. **Share the URL:** `http://YOUR_IP:4000`
   - Example: `http://192.168.1.100:4000`

⚠️ **Limitations:**
- Only works for people on the same local network
- Server must stay running on your computer
- Not accessible from the internet

## Method 2: Temporary Online Hosting (Free & Easy)

### A. Netlify Drop (Recommended for non-technical users)

1. **Build your site:**
   ```bash
   bundle exec jekyll build
   ```

2. **Visit [https://app.netlify.com/drop](https://app.netlify.com/drop)**

3. **Drag and drop the `_site/` folder** to the webpage

4. **Get instant URL:** Netlify provides a temporary URL like `https://random-name.netlify.app`

5. **Share the link** - no account required!

✅ **Advantages:**
- No account needed
- Instant deployment (30 seconds)
- Free subdomain
- Site stays live for a while
- HTTPS included

### B. Surge.sh (Command-line based)

1. **Install Surge globally:**
   ```bash
   npm install -g surge
   ```

2. **Build your site:**
   ```bash
   bundle exec jekyll build
   ```

3. **Deploy:**
   ```bash
   cd _site
   surge
   ```

4. **Follow the prompts** (email, password, custom domain)

5. **Share the URL:** `https://your-site-name.surge.sh`

✅ **Advantages:**
- Free custom subdomain
- Very fast deployment
- Simple command-line tool
- Can update easily with same command

### C. Vercel (Professional option)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy from root directory:**
   ```bash
   vercel
   ```

3. **Follow the prompts**

4. **Share the preview URL**

✅ **Advantages:**
- Professional hosting
- Automatic HTTPS
- Great performance
- Free tier available

## Method 3: GitHub Pages (For longer-term sharing)

If you want a more permanent preview URL:

1. **Create a new branch for preview:**
   ```bash
   git checkout -b preview
   git push origin preview
   ```

2. **Enable GitHub Pages for the preview branch:**
   - Go to repository Settings → Pages
   - Source: `preview` branch
   - Folder: `/ (root)`

3. **Access at:** `https://yourusername.github.io/repository-name/`

✅ **Advantages:**
- Free hosting
- Automatic updates on push
- Custom domain support
- No command-line tools needed after setup

## Method 4: Tunneling Services (Advanced)

For sharing localhost directly without building:

### Using ngrok:

1. **Install ngrok:** [https://ngrok.com/download](https://ngrok.com/download)

2. **Start Jekyll normally:**
   ```bash
   bundle exec jekyll serve
   ```

3. **In another terminal, start ngrok:**
   ```bash
   ngrok http 4000
   ```

4. **Share the provided URL** (e.g., `https://abc123.ngrok.io`)

✅ **Advantages:**
- Share live development server
- Real-time updates
- No build step needed
- Works from anywhere

⚠️ **Limitations:**
- Free tier has session limits
- URL changes each time
- Requires keeping terminal open

## Method 5: ZIP File Sharing (Offline option)

For sharing with people who want to run it locally:

1. **Build the site:**
   ```bash
   bundle exec jekyll build
   ```

2. **Create a ZIP of the `_site/` folder:**
   ```bash
   cd _site
   zip -r ../website-preview.zip .
   ```

3. **Share the ZIP file** via email or cloud storage

4. **Recipients can:**
   - Extract the ZIP
   - Open `index.html` in a browser
   - Or use a simple HTTP server: `python -m http.server 8000`

## Comparison Table

| Method | Speed | Duration | Technical Level | Best For |
|--------|-------|----------|-----------------|----------|
| Local Network | Instant | While running | Easy | Same network |
| Netlify Drop | 30 sec | Weeks | Very Easy | Quick reviews |
| Surge.sh | 1 min | Permanent* | Easy | Regular updates |
| GitHub Pages | 2 min | Permanent | Medium | Long-term |
| ngrok | Instant | Session | Medium | Live development |
| ZIP File | 1 min | Forever | Easy | Offline sharing |

*With free account

## Recommended Workflow

1. **For quick internal reviews:** Use Netlify Drop
2. **For client previews:** Use Surge.sh or Vercel
3. **For public testing:** Use GitHub Pages
4. **For live demos:** Use ngrok
5. **For offline demos:** Use ZIP file

## Tips

- Always test the site locally before sharing
- Use meaningful URLs (customize when possible)
- Include a README in shared ZIPs explaining how to view
- Consider password protection for sensitive previews (available in Netlify, Vercel)
- Keep track of temporary URLs you create

## Need Help?

If you encounter issues:
1. Check that the site builds without errors: `bundle exec jekyll build`
2. Verify all links work locally first
3. Ensure `baseurl` in `_config.yml` is correct
4. Check browser console for errors

Happy sharing! 🚀
