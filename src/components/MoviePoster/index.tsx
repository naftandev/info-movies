import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { MoviePosterPropsTypes } from '../../interfaces/components/MoviePoster';
import styles from './styles';

const MoviePoster: FC<MoviePosterPropsTypes> = ({ width, height, customContainerStyles, movie, onPressMovie }) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { width, height },
        customContainerStyles
      ]}
      onPress={onPressMovie}
    >
      <Image source={{ uri }} style={styles.posterImage} />
    </TouchableOpacity>
  );
};

export default MoviePoster;
