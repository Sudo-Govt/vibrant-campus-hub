import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "When are applications due?", a: "Early action: Nov 1. Regular: Jan 15. Transfer: rolling. Late applicants — slide into our admissions DMs, we don't bite." },
  { q: "Is Nova test-optional?", a: "Yes, permanently. We read every essay, portfolio and project. Show us how you think." },
  { q: "How much is tuition really?", a: "Sticker is $58k/yr but 78% of students receive aid. Average actual cost is $19k. We meet 100% of demonstrated need." },
  { q: "Can I bring my dog?", a: "Emotional support pets — yes, with paperwork. Fish — always. Pythons — please no." },
  { q: "Do I have to live on campus?", a: "First two years yes, because that's where the magic (and the 2am ramen runs) happens." },
  { q: "What's the wifi password?", a: "Nice try." },
];

export const FAQ = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-cyan/15 via-background to-magenta/15">
      <div className="container max-w-3xl">
        <Reveal className="text-center mb-10">
          <span className="sticker glass-tint mb-4 text-ink">questions, answered</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
            you asked. <span className="font-serif-it text-grad-warm">we answered.</span>
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="glass-tint rounded-2xl border-0 px-5 data-[state=open]:shadow-[0_20px_40px_-15px_hsl(var(--magenta)/0.3)]">
                <AccordionTrigger className="text-left font-display font-semibold text-base sm:text-lg py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};
