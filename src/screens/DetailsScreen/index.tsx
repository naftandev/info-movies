import React, { FC } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { DetailsScreenPropsTypes } from '../../interfaces/screens/DetailsScreen';
import { useMovieDetails } from '../../hooks';
import { MovieDetails } from '../../components';

const DetailsScreen: FC<DetailsScreenPropsTypes> = ({ route, navigation }) => {
  const { id, poster_path, original_title, title } = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const { top } = useSafeAreaInsets();
  const { details, cast, isLoading, error } = useMovieDetails(id);

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{
          position: 'absolute',
          top,
          left: 10,
          zIndex: 1
        }}
      >
        <Icon
          name='arrow-back-outline'
          size={50}
          color='#edf2f4'
        />
      </TouchableOpacity>
      <View style={styles.moviePosterContainer}>
        <Image
          source={{ uri }}
          style={styles.moviePoster}
        />
      </View>
      <View style={styles.movieDetailsContainer}>
        <View style={styles.movieTitleContainer}>
          <Text style={styles.movieSubtitle}>{original_title}</Text>
          <Text style={styles.movieTitle}>{title}</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator color='grey' size={25} />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <MovieDetails details={details!} cast={cast!} />
        )}
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
