import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return null;

    return (
        <div className="mb-12 px-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {title}
            </h1>

            <div className="
                flex space-x-4 overflow-x-scroll scrollbar-hide 
                pb-4 pt-2
            ">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
