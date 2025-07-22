import { Film, Github, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-cinema-dark border-t border-cinema-surface-elevated">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Film className="h-8 w-8 text-cinema-red" />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                CinemaHub
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your ultimate destination for movie discovery, reviews, and personalized recommendations.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:text-cinema-red">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cinema-red">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cinema-red">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cinema-red">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Discover</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Popular Movies
              </a>
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                New Releases
              </a>
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Top Rated
              </a>
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Coming Soon
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Genres</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Action
              </a>
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Drama
              </a>
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Comedy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Sci-Fi
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-cinema-red transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cinema-surface-elevated mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 CinemaHub. All rights reserved. Built with ❤️ for movie lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;