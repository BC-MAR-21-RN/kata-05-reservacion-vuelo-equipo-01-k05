import React, {useState} from 'react';
import {View} from 'react-native';
import DataFlight from '../components/DataFlight';
import DatePicker from '../components/DatePicker';
import GoBackScreen from '../components/GoBackScreen';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from '../styles/styleSelectDate';

const SelectDate = ({navigation}) => {
  const [date, setDate] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const goBackScreen = () => navigation.goBack();

  const changeDate = newDate => {
    setDate(newDate);
    const isDisabled = newDate.length > 0 ? false : true;
    setDisabled(isDisabled);
  };

  const changeView = () => {
    //Guardar 'country' en store para seguir con la siguiente vista.
    console.log(date);
    navigation.navigate('Passengers');
  };

  return (
    <View style={styles.container}>
      <GoBackScreen onPress={goBackScreen} />
      <View style={styles.viewContainer}>
        <DataFlight
          origin={'Guadalajara, México'}
          destination={'Londres, Inglaterra'}
        />
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
