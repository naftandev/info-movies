import { MovieTypes } from '../api/Movies';

export interface MoviesStateTypes {
  nowPlaying: MovieTypes[];
  popular: MovieTypes[];
  topRated: MovieTypes[];
  upcoming: MovieTypes[];
};
