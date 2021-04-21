import React from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {styles} from '../styles/styleFlightButton';

const AddFlightButton = ({pressFunction}) => {
  return (
    <TouchableHighlight
      onPress={pressFunction}
      style={styles.container}
      activeOpacity={0.6}
      underlayColor="#331E87">
      <Image source={require('../assets/icons/plus.png')} style={styles.icon} />
    </TouchableHighlight>
  );
};

export default AddFlightButton;
