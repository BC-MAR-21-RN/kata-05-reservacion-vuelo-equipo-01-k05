import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
  buttonActive: {
    backgroundColor: '#576EFA',
    shadowColor: '#576EFA',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonDisabled: {
    backgroundColor: '#BCBBBD',
  },
  viewText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
