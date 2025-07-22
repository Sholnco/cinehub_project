import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Plus, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  genres?: string[];
}

const MovieCard = ({
  title,
  overview,
  posterPath,
  releaseDate,
  voteAverage,
  genres = [],
}: MovieCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  const imageUrl = posterPath 
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "/placeholder.svg";

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-cinema-surface-elevated hover:border-cinema-red transition-all duration-300 hover:shadow-card hover:scale-105">
      <div className="relative">
        {/* Movie Poster */}
        <div className="aspect-[2/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="cinema" size="lg" className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Play className="h-5 w-5 mr-2" />
              View Details
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            size="icon"
            className={cn(
              "h-8 w-8 bg-cinema-surface/80 backdrop-blur-sm",
              isFavorite && "bg-cinema-red text-white"
            )}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className={cn(
              "h-8 w-8 bg-cinema-surface/80 backdrop-blur-sm",
              isInWatchlist && "bg-cinema-gold text-black"
            )}
            onClick={() => setIsInWatchlist(!isInWatchlist)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-cinema-dark/80 backdrop-blur-sm">
            <Star className="h-3 w-3 mr-1 text-cinema-gold" />
            {voteAverage.toFixed(1)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-cinema-red transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {overview}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {new Date(releaseDate).getFullYear()}
          </span>
          
          {genres.length > 0 && (
            <div className="flex gap-1">
              {genres.slice(0, 2).map((genre) => (
                <Badge
                  key={genre}
                  variant="outline"
                  className="text-xs border-cinema-red/50 text-cinema-red"
                >
                  {genre}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;