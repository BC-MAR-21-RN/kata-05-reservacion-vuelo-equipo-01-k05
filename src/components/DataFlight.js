import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Country from './CountryItem';

const DataFlight = ({orig, dest, date, passengers}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Country name={orig} />
        <Image
          source={require('../assets/icons/airplane.png')}
          style={styles.icon}
        />
        <Country name={dest} toRight />
      </View>
      <View style={styles.viewDown}>
        <Text style={styles.textDown}>{date}</Text>
        <Text style={styles.textDown}>{passengers} passengers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default DataFlight;
