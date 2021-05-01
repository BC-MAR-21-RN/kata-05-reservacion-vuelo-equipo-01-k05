import React, {useState} from 'react';
import {View} from 'react-native';
import DataFlight from '../components/DataFlight';
import GoBackScreen from '../components/GoBackScreen';
import PickerSelect from '../components/PickerSelect';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from '../styles/stylePickersView';

const Passengers = ({route, navigation}) => {
  const [number, setNumber] = useState('1');
  const {origin, destination, date} = route.params;

  const changeView = () => {
    navigation.navigate('DataFinish', {
      origin: origin,
      destination: destination,
      date: date,
      passengers: number,
    });
  };

  const changeNumber = value => setNumber(value);

  return (
    <View style={styles.container}>
      <GoBackScreen navigation={navigation} />
      <View style={styles.viewContainer}>
        <DataFlight origin={origin} destination={destination} date={date} />
        <PickerSelect value={number} valueChange={changeNumber} />
      </View>
      <PrimaryButton pressFunction={changeView} textButton="Next" />
    </View>
  );
};

export default Passengers;
