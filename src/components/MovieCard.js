import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;

    return (
        <div className="
            w-36 md:w-44 lg:w-52 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition duration-300 ease-out hover:scale-110 hover:z-20 shadow-lg hover:shadow-2xl
        ">
            <img
                className="w-full h-56 md:h-64 object-cover"
                src={IMG_CDN_URL + posterPath}
                alt="movie"
            />
        </div>
    );
};

export default MovieCard;
