import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import DataFlight from '../components/DataFlight';
import GoBackScreen from '../components/GoBackScreen';
import SendLocation from '../components/SendLocation';
import {styles} from '../styles/styleDestinationCountry';

const DestinationCountry = ({navigation}) => {
  return (
    <ScrollView style={styles.backColor}>
      <KeyboardAvoidingView
        behavior={'height'}
        keyboardVerticalOffset={20}
        enabled={false}>
        <GoBackScreen navigation={navigation} />
        <DataFlight
          origin={'Guadalajara, México'}
          styleViewTop={styles.styleViewTop}
        />
        <SendLocation
          navigation={navigation}
          path="SelectDate"
          question="Where will you be flying to?"
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default DestinationCountry;
