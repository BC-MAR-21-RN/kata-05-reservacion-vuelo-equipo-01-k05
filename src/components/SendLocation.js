import React, {useState} from 'react';
import {View} from 'react-native';
import LocationItem from './LocationItem';
import PrimaryButton from './PrimaryButton';
import {styles} from '../styles/styleDestinationCountry';

const SendLocation = ({navigation, path, question}) => {
  const [country, setCountry] = useState('');
  const [disabled, setDisabled] = useState(false);

  const changeCountry = text => {
    const isDisabled = text.length > 0 ? true : false;
    setCountry(text);
    setDisabled(isDisabled);
  };

  const changeView = () => {
    //Guardar 'country' en store para seguir con la siguiente vista.
    console.log(country);
    navigation.navigate(path);
  };

  return (
    <View>
      <LocationItem
        styleView={styles.location}
        onChangeText={changeCountry}
        textQuestion={question}
        isDisable={!disabled}
      />
      <PrimaryButton
        pressFunction={changeView}
        textButton="Next"
        isDisable={!disabled}
      />
    </View>
  );
};

export default SendLocation;
