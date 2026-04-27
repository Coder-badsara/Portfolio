# Customization Guide

This guide will help you personalize the portfolio to match your profile and preferences.

## Quick Edits

### Edit Personal Information

Open `pages/index.jsx` and find these sections:

#### 1. Name and Title (Search for "typeTarget")

```javascript
const typeTarget = "Backend Developer | Django Specialist";
```

Change to your title, e.g.:
```javascript
const typeTarget = "Full Stack Developer | React Enthusiast";
```

#### 2. Contact Information

Search for the contact details section:

```javascript
{[["Location", "Jaipur, Rajasthan"], ["Email", "coderbadsara@gmail.com"], ["Phone", "+91 7733957460"], ["Status", "Available for Work"]].map(([k, v]) => (
```

Update with your information:
```javascript
{[["Location", "Your City, State"], ["Email", "your@email.com"], ["Phone", "+1 234 567 8900"], ["Status", "Available for Work"]].map(([k, v]) => (
```

#### 3. Social Links

Search for LinkedIn and GitHub URLs:

```javascript
<a href="https://www.linkedin.com/in/umesh-badsara-7659581b5/" target="_blank">
```

Replace with your profiles:
```javascript
<a href="https://www.linkedin.com/in/yourprofile/" target="_blank">
```

## Advanced Customization

### Edit Colors

At the top of `pages/index.jsx`:

```javascript
const COLORS = {
  bg: "#070b09",           // Background
  accent: "#00e87a",       // Accent color (green)
  textPrimary: "#e8f0ea",  // Main text
  textSecondary: "#7a9982", // Secondary text
  // ... more colors
};
```

Popular color schemes:
- **Blue theme**: `#0066ff` accent
- **Purple theme**: `#9d4edd` accent
- **Orange theme**: `#ff9500` accent

### Edit Skills

Find the `skills` array:

```javascript
const skills = [
  { category: "Languages & Frameworks", icon: Code2, skills: ["Python", "Django", "C++", "HTML", "Bootstrap"] },
  { category: "Backend Development", icon: Server, skills: ["REST APIs", "JWT Auth", "CRUD Operations", "Django ORM", "Middleware"] },
  // ... more categories
];
```

Add, remove, or modify skills:

```javascript
{ category: "Frontend", icon: Code2, skills: ["React", "Vue", "Tailwind CSS"] },
```

### Edit Projects

Find the `projects` array and modify:

```javascript
const projects = [
  {
    num: 1, 
    title: "Your Project Name",
    tech: ["Technology1", "Technology2"],
    description: [
      "First point about the project.",
      "Second point about the project.",
      "Third point about the project.",
    ],
  },
  // ... more projects
];
```

### Edit Certifications

Find the certifications section:

```javascript
<CertCard 
  title="Your Certification" 
  issuer="Issuing Organization" 
  date="Month Year" 
/>
```

### Edit Education

Find the education timeline:

```javascript
<TimelineItem
  title="Your Degree"
  subtitle="University Name, Location"
  period="2022 – 2026"
  detail="Details about your studies..."
/>
```

## Styling Changes

### Change Font Sizes

Search for `fontSize` in the code:

```javascript
h1 style={{ fontSize: "clamp(40px, 7vw, 76px)" }}
```

The `clamp()` function sets: min, preferred, max sizes.

### Adjust Spacing

Look for `padding`, `margin`, and `gap`:

```javascript
padding: "80px 5%"  // Vertical 80px, Horizontal 5%
gap: 16            // Space between elements
```

### Animation Speed

Search for animation values (in milliseconds):

```javascript
transition: "all 0.3s"  // 0.3 seconds
```

### Hover Effects

Find and modify hover states:

```javascript
onMouseEnter={e => e.currentTarget.style.color = COLORS.accent}
onMouseLeave={e => e.currentTarget.style.color = COLORS.textSecondary}
```

## Component Customization

### Change Section Order

In the JSX, sections appear in this order:
1. Navbar
2. Hero
3. About
4. Professional Summary
5. Skills
6. Projects
7. Education
8. Certifications
9. Contact
10. Footer

Simply reorder the `<section>` tags to change layout.

### Add New Sections

Create a new section:

```javascript
<section id="yoursection" style={{ padding: "80px 5%", position: "relative", zIndex: 1 }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <SectionLabel>section_label</SectionLabel>
    <SectionTitle>Your Section Title</SectionTitle>
    <p style={{ color: COLORS.textSecondary, fontSize: 15, marginBottom: 36, marginTop: 4 }}>
      Your section content here.
    </p>
  </div>
</section>
```

### Remove Sections

Simply delete the entire `<section>` tag you want to remove.

## Advanced Features

### Add Download Resume Button

Modify the download button:

```javascript
<button
  onClick={() => window.open('/path-to-your-resume.pdf')}
  // ...
>
  <Download size={15} /> Download Resume
</button>
```

Place your resume in the `public` folder as `resume.pdf`.

### Enable Contact Form

The contact form is set up but currently just collects data. To enable email sending:

1. Choose an email service (Mailgun, SendGrid, Nodemailer)
2. Update `pages/api/contact.js`
3. Add API keys to `.env.local`

Example with SendGrid:

```javascript
// pages/api/contact.js
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    try {
      await sendgrid.send({
        to: 'your@email.com',
        from: email,
        subject: `Portfolio Contact: ${name}`,
        text: message,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
```

### Add Google Analytics

Update `pages/_document.jsx`:

```javascript
<script async src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `,
}} />
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

## Mobile Customization

### Adjust Mobile Breakpoints

Search for `@media (max-width: 768px)`:

```javascript
@media (max-width: 768px) {
  /* Mobile styles */
}
```

Add your custom breakpoints:

```javascript
@media (max-width: 480px) {
  /* Extra small screens */
}
```

### Hide Elements on Mobile

Add to styles:

```javascript
style={{ display: "none" }}
@media (min-width: 769px) {
  display: block;
}
```

## SEO Customization

### Update Meta Tags

In `pages/_document.jsx`:

```javascript
<meta name="description" content="Your custom description" />
<meta name="keywords" content="Your, keywords, here" />
```

### Update Page Title

In `pages/_app.jsx`:

```javascript
<title>Your Name - Your Title | Portfolio</title>
```

## Performance Tips

1. **Optimize Images**: Compress images before adding to `public` folder
2. **Remove Unused Code**: Delete unused components or sections
3. **Lazy Load**: Use `next/dynamic` for heavy components
4. **Minimize Dependencies**: Keep `package.json` clean

## Common Issues

### Styles not applying?

- Make sure inline styles are correctly formatted
- Check color hex values are valid
- Verify CSS is not being overridden

### Images not showing?

- Check image paths start with `/`
- Ensure files are in `public` folder
- Use relative paths from public folder

### Links not working?

- Use full URLs for external links
- Use relative paths for internal links
- Check for typos in URLs

## Getting Help

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review the original component code
3. Test changes in development mode: `npm run dev`

## Best Practices

1. **Version Control**: Commit changes regularly
2. **Test**: Use `npm run dev` to test changes
3. **Build Locally**: Run `npm run build` before deploying
4. **Backup**: Keep a backup before major changes
5. **Browser Test**: Test in Chrome, Firefox, Safari, and Edge

---

**Happy Customizing! 🎨**

Remember to test locally (`npm run dev`) before deploying to production!
