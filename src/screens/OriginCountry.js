import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import GoBackScreen from '../components/GoBackScreen';
import LocationItem from '../components/LocationItem';
import PrimaryButton from '../components/PrimaryButton';
import { styles } from '../styles/styleOriginCountry';

const OriginCountry = ({navigation}) => {
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
    navigation.navigate('To');
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.keyboardStyle}>
      <GoBackScreen onPress={goBackScreen} />
      <LocationItem
        onChangeText={changeCountry}
        textQuestion="Where are you now?"
        isDisable={!disabled}
      />
      <PrimaryButton
        pressFunction={changeView}
        textButton="Next"
        isDisable={!disabled}
      />
    </KeyboardAvoidingView>
  );
};

export default OriginCountry;
