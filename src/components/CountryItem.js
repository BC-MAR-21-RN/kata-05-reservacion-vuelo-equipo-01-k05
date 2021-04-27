import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styleCountryItem';

const Country = ({name, toRight}) => {
  const abb = name.slice(0, 3).toUpperCase();
  const countryName = name.split(',')[1].trim();

  return (
    <View style={toRight && styles.toRight}>
      <Text style={styles.titleAbb}>{abb}</Text>
      <Text style={styles.countryName}>{countryName}</Text>
    </View>
  );
};

export default Country;
