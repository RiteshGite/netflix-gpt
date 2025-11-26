import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

    const identifier = useSelector(store => store.config.lang);

    return (
        <form
            className="absolute top-[20%] left-1/2 -translate-x-1/2 flex bg-black rounded-xl shadow-lg w-[750px] p-4"
        >
            <input
                type="text"
                placeholder={lang[identifier].gptSearchPlaceholder}
                className="flex-1 bg-white text-black px-6 py-4 text-lg rounded-l-xl"
            />

            <button
                className="bg-red-600 hover:bg-red-700 transition-all text-white
                font-semibold px-14 text-xl rounded-r-xl"
            >
                {lang[identifier].search}
            </button>
        </form>
    );
};

export default GptSearchBar;
