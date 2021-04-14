import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {icons, theme} from '../constants';

const {FONTS, COLORS} = theme;
const BOX_SIZE = 11;

const CheckBox = ({checkBoxlabel}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.checkBoxContainer}>
      <RectButton
        style={[
          styles.box,
          {
            backgroundColor: isChecked ? COLORS.primary : COLORS.white,
            borderColor: isChecked ? COLORS.primary : COLORS.black,
          },
        ]}
        onPress={() => setIsChecked(!isChecked)}>
        {isChecked ? (
          <Image
            source={icons.check}
            style={styles.icon}
            resizeMode="contain"
          />
        ) : (
          <View />
        )}
      </RectButton>
      <View style={styles.checkBoxLabelContainer}>
        <Text style={styles.checkBoxLabel}>{checkBoxlabel}</Text>
      </View>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  icon: {
    width: BOX_SIZE,
    height: BOX_SIZE,
  },
  box: {
    borderWidth: 1,
    width: BOX_SIZE * 2,
    alignItems: 'center',
    height: BOX_SIZE * 2,
    justifyContent: 'center',
    borderColor: COLORS.black,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxLabel: {
    ...FONTS.body3,
    color: COLORS.darkgray,
  },
  checkBoxLabelContainer: {
    marginHorizontal: 10,
  },
});
