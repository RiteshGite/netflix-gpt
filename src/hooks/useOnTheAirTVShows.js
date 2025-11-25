import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOnTheAirTVShows } from "../utils/moviesSlice";

const useOnTheAirTVShows = () => {
    // Fetch Data from TMDB API and update the store

    const dispatch = useDispatch();

    useEffect(() => {
        getOnTheAirTVShows();
    }, []);

    const getOnTheAirTVShows = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/tv/on_the_air?page=1', API_OPTIONS
        );
        const json = await data.json();
        dispatch(addOnTheAirTVShows(json.results));
    }
};

export default useOnTheAirTVShows;