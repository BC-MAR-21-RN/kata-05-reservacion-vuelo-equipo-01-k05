import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import AddFlightButton from '../components/AddFlightButton';
import DataFlight from '../components/DataFlight';
import {styles} from '../styles/styleHome';

const Home = ({navigation}) => {
  const [vuelos, setVuelos] = useState([]);
  const idUser = auth().currentUser.uid;

  useEffect(() => {
    const subscriber = firestore()
      .collection('vuelos')
      .doc(idUser)
      .onSnapshot(querySnapshot => {
        const flights = [];

        querySnapshot._data.flights.forEach(documentSnapshot => {
          flights.push({
            ...documentSnapshot,
            key: documentSnapshot.id,
          });
        });

        setVuelos(flights);
      });

    return () => subscriber();
  }, [idUser]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <DataFlight
        origin={item.origin}
        destination={item.destination}
        date={item.date}
        passengers={item.passengers}
      />
    </View>
  );

  const goBooking = () => navigation.navigate('From');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My flights</Text>
      <View style={styles.list}>
        <FlatList
          data={vuelos}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
      <AddFlightButton pressFunction={goBooking} />
    </SafeAreaView>
  );
};

export default Home;
