import React, {useState} from 'react';
import {View} from 'react-native';
import LocationItem from './LocationItem';
import PrimaryButton from './PrimaryButton';
import {styles} from '../styles/styleDestinationCountry';

const SendLocation = ({navigation, countryState, path, params, question}) => {
  const [disabled, setDisabled] = useState(false);

  const changeCountry = text => {
    const isDisabled = text.length > 0 ? true : false;
    countryState.setCountry(text);
    setDisabled(isDisabled);
  };

  const changeView = () => {
    navigation.navigate(path, params);
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
