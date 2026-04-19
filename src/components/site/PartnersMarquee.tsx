const partners = ["Google", "Pixar", "SpaceX", "Patagonia", "Spotify", "Figma", "OpenAI", "Nintendo", "MoMA", "BBC", "Stripe", "Tesla"];

export const PartnersMarquee = () => {
  return (
    <section className="relative py-12 border-y border-border bg-background">
      <div className="container mb-6">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground text-center">
          where novans go next
        </p>
      </div>
      <div className="marquee marquee-reverse [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {[0, 1].map((k) => (
          <div className="marquee-track" key={k} aria-hidden={k === 1}>
            {partners.map((p, i) => (
              <span key={`${k}-${i}`} className="font-display font-bold text-3xl sm:text-5xl text-ink/30 hover:text-grad-hero transition-colors flex items-center gap-10 whitespace-nowrap">
                {p}
                <span className="text-magenta/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
