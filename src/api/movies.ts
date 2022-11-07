import instance from './instance';
import endpoints from './endpoints';
import { MovieResponseTypes, MovieDetailsTypes, MovieCreditsTypes } from '../interfaces/api/Movies';

const { nowPlaying, popular, topRated, upcoming, movieById, movieCredits } = endpoints.movies;

const getNowPlaying = () =>
  instance.get<MovieResponseTypes>(nowPlaying);

const getPopular = () =>
  instance.get<MovieResponseTypes>(popular);

const getTopRated = () =>
  instance.get<MovieResponseTypes>(topRated);

const getUpcoming = () =>
  instance.get<MovieResponseTypes>(upcoming);

const getMovieDetails = (movieId: number) =>
  instance.get<MovieDetailsTypes>(movieById.replace(':movieId', movieId.toString()));

const getMovieCredits = (movieId: number) =>
  instance.get<MovieCreditsTypes>(movieCredits.replace(':movieId', movieId.toString()));

export default {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
  getMovieDetails,
  getMovieCredits
};
