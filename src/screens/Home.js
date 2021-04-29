import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View } from 'react-native';
import AddFlightButton from '../components/AddFlightButton';
import DataFlight from '../components/DataFlight';

const Home = ({ navigation }) => {
  const [vuelos, setVuelos] = useState([])

  useEffect(() => {
    const subscriber = firestore()
      .collection('vuelos')
      .doc(auth().currentUser.uid)
      .onSnapshot(querySnapshot => {
        const flights = [];

        querySnapshot._data.flights.forEach(documentSnapshot => {
          flights.push({
            ...documentSnapshot,
            key: documentSnapshot.id,
          });
        });
  
        setVuelos(flights);
      })

    return () => subscriber();
  }, [auth().currentUser.uid])

  const renderItem = ({ item }) => (
    <DataFlight
      origin={item.origin}
      destination={item.destination}
      date={item.date}
      passengers={item.passengers}
    />
  );

  const goBooking = () => navigation.navigate('From');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My flights</Text>
      <View style={styles.list}>
        <FlatList
          data={vuelos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <AddFlightButton pressFunction={goBooking} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5C36FA',
    padding: 20,
  },
  list: {
    flex: 1,
    paddingHorizontal: 30,
  },
});

export default Home;
