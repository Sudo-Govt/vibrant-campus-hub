const cols = [
  { h: "Study", l: ["Programs", "Schools", "Apply", "Tuition & aid", "Campus tour"] },
  { h: "Live", l: ["Housing", "Dining", "Clubs", "Athletics", "Wellness"] },
  { h: "Discover", l: ["Research", "Library", "Museums", "Newsroom", "Events"] },
  { h: "Connect", l: ["Alumni", "Careers", "Give", "Contact", "Press"] },
];

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 bg-ink text-white overflow-hidden grain">
      <div className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-magenta/30 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 grid place-items-center rounded-full grad-hero font-display font-bold">N</span>
              <span className="font-display font-bold text-xl">nova<span className="text-grad-hero">.uni</span></span>
            </div>
            <p className="mt-5 text-sm opacity-70 max-w-sm leading-relaxed">
              Nova University · 1 Aurora Way · Rivertown, NV 90210 · A future-facing, fiercely independent university since 1972.
            </p>
            <div className="mt-6 flex gap-2">
              {["IG", "TT", "YT", "X", "in"].map((s) => (
                <a key={s} href="#" aria-label={s} className="h-10 w-10 grid place-items-center rounded-full glass-dark hover:grad-hero hover:scale-110 transition-all text-xs font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h}>
              <div className="text-[11px] uppercase tracking-widest text-white/50 mb-4">{c.h}</div>
              <ul className="space-y-2.5 text-sm">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="story-link inline-block hover:text-grad-hero transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between items-center text-[11px] uppercase tracking-widest text-white/50">
          <span>© 2026 Nova University · all the vibes reserved</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>

        <div className="mt-8 select-none">
          <div className="font-display font-bold tracking-tighter text-[18vw] sm:text-[14vw] leading-none text-grad-hero opacity-80">
            nova.
          </div>
        </div>
      </div>
    </footer>
  );
};
