import React, {useState} from 'react';
import {View} from 'react-native';
import DataFlight from '../components/DataFlight';
import GoBackScreen from '../components/GoBackScreen';
import PickerSelect from '../components/PickerSelect';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from '../styles/stylePickersView';

const Passengers = ({navigation}) => {
  const [number, setNumber] = useState('1');

  const changeView = () => {
    //Guardar 'country' en store para seguir con la siguiente vista.
    navigation.navigate('DataFinish');
  };

  const changeNumber = value => setNumber(value);

  return (
    <View style={styles.container}>
      <GoBackScreen navigation={navigation} />
      <View style={styles.viewContainer}>
        <DataFlight
          origin={'Guadalajara, México'}
          destination={'Londres, Inglaterra'}
          date={'September 22, 2020'}
        />
        <PickerSelect value={number} valueChange={changeNumber} />
      </View>
      <PrimaryButton pressFunction={changeView} textButton="Next" />
    </View>
  );
};

export default Passengers;
