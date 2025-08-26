import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrackingSection from "@/components/TrackingSection";
import DeveloperSection from "@/components/DeveloperSection";
import ClientManagementSection from "@/components/ClientManagementSection";
import BackgroundSection from "@/components/BackgroundSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tokyo-dark">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TrackingSection />
      <DeveloperSection />
      <ClientManagementSection />
      <BackgroundSection />
      <Footer />
    </div>
  );
};

export default Index;