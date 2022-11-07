import { Dimensions, Platform, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  moviePosterContainer: {
    width: '100%',
    height: dimensions.height * 0.7,
    borderBottomStartRadius: Platform.OS === 'android' ? 40 : 0,
    borderBottomEndRadius: Platform.OS === 'android' ? 40 : 0,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  moviePoster: {
    flex: 1,
    borderBottomStartRadius: Platform.OS === 'ios' ? 40 : 0,
    borderBottomEndRadius: Platform.OS === 'ios' ? 40 : 0,
  },
  movieDetailsContainer: {
    marginTop: 20,
    marginHorizontal: 20
  },
  movieTitleContainer: {
    marginBottom: 5
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  movieSubtitle: {
    fontSize: 18,
    opacity: 0.8
  }
});

export default styles;
