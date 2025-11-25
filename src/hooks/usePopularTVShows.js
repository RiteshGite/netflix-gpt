import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTVShows } from "../utils/moviesSlice";

const usePopularTVShows = () => {
    // Fetch Data from TMDB API and update the store

    const dispatch = useDispatch();

    useEffect(() => {
        getPopularTVShows();
    }, []);

    const getPopularTVShows = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularTVShows(json.results));
    }
};

export default usePopularTVShows;