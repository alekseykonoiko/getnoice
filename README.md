# Noice App Landing Page

Welcome to the Noice App landing page repository! This site is hosted on GitHub Pages at [getnoice.com](https://getnoice.com).

## 🚀 Quick Start

This is a simple static website that automatically deploys to GitHub Pages whenever changes are pushed to the `main` branch.

## 📁 Project Structure

```
getnoice/
├── index.html      # Main landing page
├── nice-good.gif   # Animation asset
├── CNAME          # Custom domain configuration
├── CLAUDE.md      # Project documentation
└── README.md      # This file
```

## 🛠️ Making Changes

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/[your-username]/getnoice.git
   cd getnoice
   ```

2. **Make your changes**:
   - Edit `index.html` for content/style updates
   - Add new images or assets as needed
   - Test locally by opening `index.html` in your browser

3. **Preview locally**:
   ```bash
   # Simple preview (macOS/Linux)
   open index.html
   
   # Or use a local server for more accurate preview
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 📤 Deploying Changes

Deployment is automatic! Just follow these steps:

1. **Stage your changes**:
   ```bash
   git add .
   ```

2. **Commit with a descriptive message**:
   ```bash
   git commit -m "Update landing page content"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin main
   ```

4. **Wait for deployment** (usually 1-2 minutes):
   - GitHub Actions will automatically build and deploy your site
   - Check deployment status at: `https://github.com/[your-username]/getnoice/actions`
   - Visit [getnoice.com](https://getnoice.com) to see your changes live!

## 🔍 Verifying Deployment

After pushing changes:

1. **Check GitHub Pages status**:
   - Go to Settings → Pages in your repository
   - You should see "Your site is live at https://getnoice.com"

2. **Force refresh your browser**:
   - Windows/Linux: `Ctrl + F5`
   - macOS: `Cmd + Shift + R`
   - This ensures you're not seeing a cached version

3. **Check from incognito/private window** if changes don't appear

## 🌐 Custom Domain Setup (Already Configured)

The custom domain `getnoice.com` is already configured via the CNAME file. If you ever need to reconfigure:

1. Ensure `CNAME` file contains: `getnoice.com`
2. Configure DNS records at your domain registrar:
   - A records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or CNAME record pointing to `[your-username].github.io`

## 🚨 Troubleshooting

### Changes not appearing?
- Wait 5-10 minutes for GitHub Pages cache to update
- Check Actions tab for deployment errors
- Verify your changes were pushed: `git log --oneline -5`

### Custom domain not working?
- Check Settings → Pages for any DNS warnings
- Verify CNAME file exists and contains correct domain
- Use `dig getnoice.com` to verify DNS propagation

### Need to rollback?
```bash
# View recent commits
git log --oneline -10

# Revert to previous commit
git revert HEAD
git push origin main
```

## 📝 Best Practices

1. **Test locally** before pushing
2. **Use descriptive commit messages**
3. **Keep images optimized** (use tools like TinyPNG)
4. **Check mobile responsiveness** before deploying
5. **Monitor the Actions tab** after pushing to ensure successful deployment

## 🤝 Contributing

1. Create a new branch for features:
   ```bash
   git checkout -b feature/new-section
   ```

2. Make changes and push the branch:
   ```bash
   git push origin feature/new-section
   ```

3. Create a Pull Request on GitHub for review

## 📧 Support

For issues with the landing page, please open an issue in this repository.