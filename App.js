import React, {useState} from 'react';
import {View} from 'react-native';
import PickerSelect from './src/components/PickerSelect';

const App = () => {
  const [value, setValue] = useState('1');

  const valueChange = itemValue => setValue(itemValue);

  return (
    <View>
      <PickerSelect value={value} valueChange={valueChange} />
    </View>
  );
};

export default App;
