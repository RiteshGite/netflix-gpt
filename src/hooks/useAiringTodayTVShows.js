import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addAiringTodayTVShows} from "../utils/moviesSlice";

const useAiringTodayTVShows = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getAiringTodayTVShows();
    }, []);

    const getAiringTodayTVShows = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/tv/airing_today?page=1', API_OPTIONS
        );
        const json = await data.json();
        dispatch(addAiringTodayTVShows(json.results));
    }
};

export default useAiringTodayTVShows;