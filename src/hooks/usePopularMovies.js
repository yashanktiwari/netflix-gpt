import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const popularMovies = useSelector(store => store.movies.popularMovies);
  // Fetch data from TMDB api and update the store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    // Applying memoization
    !popularMovies && getPopularMovies();
  }, []);
}

export default usePopularMovies;