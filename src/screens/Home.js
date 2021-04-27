import React from 'react';
import {StyleSheet, SafeAreaView, FlatList, Text, View} from 'react-native';
import AddFlightButton from '../components/AddFlightButton';
import DataFlight from '../components/DataFlight';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    origin: 'Guadalajara, México',
    destination: 'Londres, Inglaterra',
    date: 'September 20, 2021',
    passengers: 4,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    origin: 'Guadalajara, México',
    destination: 'Londres, Inglaterra',
    date: 'September 22, 2021',
    passengers: 4,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    origin: 'Guadalajara, México',
    destination: 'Londres, Inglaterra',
    date: 'September 20, 2021',
    passengers: 4,
  },
  {
    id: '58694a0f-3da1-471f-bd96-1asdasdsaaw',
    origin: 'Guadalajara, México',
    destination: 'Londres, Inglaterra',
    date: 'September 20, 2021',
    passengers: 4,
  },
  {
    id: '58694a0f-3da1-471f-bd96-das521d5a',
    origin: 'Guadalajara, México',
    destination: 'Londres, Inglaterra',
    date: 'September 20, 2021',
    passengers: 4,
  },
];

const Home = ({navigation}) => {
  const renderItem = ({item}) => (
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
          data={DATA}
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
