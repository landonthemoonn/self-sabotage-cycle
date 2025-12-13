# Landon Studio Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Smooth animations with Framer Motion
- Dark mode support
- Optimized for performance
- SEO-friendly

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploying to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Custom Domain Setup (landon.studio)

1. After deployment, go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain: `landon.studio` and `www.landon.studio`
4. Vercel will provide DNS records
5. Update your domain's DNS settings with your registrar:
   - Add an A record pointing to Vercel's IP: `76.76.21.21`
   - Add a CNAME record for `www` pointing to `cname.vercel-dns.com`
6. Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Environment Variables

If you need environment variables, add them in the Vercel dashboard under "Settings" > "Environment Variables".

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Projects showcase
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## Customization

- Edit content in component files under `/components`
- Modify colors and styles in `tailwind.config.js`
- Update metadata in `app/layout.tsx`
- Add your projects in `components/Projects.tsx`

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## License

MIT
