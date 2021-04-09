import React from 'react';
import {View} from 'react-native';
import Login from './src/components/Login';

const App = () => {
  return (
    <View>
      <Login
        errors={{
          mailError: false,
          passError: false,
          mailRepeat: false,
        }}
      />
    </View>
  );
};

export default App;
