import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import CalendarSection from "@/components/CalendarSection";
import RolesSection from "@/components/RolesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AnnouncementsSection />
      <CalendarSection />
      <RolesSection />
      <Footer />
    </div>
  );
};

export default Index;
