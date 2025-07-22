import { Button } from "@/components/ui/button";
import { Play, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-cinema.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cinema Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Discover
          </span>
          <br />
          <span className="text-foreground">Amazing Movies</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Explore thousands of movies, create personalized watchlists, and get recommendations tailored just for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Play className="h-5 w-5 mr-2" />
            Start Exploring
          </Button>
          <Button variant="cinema-outline" size="lg" className="text-lg px-8 py-4">
            <TrendingUp className="h-5 w-5 mr-2" />
            Trending Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cinema-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cinema-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;