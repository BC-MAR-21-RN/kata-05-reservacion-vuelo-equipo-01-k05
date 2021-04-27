import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../styles/styleDataFlight';
import Country from './CountryItem';

const DataFlight = ({origin, destination, date, passengers, styleViewTop}) => {
  return (
    <View style={styles.container}>
      <View style={styleViewTop ? styleViewTop : styles.viewTop}>
        <Country name={origin} />
        <Image
          source={require('../assets/icons/airplane.png')}
          style={styles.icon}
        />
        {destination && <Country name={destination} toRight />}
      </View>
      {date && (
        <View style={styles.viewDown}>
          <Text style={styles.textDown}>{date}</Text>
          {passengers && (
            <Text style={styles.textDown}>{passengers} passengers</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default DataFlight;
