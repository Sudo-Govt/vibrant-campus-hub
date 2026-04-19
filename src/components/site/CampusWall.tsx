import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

const photos = [
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=70", cap: "Move-in day", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&q=70", cap: "Library at 2am", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=700&q=70", cap: "Lab life", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1517486430290-35657bdcef51?w=700&q=70", cap: "Spring fest", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=700&q=70", cap: "Game day", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=700&q=70", cap: "Studio crits", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=70", cap: "Lecture vibes", h: "h-60" },
  { src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=700&q=70", cap: "Late night chess", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1494607155578-bb73bcc4eb8a?w=700&q=70", cap: "Hackathon", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&q=70", cap: "Quad sunsets", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=700&q=70", cap: "Orientation", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1564429097439-e4ffe2dafc1b?w=700&q=70", cap: "Pool party", h: "h-72" },
];

export const CampusWall = () => {
  return (
    <section id="campus" className="relative py-20 sm:py-28">
      <div className="container">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="sticker bg-lime/40 mb-4 text-ink">campus life</span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
              one week, <span className="text-grad-hero">a thousand vibes.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">A tiny scrapbook from last week on campus. Posted by students, for students.</p>
        </Reveal>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:_balance]">
          {photos.map((p, i) => (
            <Reveal key={i} delay={(i % 6) * 60} className="mb-3 sm:mb-4 break-inside-avoid">
              <figure className="group relative rounded-2xl overflow-hidden hover-lift">
                <LazyImage src={p.src} alt={p.cap} wrapperClassName={`${p.h} w-full`} className="group-hover:scale-110 transition-transform duration-700" />
                <figcaption className="absolute bottom-2 left-2 sticker bg-white/80 backdrop-blur text-ink">
                  {p.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
