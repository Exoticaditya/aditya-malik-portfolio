# Deployment Guide

## GitHub Pages Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Live URL
🌐 **[https://exoticaditya.github.io/aditya-malik-portfolio/](https://exoticaditya.github.io/aditya-malik-portfolio/)**

### Deployment Process

The deployment is automated through GitHub Actions and triggers on:
- Push to `main` branch
- Manual workflow dispatch

### Configuration

1. **Vite Configuration**: The `vite.config.js` is configured with the correct base path for GitHub Pages
2. **GitHub Actions**: Automated deployment workflow in `.github/workflows/deploy.yml`
3. **Build Output**: Static files are built to the `dist` directory

### Manual Deployment

If you need to deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy (if gh-pages is installed)
npm run deploy
```

### Deployment Status

✅ **Status**: Active  
🔧 **Last Updated**: September 16, 2025  
🚀 **Build Tool**: Vite  
📦 **Framework**: React  
🌐 **Hosting**: GitHub Pages  

### Repository Settings

Ensure the following settings are configured in your GitHub repository:

1. Go to **Settings** → **Pages**
2. Select **Source**: Deploy from a branch
3. Select **Branch**: `gh-pages` (auto-created by GitHub Actions)
4. **Folder**: `/ (root)`

### Troubleshooting

**If the site doesn't update:**
1. Check the Actions tab for build status
2. Ensure the base path in `vite.config.js` matches your repository name
3. Verify GitHub Pages settings in repository settings

**Common Issues:**
- Assets not loading: Check the base path configuration
- 404 errors: Ensure the repository is public and Pages is enabled
- Build failures: Check the GitHub Actions logs for errors

### Development

For local development:
```bash
npm run dev
```

For preview of production build:
```bash
npm run build
npm run preview
```
