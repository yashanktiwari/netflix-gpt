import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
  // Fetch data from TMDB api and update the store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    // Applying memoization
    !topRatedMovies && getTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;