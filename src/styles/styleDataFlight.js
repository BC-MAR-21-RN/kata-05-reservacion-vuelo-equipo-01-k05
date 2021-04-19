import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#999796',
  },
  viewDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 15,
  },
  textDown: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'blue',
  },
});
