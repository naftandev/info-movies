import { MovieCreditsCastTypes, MovieDetailsTypes } from '../api/Movies';

export interface MovieDetailsStateTypes {
  details: MovieDetailsTypes;
  cast: MovieCreditsCastTypes[];
};
