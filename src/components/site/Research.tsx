import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

const labs = [
  {
    name: "Quantum Materials Lab",
    lead: "Prof. Elena Vásquez",
    field: "Physics",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=70",
    paper: "Nature, 2025",
  },
  {
    name: "Human–AI Interaction Studio",
    lead: "Dr. Yusuf Adeyemi",
    field: "Computer Science",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=70",
    paper: "CHI '25",
  },
  {
    name: "Coral Resilience Project",
    lead: "Prof. Mei-Ling Tan",
    field: "Marine Biology",
    img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=900&q=70",
    paper: "Science, 2024",
  },
];

const stats = [
  { n: "$420M", l: "annual research funding" },
  { n: "1,240", l: "papers published / yr" },
  { n: "9", l: "Nobel laureates on faculty" },
  { n: "78", l: "active research centres" },
];

export const Research = () => {
  return (
    <section id="research" className="relative py-20 sm:py-28 bg-ink text-white overflow-hidden">
      {/* glassy accents */}
      <div className="pointer-events-none absolute -top-40 -left-20 h-96 w-96 morph-blob bg-magenta/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 morph-blob bg-cyan/30 blur-3xl" style={{ animationDelay: "5s" }} />
      <div className="absolute inset-0 academic-grid opacity-[0.06]" />

      <div className="container relative">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="sticker liquid-dark mb-4 text-white border-white/20">research · higher education</span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
              We don't just teach knowledge.<br />
              <span className="font-serif-it text-grad-warm">We make it.</span>
            </h2>
            <p className="text-sm text-white/70 mt-4 max-w-md">
              Nova is a tier-one research university. Undergrads co-author papers, build instruments, and present at the same conferences as their professors.
            </p>
          </div>
          <a href="/research" className="self-start liquid-dark shine rounded-full px-5 py-2.5 text-[13px] font-semibold text-white hover:scale-[1.03] transition-transform">
            Research portal →
          </a>
        </Reveal>

        {/* Stats */}
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
            {stats.map((s) => (
              <div key={s.l} className="liquid-dark rounded-2xl p-5 text-center">
                <div className="font-display font-bold text-3xl sm:text-4xl text-grad-warm">{s.n}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Labs */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {labs.map((lab, i) => (
            <Reveal key={lab.name} delay={i * 100}>
              <article className="group relative liquid-dark rounded-3xl overflow-hidden tilt h-full">
                <div className="relative h-44 overflow-hidden">
                  <LazyImage src={lab.img} alt={lab.name} wrapperClassName="absolute inset-0" className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-[10.5px] uppercase tracking-wider text-cyan">{lab.field}</p>
                  <h3 className="font-display font-bold text-xl tracking-tight mt-1">{lab.name}</h3>
                  <p className="text-[12px] text-white/60 mt-2">Led by {lab.lead}</p>
                  <div className="editorial-rule my-4 opacity-30" />
                  <p className="text-[11px] font-mono text-sunshine">Latest: {lab.paper}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
