import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import DataFlight from '../components/DataFlight';
import GoBackScreen from '../components/GoBackScreen';
import LocationItem from '../components/LocationItem';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from '../styles/styleDestinationCountry';

const DestinationCountry = ({navigation}) => {
  const [country, setCountry] = useState('');
  const [disabled, setDisabled] = useState(false);

  const changeCountry = text => {
    const isDisabled = text.length > 0 ? true : false;
    setCountry(text);
    setDisabled(isDisabled);
  };

  const goBackScreen = () => navigation.goBack();

  const changeView = () => {
    //Guardar 'country' en store para seguir con la siguiente vista.
    console.log(country);
    navigation.navigate('SelectDate');
  };

  return (
    <ScrollView style={styles.backColor}>
      <KeyboardAvoidingView
        behavior={'height'}
        keyboardVerticalOffset={20}
        enabled={false}>
        <GoBackScreen onPress={goBackScreen} />
        <DataFlight
          origin={'Guadalajara, México'}
          styleViewTop={styles.styleViewTop}
        />
        <LocationItem
          styleView={styles.location}
          onChangeText={changeCountry}
          textQuestion="Where will you be flying to?"
          isDisable={!disabled}
        />
        <PrimaryButton
          pressFunction={changeView}
          textButton="Next"
          isDisable={!disabled}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default DestinationCountry;
