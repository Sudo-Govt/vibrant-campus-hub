const items = [
  "🎉 Open House — Sat 26 Apr",
  "🏆 Nova Robotics wins NorthCup",
  "💸 $40M in scholarships awarded",
  "🎶 Spring Fest lineup dropped",
  "🛰️ NovaSat-2 launch in May",
  "🎨 Senior Show opens Friday",
  "🏀 Women's hoops → Final Four",
  "🌍 Study abroad in 38 cities",
];

export const AnnouncementMarquee = () => {
  return (
    <section className="relative py-4 grad-warm text-white border-y border-white/30">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div className="marquee-track" key={k} aria-hidden={k === 1}>
            {items.map((t, i) => (
              <span key={`${k}-${i}`} className="text-sm font-medium tracking-wide flex items-center gap-6 whitespace-nowrap">
                {t}
                <span className="text-white/70">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
