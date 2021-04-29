import {StyleSheet} from 'react-native';

import {theme} from '../../src/constants';
const {FONTS, COLORS} = theme;

const styles = StyleSheet.create({
  orContainer: {
    alignSelf: 'center',
  },
  orText: {
    ...FONTS.body2,
    color: COLORS.darkgray,
  },
  accountContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  accountText: {
    ...FONTS.body2,
    color: COLORS.darkgray,
  },
  logInText: {
    marginHorizontal: 5,
    ...FONTS.body2,
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  scrollView: {
    flex: 1,
  },
});

export default styles;