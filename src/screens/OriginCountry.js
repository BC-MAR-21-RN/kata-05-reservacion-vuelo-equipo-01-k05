import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import GoBackScreen from '../components/GoBackScreen';
import {styles} from '../styles/styleOriginCountry';
import SendLocation from '../components/SendLocation';

const OriginCountry = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.keyboardStyle}>
      <GoBackScreen navigation={navigation} />
      <SendLocation
        navigation={navigation}
        path="To"
        question="Where are you now?"
      />
    </KeyboardAvoidingView>
  );
};

export default OriginCountry;
