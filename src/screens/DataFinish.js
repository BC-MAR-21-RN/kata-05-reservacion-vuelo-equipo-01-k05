import React from 'react';
import {Text, View} from 'react-native';
import DataFlight from '../components/DataFlight';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from '../styles/styleDataFinish';

const DataFinish = ({navigation}) => {
  const changeView = () => {
    //Guardar 'country' en store para seguir con la siguiente vista.
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.styleView}>
        <DataFlight
          origin={'Guadalajara, México'}
          destination={'Londres, Inglaterra'}
          date={'September 22, 2021'}
          passengers={'4'}
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
