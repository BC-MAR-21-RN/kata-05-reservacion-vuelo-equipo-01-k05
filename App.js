import React from 'react';
import {View} from 'react-native';
import DataFlight from './src/components/DataFlight';

const App = () => {
  return (
    <View>
      <DataFlight
        orig={'Washington D.C., USA'}
        dest={'Rome, Italy'}
        date={'September 23, 2020'}
        passengers={3}
      />
    </View>
  );
};

export default App;