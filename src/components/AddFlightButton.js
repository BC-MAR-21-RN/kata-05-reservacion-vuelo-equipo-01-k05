import React from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {styles} from '../styles/styleFlightButton';
import {icons} from '../constants';

const AddFlightButton = ({pressFunction}) => {
  return (
    <TouchableHighlight
      onPress={pressFunction}
      style={styles.container}
      activeOpacity={0.6}
      underlayColor="#331E87">
      <Image source={icons.plus} style={styles.icon} />
    </TouchableHighlight>
  );
};

export default AddFlightButton;
