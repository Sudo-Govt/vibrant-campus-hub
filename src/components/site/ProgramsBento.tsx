import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

const programs = [
  { name: "Arts & Design", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=70", grad: "from-magenta to-coral", span: "sm:col-span-2 sm:row-span-2", count: "32 programs" },
  { name: "Tech & AI", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=70", grad: "from-cyan to-lavender", span: "", count: "28 programs" },
  { name: "Business", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=70", grad: "from-sunshine to-coral", span: "", count: "19 programs" },
  { name: "Science", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=70", grad: "from-lime to-cyan", span: "sm:col-span-2", count: "41 programs" },
  { name: "Health", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=70", grad: "from-coral to-magenta", span: "", count: "23 programs" },
  { name: "Humanities", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=70", grad: "from-lavender to-magenta", span: "", count: "57 programs" },
];

export const ProgramsBento = () => {
  return (
    <section id="programs" className="relative py-20 sm:py-28 bg-gradient-to-b from-background via-background to-muted/40">
      <div className="container">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="sticker glass-tint mb-4 text-ink">programs</span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter max-w-2xl">
              Pick a path. <span className="font-serif-it text-grad-warm">Or three.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            200+ undergrad and graduate programs, double-majors, custom interdisciplinary tracks — wire your own degree.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className={`group relative rounded-3xl overflow-hidden hover-lift ${p.span}`}>
              <LazyImage src={p.img} alt={p.name} wrapperClassName="absolute inset-0" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${p.grad} opacity-60 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-white">
                <span className="sticker bg-white/20 backdrop-blur-md text-white border border-white/30 self-start">
                  {p.count}
                </span>
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight leading-none">{p.name}</h3>
                  <p className="text-xs mt-1.5 opacity-80">School of {p.name} →</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
