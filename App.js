import React from 'react';
import {View} from 'react-native';
import PrimaryButton from './src/components/PrimaryButton';

const App = () => {
  return (
    <View>
      <PrimaryButton
        pressFunction={() => console.log('!Pressed')}
        textButton="Sign up"
        isDisable={true}
      />
    </View>
  );
};

export default App;
