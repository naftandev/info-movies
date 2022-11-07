import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { CastItemPropsTypes } from '../../interfaces/components/CastItem';
import styles from './styles';

const CastItem: FC<CastItemPropsTypes> = ({ actor }) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{ uri }} style={styles.picture} />}
      <View style={styles.actorDetails}>
        <Text style={styles.name} numberOfLines={1}>
          {actor.name}
        </Text>
        <Text style={styles.character} numberOfLines={1}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

export default CastItem;
