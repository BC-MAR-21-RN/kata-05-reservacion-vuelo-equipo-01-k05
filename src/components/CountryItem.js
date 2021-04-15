import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Country = ({name, toRight}) => {
  const abb = name.slice(0, 3).toUpperCase();
  const countryName = name.split(',')[1].trim();

  return (
    <View style={toRight ? styles.toRight : null}>
      <Text style={styles.titleAbb}>{abb}</Text>
      <Text style={styles.countryName}>{countryName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleAbb: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  countryName: {
    fontSize: 18,
    color: '#999796',
    paddingVertical: 8,
  },
  toRight: {
    alignItems: 'flex-end',
  },
});

export default Country;
