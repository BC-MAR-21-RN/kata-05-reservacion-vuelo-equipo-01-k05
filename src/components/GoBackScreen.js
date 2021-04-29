import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {icons} from '../constants';

const GoBackScreen = ({navigation}) => {
  const goBackScreen = () => navigation.goBack();

  return (
    <TouchableWithoutFeedback onPress={goBackScreen}>
      <Image source={icons.chevronLeft} style={styles.icon} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 20,
    marginLeft: 20,
    marginTop: 10,
    tintColor: '#5C36FA',
  },
});

export default GoBackScreen;
