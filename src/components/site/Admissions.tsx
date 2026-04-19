import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Discover", text: "Browse 200+ programs, attend a virtual open day, chat with current students.", color: "from-magenta to-coral" },
  { n: "02", title: "Apply", text: "One application, multiple programs. Test-optional, no fee for early applicants.", color: "from-cyan to-lavender" },
  { n: "03", title: "Interview", text: "A 30-min conversation — not a pop quiz. Held on Zoom or on campus.", color: "from-sunshine to-coral" },
  { n: "04", title: "Arrive", text: "Welcome week, dorm assignments, your first 11pm pizza run with new friends.", color: "from-lime to-cyan" },
];

const dates = [
  { d: "Sep 1", e: "Applications open" },
  { d: "Nov 15", e: "Early decision deadline" },
  { d: "Jan 10", e: "Regular decision deadline" },
  { d: "Mar 28", e: "Decisions released" },
  { d: "May 1", e: "Enrollment confirmation" },
  { d: "Aug 22", e: "Move-in day" },
];

export const Admissions = () => {
  return (
    <section id="admissions" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -left-20 h-80 w-80 morph-blob bg-sunshine/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 morph-blob bg-lavender/40 blur-3xl" style={{ animationDelay: "3s" }} />

      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="sticker liquid-glass mb-4 text-ink">admissions</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
            Four steps. <span className="font-serif-it text-grad-warm">Zero stress.</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-4">
            Our admissions team is human, fast, and rooting for you. Median response time on questions: 4 hours.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Steps */}
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="liquid-glass rounded-3xl p-5 h-full tilt">
                  <div className={`inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-gradient-to-br ${s.color} text-white font-display font-bold text-sm`}>
                    {s.n}
                  </div>
                  <h3 className="font-display font-bold text-xl mt-4">{s.title}</h3>
                  <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Key dates */}
          <Reveal delay={120}>
            <div className="liquid-glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-2xl tracking-tight">Key dates · Fall '26</h3>
                <span className="sticker bg-magenta text-white">Live</span>
              </div>
              <ul className="mt-6 space-y-3">
                {dates.map((d, i) => (
                  <li key={d.e} className="flex items-center gap-4 group">
                    <div className="shrink-0 w-16 text-center">
                      <div className="font-display font-bold text-xl text-grad-hero">{d.d.split(" ")[1]}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{d.d.split(" ")[0]}</div>
                    </div>
                    <div className="editorial-rule flex-1" />
                    <span className="text-[13px] font-medium text-ink">{d.e}</span>
                  </li>
                ))}
              </ul>
              <a href="/admissions" className="mt-8 block text-center grad-hero text-white font-semibold rounded-full py-3 text-sm hover:scale-[1.02] transition-transform shadow-[0_14px_30px_-10px_hsl(var(--magenta)/0.6)]">
                Start your application →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
