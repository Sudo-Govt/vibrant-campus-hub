import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

const news = [
  { cat: "Research", date: "Apr 18", title: "Nova lab maps the brain's social circuits", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=70", tint: "bg-cyan/30" },
  { cat: "Sports", date: "Apr 15", title: "Women's hoops storm into Final Four", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=70", tint: "bg-coral/30" },
  { cat: "Culture", date: "Apr 11", title: "Student film picked up by A24", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=70", tint: "bg-magenta/30" },
  { cat: "Climate", date: "Apr 03", title: "Campus hits 100% renewable energy", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=70", tint: "bg-lime/40" },
];

export const NewsGrid = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="sticker glass-tint mb-4 text-ink">latest news</span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
              the nova <span className="text-grad-hero">dispatch.</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-magenta hover:underline">All stories →</a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {news.map((n, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="group rounded-3xl overflow-hidden bg-white border border-border/60 hover-lift">
                <div className="relative">
                  <LazyImage src={n.img} alt={n.title} wrapperClassName="aspect-[4/3]" className="group-hover:scale-105 transition-transform duration-700" />
                  <span className={`absolute top-3 left-3 sticker ${n.tint} backdrop-blur text-ink`}>{n.cat}</span>
                </div>
                <div className="p-4">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{n.date} · 4 min read</div>
                  <h3 className="mt-2 font-display font-semibold text-lg leading-snug">{n.title}</h3>
                  <div className="mt-3 text-xs font-semibold text-magenta">read story →</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
