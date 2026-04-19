import { Reveal } from "./Reveal";

const notes = [
  { t: "Honestly the best four years of my life. I cried at graduation, I'd cry again.", a: "— Mira, '24", c: "bg-sunshine/70", r: "-rotate-2" },
  { t: "Profs actually answer your emails. Wild.", a: "— Theo, '25", c: "bg-lime/60", r: "rotate-1" },
  { t: "Got an internship at SpaceX through the alumni network. Surreal.", a: "— Anika, '26", c: "bg-cyan/50", r: "-rotate-1" },
  { t: "The dining hall has a ramen bar. That's it. That's the review.", a: "— Jules, '27", c: "bg-coral/60", r: "rotate-2" },
  { t: "Joined improv on a dare, found my people. Now I host the open mic.", a: "— Ravi, '25", c: "bg-lavender/60", r: "-rotate-2" },
  { t: "Lab access at 3am is unmatched. The vending machines stay loaded.", a: "— Sasha, '24", c: "bg-magenta/50", r: "rotate-1" },
];

export const Testimonials = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-muted/40">
      <div className="container">
        <Reveal className="max-w-2xl mb-12">
          <span className="sticker glass-tint mb-4 text-ink">word on the quad</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
            sticky notes from <span className="text-grad-hero">our people.</span>
          </h2>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {notes.map((n, i) => (
            <Reveal key={i} delay={(i % 6) * 80} className="mb-5 break-inside-avoid">
              <div className={`${n.c} ${n.r} p-5 rounded-2xl shadow-[0_10px_30px_-10px_hsl(260_30%_20%/0.3)] hover:rotate-0 transition-transform duration-300`}>
                <p className="font-display text-lg leading-snug text-ink">"{n.t}"</p>
                <p className="text-xs mt-3 text-ink/70 font-medium">{n.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
