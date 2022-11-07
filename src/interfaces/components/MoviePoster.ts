import { ViewStyle } from 'react-native';
import { MovieTypes } from '../api/Movies';

export interface MoviePosterPropsTypes {
  width?: number;
  height?: number;
  customContainerStyles?: ViewStyle;
  movie: MovieTypes;
  onPressMovie: () => void;
};
