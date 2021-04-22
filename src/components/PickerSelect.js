import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from '../styles/stylePickerSelect';

const PickerSelect = ({value, valueChange}) => {
  const values = () => {
    let array = [];
    for (let i = 1; i <= 10; i++) {
      array.push(i.toString());
    }
    return array;
  };

  const numbers = values();

  return (
    <View>
      <Text style={styles.title}>How many passengers?</Text>
      <Picker
        style={styles.picker}
        selectedValue={value}
        onValueChange={valueChange}>
        {numbers.map(item => (
          <Picker.Item
            style={styles.text}
            key={item}
            label={item}
            value={item}
          />
        ))}
      </Picker>
    </View>
  );
};

export default PickerSelect;
