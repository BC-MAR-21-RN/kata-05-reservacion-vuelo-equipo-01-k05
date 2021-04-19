import React, {useState} from 'react';
import {Text, View} from 'react-native';
import DatePicker from './src/components/DatePicker';

const App = () => {
  const [date, setDate] = useState(null);

  const onDateChange = value => setDate(value);

  return (
    <View>
      <DatePicker onDateChange={onDateChange} />
      <Text>{date ? date.toString() : ''}</Text>
    </View>
  );
};

export default App;
