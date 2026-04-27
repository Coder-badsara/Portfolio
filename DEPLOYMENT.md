# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the easiest and most recommended way to deploy Next.js applications.

### Step 1: Prepare Your Repository

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. Push your code:

```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Select "Import Git Repository"
4. Choose your portfolio repository
5. Click "Deploy"

**That's it!** Your portfolio will be live in seconds.

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS setup instructions

## Deploy to Other Platforms

### Netlify

1. Build the project: `npm run build && npm run export`
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### AWS Amplify

1. Push to GitHub/CodeCommit
2. Go to [AWS Amplify](https://aws.amazon.com/amplify/)
3. Connect your repository
4. Select "Next.js - SSR"
5. Deploy

### Google Cloud Platform (Cloud Run)

1. Create a Dockerfile
2. Deploy with: `gcloud run deploy`

### Self-Hosted (Own Server)

1. Build: `npm run build`
2. Start: `npm run start`
3. Use PM2 or systemd to keep it running
4. Configure Nginx/Apache as reverse proxy

## Environment Variables

### On Vercel

1. Go to Project Settings → Environment Variables
2. Add these variables:
   - `NEXT_PUBLIC_SITE_URL`: Your site URL
   - `NEXT_PUBLIC_SITE_NAME`: Your site name

### GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Performance Optimization

### Before Deploying

1. Run `npm run build` and check output
2. Check bundle size
3. Test on mobile devices
4. Run Lighthouse audit

### Monitor After Deployment

1. Set up Google Analytics
2. Monitor Vercel Analytics
3. Check Core Web Vitals
4. Set up error tracking

## Troubleshooting Deployment

### Build fails on Vercel

- Check Node.js version in `package.json`
- Verify all dependencies are listed
- Check build logs in Vercel dashboard

### Site is slow

- Enable caching headers
- Optimize images
- Check for large dependencies
- Use CDN for static assets

### 404 errors

- Verify all routes exist
- Check for case sensitivity in imports
- Verify file paths

## SSL/HTTPS

Vercel automatically provides free SSL certificates. Other platforms:

- **Netlify**: Automatic HTTPS
- **AWS Amplify**: Automatic HTTPS
- **Self-hosted**: Use Let's Encrypt (Certbot)

## Monitoring & Analytics

### Google Analytics

1. Create a Google Analytics account
2. Add tracking ID to `.env.local`
3. Implement analytics script (optional)

### Vercel Analytics

- Enabled by default
- Monitor Web Vitals
- Track deployments

### Error Tracking

Consider adding:
- Sentry
- Rollbar
- LogRocket

## Auto-Deploy on Push

All deployments on Vercel are automatic when you push to your connected Git repository.

To disable:
1. Go to Project Settings
2. Disable "Git Integration" (not recommended)

## Rollback

### Vercel

1. Go to "Deployments"
2. Find the previous deployment
3. Click the three dots
4. Select "Promote to Production"

### GitHub

Create release tags:

```bash
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

## Production Checklist

- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics set up
- [ ] Contact form tested
- [ ] Mobile responsiveness verified
- [ ] Social links updated
- [ ] Resume download working
- [ ] Meta tags optimized
- [ ] Google Search Console verified
- [ ] Robots.txt created

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app)
- [GitHub Pages Guide](https://docs.github.com/en/pages)

---

**Happy Deploying! 🚀**
