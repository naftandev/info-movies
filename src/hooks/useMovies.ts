import { useEffect, useState } from 'react';

import { movies as moviesApi } from '../api';
import { MoviesStateTypes } from '../interfaces/hooks/UseMovies';

const useMovies = () => {
  const [movies, setMovies] = useState<MoviesStateTypes>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const [
        nowPlayingResponse,
        popularResponse,
        topRatedResponse,
        upcomingResponse
      ] = await Promise.all([
        moviesApi.getNowPlaying(),
        moviesApi.getPopular(),
        moviesApi.getTopRated(),
        moviesApi.getUpcoming()
      ]);
      setMovies({
        nowPlaying: nowPlayingResponse.data.results,
        popular: popularResponse.data.results,
        topRated: topRatedResponse.data.results,
        upcoming: upcomingResponse.data.results
      });
    } catch (error) {
      setError('Hubo un error al obtener las películas');
    } finally {
      setIsLoading(false);
    };
  };

  return {
    ...movies,
    isLoading,
    error
  };
};

export default useMovies;
