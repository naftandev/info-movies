import { MovieTypes } from '../api/Movies';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: MovieTypes;
};
