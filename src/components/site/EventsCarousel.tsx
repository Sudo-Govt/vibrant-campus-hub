import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

const events = [
  { d: "26", m: "APR", title: "Spring Open House", tag: "Campus", grad: "grad-hero", img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=700&q=70" },
  { d: "03", m: "MAY", title: "AI x Art Symposium", tag: "Talks", grad: "grad-fresh", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=700&q=70" },
  { d: "10", m: "MAY", title: "NovaFest Music Day", tag: "Festival", grad: "grad-warm", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=700&q=70" },
  { d: "17", m: "MAY", title: "Robotics Demo Night", tag: "Demo", grad: "grad-cosmic", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=70" },
  { d: "24", m: "MAY", title: "Senior Thesis Show", tag: "Exhibit", grad: "grad-hero", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&q=70" },
];

export const EventsCarousel = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="sticker bg-sunshine/60 mb-4 text-ink">what's on</span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
              upcoming on <span className="text-grad-hero">campus.</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-magenta hover:underline">See full calendar →</a>
        </Reveal>
      </div>

      <div className="overflow-x-auto scrollbar-none pl-5 sm:pl-[max(1.25rem,calc((100vw-1400px)/2+1.25rem))]">
        <ul className="flex gap-4 pb-6 pr-5 snap-x snap-mandatory">
          {events.map((e, i) => (
            <li key={i} className="snap-start shrink-0 w-[78%] sm:w-[360px]">
              <Reveal delay={i * 60}>
                <article className="group relative h-[420px] rounded-3xl overflow-hidden hover-lift">
                  <LazyImage src={e.img} alt={e.title} wrapperClassName="absolute inset-0" className="group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute inset-0 ${e.grad} opacity-70 mix-blend-multiply`} />
                  <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                    <div className="flex items-start justify-between">
                      <div className="glass rounded-2xl px-3 py-2 text-center">
                        <div className="font-display font-bold text-2xl leading-none text-ink">{e.d}</div>
                        <div className="text-[10px] tracking-widest text-ink/70 mt-1">{e.m}</div>
                      </div>
                      <span className="sticker bg-white/25 backdrop-blur text-white border border-white/30">{e.tag}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl tracking-tight">{e.title}</h3>
                      <p className="text-xs opacity-90 mt-1">Free with student ID · RSVP →</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
