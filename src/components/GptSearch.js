import { BACKGROUND_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
   
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-0 "
        style={{
          backgroundImage: `url(${BACKGROUND_IMG})`
        }}
      ></div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
