import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {theme} from '../constants';
const {SIZES, FONTS, COLORS} = theme;

const Header = ({headerLabel}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{headerLabel}</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: SIZES.padding4,
  },
  headerText: {
    ...FONTS.h2,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
