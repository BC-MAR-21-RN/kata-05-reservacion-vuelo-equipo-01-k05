import {StyleSheet} from 'react-native';

import {theme} from '../constants';
const {FONTS, COLORS, SIZES} = theme;

const stylesTextInput = StyleSheet.create({
  BoxContainer: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 5,

    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTitle: {
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

export default stylesTextInput;
