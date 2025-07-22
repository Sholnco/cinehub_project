import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import MovieGrid from "@/components/MovieGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <MovieGrid />
      <Footer />
    </div>
  );
};

export default Index;
