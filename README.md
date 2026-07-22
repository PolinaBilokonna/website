# Polina Bilokonna Abbas

Personal brand site for Polina Bilokonna Abbas - lifestyle, fashion, and parenting.

## Stack

- Next.js 15 (App Router)
- TypeScript + Tailwind CSS v4
- Framer Motion
- Resend (contact form)

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

Edit [`lib/content.ts`](lib/content.ts) for copy, social links, and collaborations.

Replace placeholder images in `public/images/`:

| File | Use |
|------|-----|
| `hero.svg` | Home hero (use a full-bleed photo, e.g. `hero.jpg`) |
| `about.svg` | About portrait |
| `work-1.svg` … `work-6.svg` | Collaboration visuals |
| `og.svg` | Open Graph share image |

Update the paths in `lib/content.ts` if you change filenames.

## Contact form

Set in `.env.local`:

- `RESEND_API_KEY` - from [resend.com](https://resend.com)
- `CONTACT_TO_EMAIL` - inbox for inquiries
- `CONTACT_FROM_EMAIL` - optional verified sender domain

Without these, the form validates but returns 503 from the API.

## Pages

- `/` - Home
- `/about` - About
- `/work` - Collaborations portfolio
- `/contact` - Contact form + socials

## Deploy

Deploy to Vercel and add the same env vars in the project settings. Point `polinabilokonna.com` when ready.
