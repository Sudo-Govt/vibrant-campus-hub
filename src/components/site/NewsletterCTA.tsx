import { useState } from "react";
import { Reveal } from "./Reveal";

export const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section id="apply" className="relative py-20 sm:py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] grad-hero p-8 sm:p-16 text-white grain">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sunshine/40 blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan/40 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="sticker bg-white/20 border border-white/30 text-white mb-4">your move</span>
                <h2 className="font-display font-bold text-5xl sm:text-7xl tracking-tighter leading-[0.95]">
                  your future,<br />
                  <span className="font-serif-it">starts mid-sentence.</span>
                </h2>
                <p className="mt-5 text-sm sm:text-base opacity-95 max-w-md">
                  Get monthly drops on deadlines, scholarships, parties and chaos. No spam. Pinky promise.
                </p>
              </div>

              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="glass rounded-3xl p-2 flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@somewhere.cool"
                  className="flex-1 bg-transparent text-ink placeholder:text-ink/50 px-4 py-3.5 rounded-2xl outline-none text-sm font-medium"
                />
                <button type="submit" className="rounded-2xl bg-ink text-white text-sm font-semibold px-5 py-3.5 hover:scale-[1.03] transition-transform whitespace-nowrap">
                  {sent ? "✓ See you soon" : "Keep me posted →"}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
