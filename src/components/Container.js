import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../constants';

const {SIZES} = theme;

const Container = ({children, isScreen}) => {
  return (
    <View
      style={
        isScreen ? ScreenContainerStyles.container : ContainerStyles.container
      }>
      {children}
    </View>
  );
};

export default Container;

const ScreenContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
});

const ContainerStyles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.padding2,
  },
});
