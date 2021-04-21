import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../styles/styleLocationInput';

const LocationItem = ({textQuestion}) => {
  const [styleInput, setStyleInput] = useState(false);

  const changeText = text => {
    let value = text.length > 0 ? true : false;
    setStyleInput(value);
  };

  return (
    <View style={styles.viewInput}>
      <Text style={styles.textQuestion}>{textQuestion}</Text>
      <TextInput
        onChangeText={changeText}
        style={styleInput ? styles.inputComplete : styles.input}
        placeholder={'Select location'}
      />
    </View>
  );
};

export default LocationItem;
