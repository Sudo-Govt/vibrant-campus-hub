import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";

const features = [
  { emoji: "🎨", title: "Wildly creative", body: "12 studios, open 24/7. Bring snacks.", tint: "from-magenta/30 to-coral/20" },
  { emoji: "🧪", title: "Real research", body: "Undergrads publish from year one.", tint: "from-cyan/30 to-lavender/20" },
  { emoji: "🌍", title: "Global by default", body: "Exchange in 38 cities, 6 continents.", tint: "from-lime/30 to-cyan/20" },
  { emoji: "💼", title: "Career-coded", body: "97% placed within 6 months.", tint: "from-sunshine/40 to-coral/20" },
  { emoji: "🏟️", title: "Sport for all", body: "62 clubs, D1 vibes, casual energy.", tint: "from-coral/30 to-magenta/20" },
  { emoji: "🎉", title: "Unmatched vibes", body: "Sunset socials every Thursday.", tint: "from-lavender/30 to-magenta/20" },
];

export const FeatureCards = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="sticker glass-tint mb-4 text-ink">why nova</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
            Six reasons it<br /><span className="text-grad-hero">just hits different.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <GlassCard className={`relative overflow-hidden bg-gradient-to-br ${f.tint}`}>
                <div className="text-4xl mb-3">{f.emoji}</div>
                <h3 className="font-display font-semibold text-xl">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{f.body}</p>
                <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-wider">
                  <span className="text-ink/60">0{i + 1} / 06</span>
                  <span className="font-semibold text-magenta">explore →</span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
