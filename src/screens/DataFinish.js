import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';
import DataFlight from '../components/DataFlight';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from '../styles/styleDataFinish';

const DataFinish = ({route, navigation}) => {
  const {origin, destination, date, passengers} = route.params;

  const changeView = () => {
    firestore()
      .collection('vuelos')
      .doc(auth().currentUser.uid)
      .get()
      .then(response => {
        if (response.exists) {
          var data = response.data();

          data.flights.push({
            origin: origin,
            destination: destination,
            date: date,
            passengers: passengers,
          });

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
          origin={origin}
          destination={destination}
          date={date}
          passengers={passengers}
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
