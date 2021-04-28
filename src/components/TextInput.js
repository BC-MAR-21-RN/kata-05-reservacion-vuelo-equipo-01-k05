import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';

import {theme, icons} from '../constants';
import styleTextInput from '../styles/styleTextInput';
const {COLORS, FONTS, SIZES} = theme;

const TextInput = ({title, password, error, note,...rest}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(password);
  return (
    <>
      <View style={styleTextInput.viewTitle}>
        <Text style={styleTextInput.textTitle}>{title}</Text>
        {error && <Text style={styleTextInput.textError}>{error}</Text>}
      </View>
      <View
        style={[
          styleTextInput.BoxContainer,
          {
            borderColor: isFocused ? COLORS.primary : COLORS.darkgray,
          },
        ]}>
        <RNTextInput
          secureTextEntry={isPassVisible}
          onFocus={() => setIsFocused(!isFocused)}
          style={styleTextInput.RNTextInputStyle}
          {...rest}
        />
        {password ? (
          <TouchableOpacity onPress={() => setIsPassVisible(!isPassVisible)}>
            <Image
              source={icons.eye}
              style={[
                styleTextInput.icon,
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
      <Text style={styleTextInput.textNote}>{note}</Text>
    </>
  );
};

export default TextInput;
