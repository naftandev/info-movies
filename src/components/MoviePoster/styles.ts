import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  posterImage: {
    flex: 1,
    borderRadius: 15
  }
});

export default styles;
