import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

const floats = [
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=70", top: "8%", left: "4%", rot: "-8deg", delay: "0s", size: "w-28 h-36 sm:w-40 sm:h-52" },
  { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&q=70", top: "14%", right: "5%", rot: "9deg", delay: "1.2s", size: "w-32 h-40 sm:w-44 sm:h-56" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=70", bottom: "10%", left: "7%", rot: "6deg", delay: "0.6s", size: "w-28 h-36 sm:w-40 sm:h-52" },
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=70", bottom: "16%", right: "4%", rot: "-7deg", delay: "1.8s", size: "w-32 h-40 sm:w-44 sm:h-56" },
];

const majors = ["Computer Science", "Fashion Design", "Astrobiology", "Game Dev", "Marine Bio", "Architecture", "Film", "Neuroscience", "Jazz", "Robotics", "Philosophy", "AI Ethics"];

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden grain">
      {/* Mesh + blobs */}
      <div className="absolute inset-0 grad-mesh -z-10" />
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-magenta/40 blur-3xl animate-blob -z-10" />
      <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-cyan/40 blur-3xl animate-blob -z-10" style={{ animationDelay: "3s" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-lime/40 blur-3xl animate-blob -z-10" style={{ animationDelay: "6s" }} />

      {/* Floating photos (hidden on smallest) */}
      {floats.map((f, i) => (
        <div
          key={i}
          className={`hidden sm:block absolute ${f.size} animate-float-y`}
          style={{ top: f.top, bottom: f.bottom, left: f.left, right: f.right, animationDelay: f.delay }}
        >
          <div
            className="w-full h-full rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl"
            style={{ transform: `rotate(${f.rot})` }}
          >
            <LazyImage src={f.src} aspect="3/4" alt="Nova students" />
          </div>
        </div>
      ))}

      <div className="container relative">
        <Reveal className="text-center max-w-4xl mx-auto">
          <span className="sticker glass text-ink mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-magenta animate-pulse" />
            Fall '26 applications open
          </span>
          <h1 className="font-display font-bold tracking-tighter text-5xl sm:text-7xl md:text-8xl leading-[0.92]">
            study. <span className="font-serif-it text-grad-warm">party.</span><br />
            <span className="text-grad-hero">repeat.</span>
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Nova University is a 50,000-strong, 120-country, 24-hour-buzzing campus where ideas, friendships and side-quests collide. Come build the future — and have a ridiculously good time doing it.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#apply" className="rounded-full grad-hero text-white text-sm font-semibold px-6 py-3 hover:scale-[1.04] transition-transform shadow-[0_14px_30px_-8px_hsl(var(--magenta)/0.6)]">
              Start your application →
            </a>
            <a href="#tour" className="rounded-full glass-tint text-ink text-sm font-semibold px-6 py-3 hover:scale-[1.04] transition-transform">
              ▶ Take the virtual tour
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto">
            {[
              { n: "50K+", l: "students" },
              { n: "120", l: "countries" },
              { n: "200+", l: "programs" },
            ].map((s) => (
              <div key={s.l} className="glass-tint rounded-2xl px-3 py-3 text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-grad-hero">{s.n}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Majors marquee */}
      <div className="mt-14 marquee marquee-fast [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {[0, 1].map((k) => (
          <div className="marquee-track" key={k} aria-hidden={k === 1}>
            {majors.map((m, i) => (
              <span key={`${k}-${i}`} className="font-display font-medium text-2xl sm:text-4xl text-ink/70 flex items-center gap-6">
                {m}
                <span className="inline-block h-2 w-2 rounded-full bg-magenta" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
