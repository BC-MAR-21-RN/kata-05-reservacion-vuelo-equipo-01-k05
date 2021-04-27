import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../styles/styleLocationItem';

const LocationItem = ({onChangeText, textQuestion, isDisable, styleView}) => {
  const styleViewInput = styleView ? styleView : {};

  return (
    <View style={{...styles.viewInput, ...styleViewInput}}>
      <Text style={styles.textQuestion}>{textQuestion}</Text>
      <TextInput
        onChangeText={onChangeText}
        style={isDisable ? styles.input : styles.inputComplete}
        placeholder={'Select location'}
      />
    </View>
  );
};

export default LocationItem;
