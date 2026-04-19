import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

export const VirtualTour = () => {
  return (
    <section id="tour" className="relative py-20 sm:py-28">
      <div className="container">
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[440px] sm:min-h-[520px] grain">
            <LazyImage
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=75"
              alt="Nova campus aerial"
              wrapperClassName="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/80 via-ink/30 to-magenta/40" />

            <div className="relative z-10 grid sm:grid-cols-2 gap-8 p-6 sm:p-12 min-h-[440px] sm:min-h-[520px]">
              <div className="self-end text-white">
                <span className="sticker bg-white/20 border border-white/30 text-white mb-4">360° experience</span>
                <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter leading-[0.95]">
                  walk the quad.<br />
                  <span className="font-serif-it">from your couch.</span>
                </h2>
                <p className="mt-4 text-sm opacity-90 max-w-md">
                  20+ stops across our 400-acre campus, narrated by students. Bring headphones.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#" className="rounded-full bg-white text-ink text-sm font-semibold px-5 py-3 hover:scale-105 transition-transform">
                    ▶ Start the tour
                  </a>
                  <a href="#" className="rounded-full glass-dark text-white text-sm font-semibold px-5 py-3 hover:scale-105 transition-transform">
                    Book in-person
                  </a>
                </div>
              </div>

              <div className="self-start sm:justify-self-end">
                <button aria-label="Play tour" className="group relative h-28 w-28 sm:h-40 sm:w-40 rounded-full glass grid place-items-center hover:scale-105 transition-transform">
                  <span className="absolute inset-0 rounded-full grad-hero opacity-30 blur-xl animate-pulse" />
                  <span className="relative h-16 w-16 sm:h-24 sm:w-24 rounded-full grad-hero grid place-items-center text-white text-2xl sm:text-4xl pl-1">▶</span>
                  <span className="absolute -top-2 -right-2 sticker bg-lime text-ink">live</span>
                </button>
                <p className="mt-4 text-center text-xs text-white/80 font-display tracking-widest uppercase">3:42 — guided</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
