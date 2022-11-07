import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { GradientBGPropsTypes } from '../../interfaces/components/GradientBG';

const GradientBG: FC<GradientBGPropsTypes> = ({ children }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#084f6a', '#75cedb', 'white']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.5 }}
      />
      {children}
    </View>
  );
};

export default GradientBG;
