import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from '../styles/stylePrimaryButton';

const PrimaryButton = ({pressFunction, textButton, isDisable, icon}) => {
  const styleDisabled = isDisable ? styles.buttonDisabled : styles.buttonActive;

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      style={{...styles.button, ...styleDisabled}}
      disabled={isDisable}
      underlayColor="#4050B8"
      onPress={pressFunction}>
      <View style={styles.viewText}>
        {icon ? icon : null}
        <Text style={styles.textButton}>{textButton}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
