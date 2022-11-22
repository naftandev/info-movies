import { useRef } from 'react';
import { Animated } from 'react-native';

const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number, callback?: Function) => Animated.timing(opacity, {
    toValue: 1,
    duration: duration * 1000,
    useNativeDriver: true
  }).start(() => callback ? callback() : null);

  const fadeOut = (duration: number) => Animated.timing(opacity, {
    toValue: 0,
    duration: duration * 1000,
    useNativeDriver: true
  }).start();

  return {
    opacity,
    fadeIn,
    fadeOut
  };
};

export default useFade;
