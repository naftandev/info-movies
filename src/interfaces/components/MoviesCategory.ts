import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MovieTypes } from '../api/Movies';
import { RootStackParamList } from '../navigation/StackNavigation';

export interface MoviesCategoryPropsTypes {
  title: string;
  movies: MovieTypes[];
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};
