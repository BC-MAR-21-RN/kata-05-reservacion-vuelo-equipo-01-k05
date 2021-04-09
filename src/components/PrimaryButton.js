import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { theme } from '../constants';

const { COLORS } = theme;

class PrimaryButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {pressFunction, textButton, isDisable, icon} = this.props;

    const styleDisabled = isDisable
      ? styles.buttonDisabled
      : styles.buttonActive;

    return (
      <TouchableHighlight
        activeOpacity={0.6}
        style={{...styles.button, ...styleDisabled}}
        disabled={isDisable}
        underlayColor="#4050B8"
        onPress={pressFunction}>
        <View style={styles.viewText}>
          {icon ? icon : null}
          <Text style={styles.textButton}>{textButton}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  buttonActive: {
    backgroundColor: '#576EFA',
    shadowColor: '#576EFA',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonDisabled: {
    backgroundColor: COLORS.mutedGray,
  },
  viewText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
