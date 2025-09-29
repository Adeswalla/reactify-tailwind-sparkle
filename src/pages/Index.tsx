import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import QuickCategories from "@/components/QuickCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedCollections />
      <QuickCategories />
      <Footer />
    </div>
  );
};

export default Index;