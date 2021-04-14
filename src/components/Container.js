import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../constants';

const {SIZES} = theme;

const Container = ({children}) => {
  return (
    <View style={styles.container}>
      { children }
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.padding2,
  },
});
