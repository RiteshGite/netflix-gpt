import { BACKGROUND_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <img src={BACKGROUND_IMG} alt="backgroundImg" className="w-screen h-screen" />
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;