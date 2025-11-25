import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className="bg-gradient-to-b from-transparent -mt-36 relative z-10">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
      <MovieList title="Popular" movies={movies?.popularMovies} />
      <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
      <MovieList title="Trending" movies={movies?.trendingMovies} />
    </div>
  )
}

export default SecondaryContainer
