import moment from 'moment';
import React, {useState} from 'react';
import {View} from 'react-native';
import DataFlight from '../components/DataFlight';
import DatePicker from '../components/DatePicker';
import GoBackScreen from '../components/GoBackScreen';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from '../styles/stylePickersView';

const SelectDate = ({route, navigation}) => {
  const [date, setDate] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const {origin, destination} = route.params;

  const changeDate = newDate => {
    setDate(newDate);
    const isDisabled = newDate.length > 0 ? false : true;
    setDisabled(isDisabled);
  };

  const changeView = () => {
    navigation.navigate('Passengers', {
      origin: origin,
      destination: destination,
      date: moment(date).format('LL'),
    });
  };

  return (
    <View style={styles.container}>
      <GoBackScreen navigation={navigation} />
      <View style={styles.viewContainer}>
        <DataFlight origin={origin} destination={destination} />
        <DatePicker onDateChange={changeDate} />
      </View>
      <PrimaryButton
        pressFunction={changeView}
        textButton="Next"
        isDisable={!disabled}
      />
    </View>
  );
};

export default SelectDate;
