import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
    // Fetch Data from TMDB API and update the store

    const dispatch = useDispatch();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/trending/movie/day?', API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }
};

export default useTrendingMovies;