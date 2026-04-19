import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = ["Programs", "Campus", "Life", "Research", "Apply"];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed top-3 inset-x-3 z-50 transition-all duration-500", scrolled && "top-2")}>
      <nav className={cn("glass-tint mx-auto max-w-6xl rounded-full px-4 sm:px-6 py-3 flex items-center justify-between gap-4")}>
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full grad-hero text-white font-display font-bold">
            N
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-lime border-2 border-white" />
          </span>
          <span className="font-display font-bold tracking-tight text-base">
            nova<span className="text-grad-hero">.uni</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-[13px] font-medium">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="px-3 py-1.5 rounded-full hover:bg-white/60 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#apply" className="hidden sm:inline-flex items-center gap-1.5 rounded-full grad-hero text-white text-[13px] font-semibold px-4 py-2 hover:scale-[1.03] transition-transform shadow-[0_8px_20px_-6px_hsl(var(--magenta)/0.6)]">
            Apply now <span aria-hidden>→</span>
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 rounded-full bg-white/70 border border-white grid place-items-center"
          >
            <span className="block w-4 h-[2px] bg-ink relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-[2px] before:bg-ink after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-4 after:h-[2px] after:bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 mx-auto max-w-6xl glass-tint rounded-3xl p-3 animate-fade-in">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l}>
                <a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block px-3 py-2 rounded-xl hover:bg-white/70 text-sm font-medium">
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a href="#apply" onClick={() => setOpen(false)} className="mt-2 block text-center rounded-full grad-hero text-white text-sm font-semibold px-4 py-2.5">
                Apply now →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
