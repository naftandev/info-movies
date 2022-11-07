import { MovieCreditsCastTypes, MovieDetailsTypes } from "../api/Movies";

export interface MovieDetailsPropsTypes {
  details: MovieDetailsTypes;
  cast: MovieCreditsCastTypes[];
};
