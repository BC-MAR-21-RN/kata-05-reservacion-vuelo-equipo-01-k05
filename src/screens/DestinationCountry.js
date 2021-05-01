import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import DataFlight from '../components/DataFlight';
import GoBackScreen from '../components/GoBackScreen';
import SendLocation from '../components/SendLocation';
import {styles} from '../styles/styleDestinationCountry';

const DestinationCountry = ({route, navigation}) => {
  const [country, setCountry] = useState('');
  const {origin} = route.params;
  return (
    <ScrollView style={styles.backColor}>
      <KeyboardAvoidingView
        behavior={'height'}
        keyboardVerticalOffset={20}
        enabled={false}>
        <GoBackScreen navigation={navigation} />
        <DataFlight origin={origin} styleViewTop={styles.styleViewTop} />
        <SendLocation
          countryState={{
            country: country,
            setCountry: setCountry,
          }}
          navigation={navigation}
          path="SelectDate"
          params={{
            origin: origin,
            destination: country,
          }}
          question="Where will you be flying to?"
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default DestinationCountry;
