# Noice App Landing Page

Static landing page for Noice App hosted on GitHub Pages at [getnoice.com](https://getnoice.com).

## Structure

```
├── index.html      # Main landing page
├── privacy.html    # Privacy Policy
├── terms.html      # Terms of Service
├── nice-good.gif   # Animation asset
└── CNAME          # Custom domain config
```

## Deploy Changes

```bash
# Make changes, then:
git add .
git commit -m "Your message"
git push origin main
```

Changes deploy automatically via GitHub Pages (1-2 minutes).

## Local Testing

```bash
# Option 1: Open directly
open index.html

# Option 2: Local server
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Troubleshooting

- **Changes not showing?** Wait 5-10 minutes or force refresh (Cmd+Shift+R)
- **Deployment failed?** Check Actions tab for errors
- **Need to rollback?** `git revert HEAD && git push`

## Domain Setup

Custom domain `getnoice.com` configured via CNAME file. DNS A records point to:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```