import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 44,
    paddingTop: 80,
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingTop: 18,
    paddingBottom: 20,
    alignItems: 'center',
    borderRadius: 16,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700'
  },
  marginVertical10: {
    marginVertical: 10,
  },
  devider: {
    height: 0.6,
    width: '100%', 
    backgroundColor: 'grey'
  }
});

export default styles;
