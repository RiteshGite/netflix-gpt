import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {

    const identifier = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGPTSearchClick = async () => {
        const response = await gemini.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: "Give only names of 5 movies based on this - " + searchText.current.value + ". Should be comma separated",
        });
        const gptMovies = response.text.split(", ");
        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addMovieResults({ movieNames: gptMovies, movieResults: tmdbResults }));
    }

    return (
        <form
            className="flex bg-black rounded-xl shadow-lg w-[750px] p-4 sticky z-50 top-[7rem] left-1/2 -translate-x-1/2"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                ref={searchText}
                type="text"
                placeholder={lang[identifier].gptSearchPlaceholder}
                className="flex-1 bg-white text-black px-6 py-4 text-lg rounded-l-xl"
            />

            <button
                className="bg-red-600 hover:bg-red-700 transition-all text-white
                font-semibold px-14 text-xl rounded-r-xl"
                onClick={handleGPTSearchClick}
            >
                {lang[identifier].search}
            </button>
        </form>
    );
};

export default GptSearchBar;
