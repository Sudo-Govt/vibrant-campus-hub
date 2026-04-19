import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AnnouncementMarquee } from "@/components/site/AnnouncementMarquee";
import { FeatureCards } from "@/components/site/FeatureCards";
import { ProgramsBento } from "@/components/site/ProgramsBento";
import { CampusWall } from "@/components/site/CampusWall";
import { Spotlights } from "@/components/site/Spotlights";
import { EventsCarousel } from "@/components/site/EventsCarousel";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { VirtualTour } from "@/components/site/VirtualTour";
import { NewsGrid } from "@/components/site/NewsGrid";
import { PartnersMarquee } from "@/components/site/PartnersMarquee";
import { FAQ } from "@/components/site/FAQ";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <AnnouncementMarquee />
      <FeatureCards />
      <ProgramsBento />
      <CampusWall />
      <Spotlights />
      <EventsCarousel />
      <Stats />
      <Testimonials />
      <VirtualTour />
      <NewsGrid />
      <PartnersMarquee />
      <FAQ />
      <NewsletterCTA />
      <Footer />
    </main>
  );
};

export default Index;
