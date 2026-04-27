# Quick Start Guide

Get your portfolio live in 5 minutes!

## Step 1: Install Dependencies (2 minutes)

```bash
cd e:\Projects\Portfolio
npm install
```

This installs all required packages (Next.js, React, Lucide icons, etc.).

## Step 2: Run Locally (1 minute)

```bash
npm run dev
```

Visit: **http://localhost:3000**

Your portfolio is now running locally! 🎉

## Step 3: Customize Your Portfolio (1 minute)

Edit `pages/index.jsx` and update:

1. **Your name & title** - Search for `typeTarget = "Backend Developer..."`
2. **Contact info** - Update email, phone, location
3. **Social links** - Add your GitHub and LinkedIn URLs
4. **Skills** - Modify the `skills` array
5. **Projects** - Update the `projects` array

The site automatically reloads as you save!

## Step 4: Deploy to Vercel (1 minute)

### Option A: Direct Vercel Import (Easiest)

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Upload this folder or connect your GitHub repo
4. Click "Deploy"

Done! Your portfolio is live! 🚀

### Option B: Using Git

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Portfolio"

# Push to GitHub
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Then connect to Vercel (same as Option A)
```

## What You Get

✅ Production-ready Next.js app  
✅ Responsive design (mobile-friendly)  
✅ Fast performance optimized  
✅ SEO ready  
✅ Custom domain support  
✅ Free SSL certificate  
✅ Automatic deployments on push  
✅ Professional dark theme  

## Project Structure

```
e:\Projects\Portfolio\
├── pages/
│   ├── index.jsx          ← Main portfolio page
│   ├── _app.jsx           ← App wrapper
│   ├── _document.jsx      ← HTML document
│   ├── 404.jsx            ← 404 page
│   └── api/
│       └── contact.js     ← API endpoint (optional)
├── public/                ← Static files
├── package.json           ← Dependencies
├── next.config.js         ← Next.js config
├── vercel.json            ← Vercel config
├── .env.local             ← Environment variables
├── .gitignore             ← Git ignore rules
├── README.md              ← Full documentation
├── CUSTOMIZATION.md       ← How to customize
├── DEPLOYMENT.md          ← Deployment guide
└── DEPLOYMENT-CHECKLIST.md ← Pre-launch checklist
```

## Common Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Check code quality
```

## Helpful Tips

1. **Test on Mobile**: Use browser DevTools (F12) → responsive mode
2. **Check Build**: Run `npm run build` before deploying
3. **Debug Issues**: Check browser console (F12) for errors
4. **Save Changes**: Ctrl+S to save files
5. **Clear Cache**: Ctrl+Shift+Delete in browser

## Next Steps

1. ✅ Customize your info in `pages/index.jsx`
2. ✅ Test locally with `npm run dev`
3. ✅ Push to GitHub
4. ✅ Deploy on Vercel
5. ✅ Share your portfolio!

## Need Help?

📖 **Read These Files:**
- `README.md` - Full documentation
- `CUSTOMIZATION.md` - How to personalize
- `DEPLOYMENT.md` - Detailed deployment guide
- `DEPLOYMENT-CHECKLIST.md` - Pre-launch checklist

🌐 **Resources:**
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [React Docs](https://react.dev)

## Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails?
- Check Node version: `node --version` (need 18+)
- Check error message carefully
- Verify all files are saved

---

**🎉 You're all set! Happy deploying!**

For detailed customization, see `CUSTOMIZATION.md`
For deployment help, see `DEPLOYMENT.md`
