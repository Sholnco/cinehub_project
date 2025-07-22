import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, Clock, Users } from "lucide-react";

const FeaturedSection = () => {
  const featuredMovie = {
    title: "Dune: Part Two",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    posterPath: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdropPath: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    releaseDate: "2024-02-29",
    voteAverage: 8.4,
    runtime: 166,
    genres: ["Science Fiction", "Adventure", "Drama"]
  };

  return (
    <section className="py-16 px-4 bg-cinema-surface">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Featured This Week
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on this week's must-watch movie that's taking the world by storm
          </p>
        </div>

        {/* Featured Movie Card */}
        <Card className="relative overflow-hidden bg-gradient-card border-cinema-surface-elevated max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 p-8">
            {/* Movie Poster */}
            <div className="md:col-span-2">
              <div className="relative group">
                <img
                  src={`https://image.tmdb.org/t/p/w500${featuredMovie.posterPath}`}
                  alt={featuredMovie.title}
                  className="w-full rounded-lg shadow-card transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Button variant="hero" size="lg">
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>

            {/* Movie Details */}
            <div className="md:col-span-3 flex flex-col justify-center">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2 bg-cinema-red/20 text-cinema-red border-cinema-red/30">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending #1
                </Badge>
                <h3 className="text-3xl font-bold mb-2 text-foreground">
                  {featuredMovie.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredMovie.overview}
              </p>

              {/* Movie Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-cinema-gold" />
                  <span className="text-sm">
                    <span className="font-semibold">{featuredMovie.voteAverage}</span>
                    <span className="text-muted-foreground">/10</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-cinema-red" />
                  <span className="text-sm font-semibold">{featuredMovie.runtime} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-foreground" />
                  <span className="text-sm font-semibold">
                    {new Date(featuredMovie.releaseDate).getFullYear()}
                  </span>
                </div>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredMovie.genres.map((genre) => (
                  <Badge
                    key={genre}
                    variant="outline"
                    className="border-cinema-red/50 text-cinema-red hover:bg-cinema-red hover:text-black transition-colors duration-300"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cinema" size="lg" className="flex-1">
                  Add to Watchlist
                </Button>
                <Button variant="cinema-outline" size="lg" className="flex-1">
                  More Details
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedSection;