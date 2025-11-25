import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTVShows } from "../utils/moviesSlice";

const useTopRatedTVShows = () => {
    // Fetch Data from TMDB API and update the store

    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedTVShows();
    }, []);

    const getTopRatedTVShows = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/tv/top_rated?page=1', API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedTVShows(json.results));
    }
};

export default useTopRatedTVShows;