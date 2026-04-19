import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

const students = [
  {
    name: "Aiyana Cole",
    major: "BFA Film '26",
    quote: "I shot my first short film with $0 and a borrowed RED. Nova just… makes things possible.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=70",
    tags: ["#filmschool", "#sundance"],
    tint: "from-magenta/40 to-coral/30",
  },
  {
    name: "Kenji Park",
    major: "BSc Robotics '25",
    quote: "Built a swarm of 12 drones for my thesis. The lab let me, like, actually break things.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=70",
    tags: ["#robots", "#thesis"],
    tint: "from-cyan/40 to-lavender/30",
  },
  {
    name: "Lola Mensah",
    major: "BA Econ '27",
    quote: "Joined three clubs in week one. Now I run two of them. Energy is contagious here.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=70",
    tags: ["#student-gov", "#hustle"],
    tint: "from-lime/40 to-sunshine/30",
  },
];

export const Spotlights = () => {
  return (
    <section id="life" className="relative py-20 sm:py-28 bg-gradient-to-br from-lavender/20 via-background to-cyan/20">
      <div className="container">
        <Reveal className="max-w-2xl mb-10">
          <span className="sticker glass-tint mb-4 text-ink">student spotlights</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
            real students, <span className="font-serif-it text-grad-warm">real chaos.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {students.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <article className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${s.tint} p-1.5 hover-lift`}>
                <div className="rounded-[20px] glass-tint p-5">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-white">
                      <LazyImage src={s.img} alt={s.name} wrapperClassName="absolute inset-0" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg leading-tight">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.major}</div>
                    </div>
                    <span className="ml-auto text-xs sticker bg-white/70">verified ✓</span>
                  </div>
                  <blockquote className="mt-5 text-sm leading-relaxed text-ink">
                    "{s.quote}"
                  </blockquote>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/70 text-magenta">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
