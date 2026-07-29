# CreatorPrompts

A curated AI prompt library for content creators — YouTubers, TikTok creators, marketers, podcasters, and newsletter writers.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui components
- Lucide Icons
- Local Storage for favorites & theme
- React Router

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output is in the `dist/` folder — ready for static deployment on Hostman or any static host.

## Features

- Browse 50+ curated prompts across 15 categories
- Search, filter by category & AI model, sort by popularity/newest/favorites
- Copy prompts to clipboard with toast notifications
- Save favorites (persisted in localStorage)
- 5 curated collections
- Dark mode toggle
- Fully responsive mobile-first layout
- SEO meta tags & Open Graph

## Project Structure

```
src/
├── components/     # UI components & layout
├── pages/          # Route pages
├── data/           # Seed prompts & collections
├── hooks/          # Custom React hooks
├── types/          # TypeScript types
└── utils/          # Helpers (storage, clipboard, cn)
```

## Deployment (Hostman)

1. Run `npm run build`
2. Upload the contents of `dist/` to your Hostman static site
3. Configure SPA fallback to `index.html` for client-side routing

## License

MIT
