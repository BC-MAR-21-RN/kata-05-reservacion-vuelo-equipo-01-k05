import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../screens/SignUp';
import LogIn from '../screens/LogIn';

const Stack = createStackNavigator();

function MainStackNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="LogIn" 
                    component={LogIn}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;