import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

const students = [
  {
    name: "Amelia Carter",
    year: "Junior · Astrophysics",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=70",
    quote: "Last month I helped calibrate a telescope. Tonight I'm DJ-ing the quad. Both feel normal here.",
    country: "🇬🇧 UK",
    tag: "#StarChild",
  },
  {
    name: "Kenji Watanabe",
    year: "Senior · Robotics",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=70",
    quote: "Built my startup in the maker-lab between problem sets. Profs literally invested in the seed round.",
    country: "🇯🇵 Japan",
    tag: "#BuildInPublic",
  },
  {
    name: "Zara Hussain",
    year: "Sophomore · Film + CS",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=70",
    quote: "Double-majoring sounded insane until I realised half my film cohort codes and half my CS cohort makes shorts.",
    country: "🇵🇰 Pakistan",
    tag: "#DoubleLife",
  },
  {
    name: "Diego Fernández",
    year: "Grad · Marine Biology",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=70",
    quote: "Field semester in the Galápagos was a credit. Like — actual school credit. For diving with sharks.",
    country: "🇲🇽 Mexico",
    tag: "#FieldSchool",
  },
  {
    name: "Priya Menon",
    year: "Senior · Public Policy",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=70",
    quote: "Drafted real legislation in my capstone. The state actually adopted three of our recommendations.",
    country: "🇮🇳 India",
    tag: "#PolicyKid",
  },
  {
    name: "Lukas Brandt",
    year: "Freshman · Jazz Performance",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&q=70",
    quote: "Practice rooms are open 24/7. The cafeteria has a piano. Someone's always jamming somewhere.",
    country: "🇩🇪 Germany",
    tag: "#NightOwl",
  },
];

export const StudentVoices = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grad-mesh opacity-60 -z-10" />

      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="sticker liquid-glass mb-4 text-ink">in their words</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
            42,000 students.<br />
            <span className="font-serif-it text-grad-hero">42,000 stories.</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-4">
            We asked six of them what a regular Tuesday looks like. The answers were not regular.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {students.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <article className="liquid-glass rounded-3xl overflow-hidden tilt h-full">
                <div className="relative h-64 overflow-hidden">
                  <LazyImage src={s.img} alt={s.name} wrapperClassName="absolute inset-0" className="hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 sticker bg-white/85 text-ink">{s.country}</div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-display font-bold text-xl tracking-tight">{s.name}</p>
                    <p className="text-[11.5px] opacity-90">{s.year}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[13.5px] leading-relaxed text-ink/90">"{s.quote}"</p>
                  <p className="mt-3 text-[11px] font-mono text-magenta">{s.tag}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
