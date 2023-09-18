import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  // Fetch data from TMDB api and update the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    // Applying memoization
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;