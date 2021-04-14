import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {theme} from '../constants';
const {SIZES, FONTS, COLORS} = theme;

const Header = ({label}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  labelContainer: {
    paddingVertical: SIZES.padding4,
  },
  labelText: {
    ...FONTS.h2,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
