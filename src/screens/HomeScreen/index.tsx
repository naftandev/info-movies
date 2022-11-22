import React, { FC, useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, Platform, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from '../../utils/snap-carousel';

import styles from './styles';
import { HomeScreenPropsTypes } from '../../interfaces/screens/HomeScreen';
import { GradientContext } from '../../context/GradientContext';
import { useMovies } from '../../hooks';
import { GradientBG, MoviePoster, MoviesCategory } from '../../components';
import { getImageColors } from '../../helpers';

const HomeScreen: FC<HomeScreenPropsTypes> = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const dimensions = Dimensions.get('window');
  const { handleSetColors  } = useContext(GradientContext);
  const {
    nowPlaying,
    popular,
    topRated,
    upcoming,
    isLoading,
    error
  } = useMovies();

  useEffect(() => {
    if (nowPlaying?.length) getPosterColors(0);
  }, [nowPlaying]);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying?.[index];
    const posterUri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
    const [primary = 'transparent', secondary = 'transparent'] = await getImageColors(posterUri);
    handleSetColors({ primary, secondary });
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ marginTop: top }}
        color='grey'
        size={25}
      />
    );
  };
  if (error) {
    return (
      <Text style={{ marginTop: top }}>
        {error}
      </Text>
    );
  };

  return (
    <GradientBG>
      <ScrollView style={[styles.container, { paddingTop: top + 20 }]}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={nowPlaying || []}
            renderItem={({ item }) => (
              <MoviePoster
                width={300}
                height={420}
                movie={item}
                onPressMovie={() => navigation.navigate('DetailsScreen', item)}
              />
            )}
            sliderWidth={dimensions.width}
            itemWidth={300}
            inactiveSlideOpacity={Platform.OS === 'android' ? 0.9 : 0.5}
            onSnapToItem={index => getPosterColors(index)}
          />
        </View>
        <View style={styles.categoriesContainer}>
          <MoviesCategory
            title='Popular'
            movies={popular || []}
            navigation={navigation}
          />
          <MoviesCategory
            title='Top rated'
            movies={topRated || []}
            navigation={navigation}
          />
          <MoviesCategory
            title='Upcoming'
            movies={upcoming || []}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </GradientBG>
  );
};

export default HomeScreen;
