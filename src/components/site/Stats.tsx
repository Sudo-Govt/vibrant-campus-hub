import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Reveal } from "./Reveal";

const stats = [
  { n: 50000, suffix: "+", l: "Students" },
  { n: 120, suffix: "", l: "Countries" },
  { n: 97, suffix: "%", l: "Job placement" },
  { n: 850, suffix: "M", l: "Research $" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [v, setV] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const dur = 1600;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
};

export const Stats = () => {
  return (
    <section className="relative py-20 sm:py-28 grad-cosmic text-white overflow-hidden grain">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sunshine/40 blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan/40 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="sticker bg-white/20 border border-white/30 text-white mb-4">by the numbers</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
            big energy. <span className="font-serif-it">bigger receipts.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="glass-dark rounded-3xl p-6 text-center">
                <div className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest mt-2 opacity-80">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
