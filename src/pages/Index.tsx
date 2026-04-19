import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AnnouncementMarquee } from "@/components/site/AnnouncementMarquee";
import { FeatureCards } from "@/components/site/FeatureCards";
import { Faculties } from "@/components/site/Faculties";
import { Courses } from "@/components/site/Courses";
import { ProgramsBento } from "@/components/site/ProgramsBento";
import { Research } from "@/components/site/Research";
import { CampusWall } from "@/components/site/CampusWall";
import { StudentVoices } from "@/components/site/StudentVoices";
import { Spotlights } from "@/components/site/Spotlights";
import { EventsCarousel } from "@/components/site/EventsCarousel";
import { Stats } from "@/components/site/Stats";
import { Admissions } from "@/components/site/Admissions";
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
      <Faculties />
      <Courses />
      <ProgramsBento />
      <Research />
      <CampusWall />
      <StudentVoices />
      <Spotlights />
      <EventsCarousel />
      <Stats />
      <Admissions />
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
