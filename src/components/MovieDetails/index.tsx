import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { MovieDetailsPropsTypes } from '../../interfaces/components/MovieDetails';
import { CastItem } from '..';

const MovieDetails: FC<MovieDetailsPropsTypes> = ({ details, cast }) => {
  return (
    <View style={styles.container}>
      {/* Details */}
      <View style={styles.detailsContainer}>
        <Icon name='star-outline' size={15} color='grey' />
        <Text style={styles.textVoteAverage}>{details.vote_average}</Text>
        <Text> - {details.genres.map(genre => genre.name).join(', ')}</Text>
      </View>

      {/* Sinopsis */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectiontitle}>Sinopsis</Text>
        <Text style={styles.sinopsis}>{details.overview}</Text>
      </View>

      {/* Budget */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectiontitle}>Presupuesto</Text>
        <Text style={styles.budget}>
          {currencyFormatter.format(details.budget, { code: 'USD' })}
        </Text>
      </View>

      {/* Cast */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectiontitle}>Elenco</Text>
        <FlatList
          data={cast}
          renderItem={({ item }) => <CastItem actor={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MovieDetails;
