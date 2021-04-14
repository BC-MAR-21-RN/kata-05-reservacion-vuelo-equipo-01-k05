import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';

import {theme, icons} from '../constants';
const {COLORS, FONTS, SIZES} = theme;

const TextInput = ({title, password, error, note}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(password);
  return (
    <>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textError}>{error}</Text>
      </View>
      <View
        style={[
          styles.BoxContainer,
          {
            borderColor: isFocused ? COLORS.primary : COLORS.darkgray,
          },
        ]}>
        <RNTextInput
          secureTextEntry={isPassVisible}
          onFocus={() => setIsFocused(!isFocused)}
          style={styles.RNTextInputStyle}
        />
        {password ? (
          <TouchableOpacity onPress={() => setIsPassVisible(!isPassVisible)}>
            <Image
              source={icons.eye}
              style={[
                styles.icon,
                {
                  tintColor: isFocused ? COLORS.primary : COLORS.darkgray,
                },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <Text style={styles.textNote}>{note}</Text>
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  BoxContainer: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'space-between',
    padding: SIZES.padding,
    marginBottom: 8,
    flexDirection: 'row',
  },
  viewTitle: {
    marginVertical: SIZES.padding,
    flexDirection: 'row',
  },
  textError: {
    color: COLORS.warning,
    ...FONTS.body3,
    marginHorizontal: 5,
  },
  textTitle: {
    color: COLORS.darkgray,
    ...FONTS.body3,
  },
  RNTextInputStyle: {
    ...FONTS.body3,
    width: '90%',
    fontWeight: '600',
  },
  textNote: {
    ...FONTS.body5,
    color: COLORS.darkgray,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
