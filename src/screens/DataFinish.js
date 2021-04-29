import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';
import DataFlight from '../components/DataFlight';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from '../styles/styleDataFinish';

const DataFinish = ({navigation}) => {
  const changeView = () => {
    firestore()
        .collection('vuelos')
        .doc(auth().currentUser.uid)
        .get()
        .then(response => {
          if (response.exists) {
            var data = response.data();
            
            data.flights.push({
              origin: 'Cdmx, México',
              destination: 'Cartagena, Colombia',
              date: 'January 22, 2020',
              passengers: '4'
            })

            firestore()
              .collection('vuelos')
              .doc(auth().currentUser.uid)
              .set(data);
          }
        })
        .catch(err => console.log('ERRORR AL AGREGAR VUELOS', err));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.styleView}>
        <DataFlight
          origin={'Guadalajara, México'}
          destination={'Londres, Inglaterra'}
          date={'September 22, 2021'}
          passengers={'4'}
        />
        <View style={styles.viewText}>
          <Text style={styles.text}>Your request was received.</Text>
        </View>
      </View>
      <PrimaryButton pressFunction={changeView} textButton="Finish" />
    </View>
  );
};

export default DataFinish;
