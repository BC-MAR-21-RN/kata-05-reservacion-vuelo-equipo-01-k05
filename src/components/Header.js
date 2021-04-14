import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {theme} from '../constants';
const {SIZES, FONTS, COLORS} = theme;

const Header = ({headerLabel}) => {
  return (
    <>
      <SafeAreaView />
      <Text style={styles.headerText}>{headerLabel}</Text>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerText: {
    ...FONTS.h2,
    fontWeight: 'bold',
    color: COLORS.primary,
    paddingVertical: SIZES.padding4,
  },
});
