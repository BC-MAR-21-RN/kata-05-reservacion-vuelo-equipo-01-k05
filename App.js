import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import OriginCountry from './src/screens/OriginCountry';
import DestinationCountry from './src/screens/DestinationCountry';
import SelectDate from './src/screens/SelectDate';
import Passengers from './src/screens/Passengers';
import DataFinish from './src/screens/DataFinish';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="From"
          component={OriginCountry}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="To"
          component={DestinationCountry}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SelectDate"
          component={SelectDate}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Passengers"
          component={Passengers}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DataFinish"
          component={DataFinish}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
