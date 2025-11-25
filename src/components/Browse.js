import Head from './Head'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useAiringTodayTVShows from '../hooks/useAiringTodayTVShows';
import useOnTheAirTVShows from '../hooks/useOnTheAirTVShows';
import usePopularTVShows from '../hooks/usePopularTVShows';
import useTopRatedTVShows from '../hooks/useTopRatedTVShows';

const Browse = () => {

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useAiringTodayTVShows();
  useOnTheAirTVShows();
  usePopularTVShows();
  useTopRatedTVShows();

  return (
    <div className="bg-black pb-12">
      <Head />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )

}

export default Browse
