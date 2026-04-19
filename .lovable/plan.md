
# Vibrant University Homepage — "Nova University"

A long, scroll-rich, GenZ-coded homepage bursting with color, glassmorphism, micro-animations, and tons of imagery. Designed to feel like a happy, buzzing campus — not a stuffy institution.

## Vibe & Design Language
- **Palette:** electric magenta, sunshine yellow, lime green, cyan, lavender — bright gradients everywhere, soft pastel washes between sections.
- **Typography:** small, tight, modern sans (Inter/Space Grotesk) with oversized display headlines mixed with tiny captions for that editorial GenZ feel.
- **Effects:** glassmorphism cards (frosted blur + soft borders), gradient mesh backgrounds, sticker-style badges, marquee tickers, noise/grain overlay.
- **Motion:** fade-in-on-scroll for every section, hover-scale on cards, animated gradient blobs, marquee, parallax-ish image grids, lazy-loaded images that fade in.

## Sections (long page, lots of components)

1. **Sticky Glass Navbar** — frosted blur, tiny nav links, gradient logo, "Apply Now" CTA pill.
2. **Hero** — huge display headline ("study. party. repeat."), gradient blobs, floating student photos, animated marquee of majors underneath, stats chips (50K+ students, 120 countries, etc.).
3. **Announcement Marquee** — scrolling ticker: open house dates, scholarships, sports wins.
4. **Why Nova — Glass Feature Cards** — 6 frosted cards with emoji icons (🎨 Creative, 🧪 Research, 🌍 Global, 💼 Career, 🏟️ Sports, 🎉 Vibes).
5. **Programs Bento Grid** — asymmetric bento layout with photos for each school (Arts, Tech, Business, Science, Health, Design).
6. **Campus Life Photo Wall** — masonry/collage of 12+ lazy-loaded images with hover zoom and captions.
7. **Student Spotlights** — 3 glass profile cards with avatars, quotes, majors, and Instagram-style tags.
8. **Events Carousel** — upcoming events with date chips, gradient cards, hover lift.
9. **Stats Section** — animated counters on a vibrant gradient background.
10. **Testimonials Wall** — pastel sticky-note style cards in a slight rotation, masonry layout.
11. **Virtual Tour CTA** — full-width glass panel with play button + background campus image.
12. **News & Blog Grid** — 4 article cards with categories, dates, hover effects.
13. **Partners / Recruiters Logo Marquee** — infinite scroll of company logos.
14. **FAQ Accordion** — frosted glass accordion items.
15. **Newsletter / Apply CTA** — bold gradient block with email signup.
16. **Footer** — multi-column, social icons, tiny links, gradient underline on hover.

## Interactions & Performance
- Custom `useInView` hook → sections fade/slide in on scroll.
- Images use `loading="lazy"` + opacity transition on load (lazy-load-with-animation).
- Marquees via pure CSS keyframes.
- Glass utility classes added to `index.css`; vibrant HSL tokens added to design system + Tailwind config.
- All images sourced from Unsplash (campus, students, events, sports, labs).

## Files to Create / Update
- `src/index.css` — add bright HSL tokens, glass utilities, gradient backgrounds, grain overlay, marquee + extra keyframes.
- `tailwind.config.ts` — extend colors (magenta, lime, cyan, lavender, sunshine), fonts, animations (marquee, float, blob, fade-up).
- `index.html` — add Space Grotesk + Inter from Google Fonts.
- `src/hooks/useInView.ts` — scroll reveal hook.
- `src/components/site/` — Navbar, Hero, Marquee, FeatureCards, ProgramsBento, CampusWall, Spotlights, EventsCarousel, Stats, Testimonials, VirtualTour, NewsGrid, PartnersMarquee, FAQ, NewsletterCTA, Footer, LazyImage, GlassCard, Reveal.
- `src/pages/Index.tsx` — compose all sections.

End result: a deliberately long, image-heavy, color-drenched, glassy, animated homepage that screams "happy, happening campus."
