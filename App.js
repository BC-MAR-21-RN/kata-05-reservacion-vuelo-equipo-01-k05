import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  DataFinish,
  DestinationCountry,
  OriginCountry,
  Passengers,
  SelectDate,
  SignUp,
  Login,
} from './src/screens';
const Stack = createStackNavigator();

const App = () => {
  const screenInfo = [
    {
      name: 'SignUp',
      component: SignUp,
    },
    {
      name: 'Login',
      component: Login,
    },
    {
      name: 'Home',
      component: Home,
    },
    {
      name: 'From',
      component: OriginCountry,
    },
    {
      name: 'To',
      component: DestinationCountry,
    },
    {
      name: 'SelectDate',
      component: SelectDate,
    },
    {
      name: 'Passengers',
      component: Passengers,
    },
    {
      name: 'DataFinish',
      component: DataFinish,
    },
  ];

  const options = {headerShown: false};

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        {screenInfo.map(info => (
          <Stack.Screen
            key={info.name}
            options={options}
            name={info.name}
            component={info.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
