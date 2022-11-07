import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';

import styles from './styles';
import { MoviesCategoryPropsTypes } from '../../interfaces/components/MoviesCategory';
import { MoviePoster } from '..';

const MoviesCategory: FC<MoviesCategoryPropsTypes> = ({ title, movies, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MoviePoster
          width={140}
          height={200}
          customContainerStyles={{
            marginHorizontal: 7.5
          }}
          movie={item}
          onPressMovie={() => navigation.navigate('DetailsScreen', item)}
        />
      )}
      keyExtractor={item => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default MoviesCategory;
