import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);

  if (!movieNames) return null;
  return (
    <div
      className="fixed top-[14rem] left-1/2 -translate-x-1/2 w-[95%] z-50"
    >
      <div
        className="
          bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-10 space-y-10 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-hide
          max-h-[75vh]
        "
      >
        {
          movieNames?.map((name, i) => (
            <MovieList
              key={i}
              title={name}
              movies={movieResults[i]}
            />
          ))
        }
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
