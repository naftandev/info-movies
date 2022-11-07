import { useEffect, useState } from 'react';

import { movies as moviesApi } from '../api';
import { MovieDetailsStateTypes } from '../interfaces/hooks/useMovieDetails';

const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsStateTypes>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    try {
      const [detailsResponse, creditsResponse] = await Promise.all([
        moviesApi.getMovieDetails(movieId),
        moviesApi.getMovieCredits(movieId)
      ]);
      setMovieDetails({
        details: detailsResponse.data,
        cast: creditsResponse.data.cast
      });
    } catch (error) {
      setError('Hubo un error al obtener el detalle de la película');
    } finally {
      setIsLoading(false);
    };
  };

  return {
    ...movieDetails,
    isLoading,
    error
  };
};

export default useMovieDetails;
