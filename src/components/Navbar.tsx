import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Film, User, Heart, Star } from "lucide-react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-cinema-surface border-b border-border sticky top-0 z-50 backdrop-blur-md bg-cinema-surface/90">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-cinema-red" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              CinemaHub
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-cinema-dark border-cinema-surface-elevated focus:border-cinema-red"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-cinema-red">
              <Heart className="h-4 w-4 mr-2" />
              Favorites
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-cinema-red">
              <Star className="h-4 w-4 mr-2" />
              Watchlist
            </Button>
            <Button variant="cinema-outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;