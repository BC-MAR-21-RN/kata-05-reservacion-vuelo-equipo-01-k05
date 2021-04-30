import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import GoBackScreen from '../components/GoBackScreen';
import {styles} from '../styles/styleOriginCountry';
import SendLocation from '../components/SendLocation';

const OriginCountry = ({navigation}) => {
  const [country, setCountry] = useState('');

  return (
    <KeyboardAvoidingView behavior="height" style={styles.keyboardStyle}>
      <GoBackScreen navigation={navigation} />
      <SendLocation
        countryState={{
          country: country,
          setCountry: setCountry,
        }}
        navigation={navigation}
        path="To"
        params={{
          origin: country,
        }}
        question="Where are you now?"
      />
    </KeyboardAvoidingView>
  );
};

export default OriginCountry;
