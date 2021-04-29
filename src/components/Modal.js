import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import {styles} from '../styles/styleModal';

const ModalItem = ({text, icon}) => {
  return (
    <Modal animationType="slide" transparent visible>
      <View style={styles.container}>
        <View style={styles.containerView}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalItem;
