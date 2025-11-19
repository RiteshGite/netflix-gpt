import Head from './Head'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Head />
      <MainContainer/>
      <SecondaryContainer/>
      {/*
        MainContainer
          - videoBackground
          - videoTitle
        Secondary Container
          - MoviesList * n
              - Cards * n
      */}
    </div>
  )
}

export default Browse