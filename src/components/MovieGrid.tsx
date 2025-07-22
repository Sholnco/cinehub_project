import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Grid, MoreHorizontal } from "lucide-react";

// Mock data for demonstration
const mockMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterPath: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    releaseDate: "2008-07-18",
    voteAverage: 9.0,
    genres: ["Action", "Crime", "Drama"]
  },
  {
    id: 2,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterPath: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    releaseDate: "2010-07-16",
    voteAverage: 8.8,
    genres: ["Action", "Sci-Fi", "Thriller"]
  },
  {
    id: 3,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterPath: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    releaseDate: "2014-11-07",
    voteAverage: 8.6,
    genres: ["Adventure", "Drama", "Sci-Fi"]
  },
  {
    id: 4,
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterPath: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    releaseDate: "1999-03-31",
    voteAverage: 8.7,
    genres: ["Action", "Sci-Fi"]
  },
  {
    id: 5,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterPath: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    releaseDate: "1994-10-14",
    voteAverage: 8.9,
    genres: ["Crime", "Drama"]
  },
  {
    id: 6,
    title: "Forrest Gump",
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man.",
    posterPath: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    releaseDate: "1994-07-06",
    voteAverage: 8.8,
    genres: ["Drama", "Romance"]
  }
];

const MovieGrid = () => {
  const [movies, setMovies] = useState(mockMovies);
  const [sortBy, setSortBy] = useState("popularity");
  const [filterBy, setFilterBy] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Popular Movies
              </span>
            </h2>
            <p className="text-muted-foreground">
              Discover the most popular movies trending right now
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 bg-cinema-surface border-cinema-surface-elevated">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-cinema-surface border-cinema-surface-elevated">
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="release">Release Date</SelectItem>
                <SelectItem value="title">Title</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-40 bg-cinema-surface border-cinema-surface-elevated">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent className="bg-cinema-surface border-cinema-surface-elevated">
                <SelectItem value="all">All Genres</SelectItem>
                <SelectItem value="action">Action</SelectItem>
                <SelectItem value="drama">Drama</SelectItem>
                <SelectItem value="comedy">Comedy</SelectItem>
                <SelectItem value="thriller">Thriller</SelectItem>
                <SelectItem value="sci-fi">Sci-Fi</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="hover:bg-cinema-surface-elevated"
            >
              <Grid className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="cinema-outline" size="lg" className="px-8">
            <MoreHorizontal className="h-5 w-5 mr-2" />
            Load More Movies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MovieGrid;