import { Reveal } from "./Reveal";
import { LazyImage } from "./LazyImage";

const courses = [
  {
    code: "CS-407",
    title: "Generative AI Systems",
    prof: "Dr. Naoki Tanaka",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=70",
    credits: 4,
    level: "Graduate",
    term: "Spring '26",
    tag: "Tech",
    color: "from-cyan to-lavender",
  },
  {
    code: "DES-212",
    title: "Speculative Design Studio",
    prof: "Prof. Ines Marchetti",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=70",
    credits: 6,
    level: "Undergrad",
    term: "Fall '25",
    tag: "Design",
    color: "from-magenta to-coral",
  },
  {
    code: "BIO-318",
    title: "CRISPR & Synthetic Biology",
    prof: "Dr. Adaeze Nwosu",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=70",
    credits: 4,
    level: "Undergrad",
    term: "Spring '26",
    tag: "Science",
    color: "from-lime to-cyan",
  },
  {
    code: "BUS-501",
    title: "Venture Capital & Startups",
    prof: "Prof. Marcus Hale",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=70",
    credits: 3,
    level: "MBA",
    term: "Fall '25",
    tag: "Business",
    color: "from-sunshine to-coral",
  },
  {
    code: "PHIL-220",
    title: "Ethics of Emerging Tech",
    prof: "Dr. Soraya Khan",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=70",
    credits: 3,
    level: "Undergrad",
    term: "Spring '26",
    tag: "Humanities",
    color: "from-lavender to-magenta",
  },
  {
    code: "ARCH-340",
    title: "Climate-Adaptive Architecture",
    prof: "Prof. Henrik Sørensen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70",
    credits: 5,
    level: "Graduate",
    term: "Fall '25",
    tag: "Design",
    color: "from-coral to-magenta",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="relative py-20 sm:py-28 bg-gradient-to-b from-background to-muted/40 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 morph-blob bg-cyan/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 morph-blob bg-magenta/25 blur-3xl" style={{ animationDelay: "4s" }} />

      <div className="container relative">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="sticker liquid-glass mb-4 text-ink">featured courses</span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
              The courses<br />
              <span className="font-serif-it text-grad-warm">everyone's talking about.</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-4 max-w-md">
              A handful of this semester's hottest electives — chosen by enrollment, faculty buzz, and how often students post about them.
            </p>
          </div>
          <a href="/catalog" className="self-start liquid-glass shine rounded-full px-5 py-2.5 text-[13px] font-semibold text-ink hover:scale-[1.03] transition-transform">
            Browse 1,800+ courses →
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {courses.map((c, i) => (
            <Reveal key={c.code} delay={i * 70}>
              <article className="liquid-glass rounded-3xl p-5 h-full flex flex-col tilt group">
                <div className="flex items-center justify-between">
                  <span className={`sticker bg-gradient-to-r ${c.color} text-white`}>{c.tag}</span>
                  <span className="text-[10.5px] font-mono text-muted-foreground tracking-wider">{c.code}</span>
                </div>

                <h3 className="font-display font-bold text-xl tracking-tight leading-tight mt-4">
                  {c.title}
                </h3>

                <div className="editorial-rule my-4" />

                <div className="flex items-center gap-3">
                  <LazyImage src={c.avatar} alt={c.prof} wrapperClassName="h-9 w-9 rounded-full overflow-hidden ring-2 ring-white shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold text-ink truncate">{c.prof}</p>
                    <p className="text-[10.5px] text-muted-foreground">Lead instructor</p>
                  </div>
                </div>

                <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/60 rounded-xl py-2">
                    <dt className="text-[9.5px] uppercase tracking-wider text-muted-foreground">Credits</dt>
                    <dd className="font-display font-bold text-base text-ink">{c.credits}</dd>
                  </div>
                  <div className="bg-white/60 rounded-xl py-2">
                    <dt className="text-[9.5px] uppercase tracking-wider text-muted-foreground">Level</dt>
                    <dd className="font-display font-bold text-[13px] text-ink leading-7">{c.level}</dd>
                  </div>
                  <div className="bg-white/60 rounded-xl py-2">
                    <dt className="text-[9.5px] uppercase tracking-wider text-muted-foreground">Term</dt>
                    <dd className="font-display font-bold text-[13px] text-ink leading-7">{c.term}</dd>
                  </div>
                </dl>

                <a href={`/courses/${c.code.toLowerCase()}`} className="mt-5 text-[13px] font-semibold text-ink inline-flex items-center gap-1 group/link">
                  Syllabus & enroll
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
