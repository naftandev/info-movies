import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    marginHorizontal: 7.5,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#edf2f4',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  picture: {
    flex: 1,
    borderRadius: 10
  },
  actorDetails: {
    width: '100%',
    padding: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  character: {
    fontSize: 10,
    opacity: 0.8
  }
});

export default styles;
