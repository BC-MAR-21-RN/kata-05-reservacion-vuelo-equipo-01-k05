import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const GoBackScreen = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image
        source={require('../assets/icons/chevron-left.png')}
        style={styles.icon}
      />
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
