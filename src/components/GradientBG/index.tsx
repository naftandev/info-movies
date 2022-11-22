import React, { FC, useContext, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { GradientBGPropsTypes } from '../../interfaces/components/GradientBG';
import { GradientContext } from '../../context/GradientContext';
import { useFade } from '../../hooks';

const GradientBG: FC<GradientBGPropsTypes> = ({ children }) => {
  const { prevColors, colors, handleSetPrevColors } = useContext(GradientContext);
  const { opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(0.3, () => {
      handleSetPrevColors(colors);
      fadeOut(0);
    });
  }, [colors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.5 }}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity
        }}
      >
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.5 }}
        />
      </Animated.View>

      {children}
    </View>
  );
};

export default GradientBG;
