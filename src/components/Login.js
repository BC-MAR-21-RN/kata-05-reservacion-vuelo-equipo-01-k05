import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const Login = ({errors}) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [styleMailInput, setStyleMailInput] = useState(styles.input);
  const [stylePassInput, setStylePassInput] = useState(styles.viewPassInput);
  const [seePass, setSeePass] = useState(false);
  const [canSee, setCanSee] = useState(true);

  const errorLabel = text => <Text style={styles.textError}>{text}</Text>;

  const onChangeMail = text => setMail(text);

  const onChangePass = text => {
    setPass(text);
    let disable = true;

    if (text.length > 0) {
      disable = false;
    } else {
      disable = true;
    }

    setCanSee(disable);
  };

  const endTextInput = target => {
    const text =
      target.currentTarget._internalFiberInstanceHandleDEV.memoizedProps.value;
    let colorMail;
    let colorPass;

    if (
      target.currentTarget._internalFiberInstanceHandleDEV.memoizedProps
        .autoCompleteType === 'email'
    ) {
      colorMail = text.includes('@') ? styles.inputCorrect : styles.inputError;
    } else {
      colorPass =
        text.length >= 8 ? styles.viewPassCorrect : styles.viewPassError;
    }

    setStyleMailInput(colorMail === undefined ? styleMailInput : colorMail);
    setStylePassInput(colorPass === undefined ? stylePassInput : colorPass);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelsContainer}>
        <Text style={styles.text}>Email</Text>
        {errors.mailRepeat
          ? errorLabel('*Email in use. Use a different email.')
          : null}
      </View>
      <TextInput
        autoCompleteType="email"
        onChangeText={onChangeMail}
        onEndEditing={endTextInput}
        style={styleMailInput}
        value={mail}
      />
      <View style={styles.labelsContainer}>
        <Text style={styles.text}>Password</Text>
        {errors.mailError || errors.passError
          ? errorLabel('*Incorrect email and/or password.')
          : null}
      </View>
      <View style={stylePassInput}>
        <TextInput
          autoCompleteType="password"
          secureTextEntry={!seePass}
          onChangeText={onChangePass}
          onEndEditing={endTextInput}
          style={styles.inputPass}
          value={pass}
        />
        <TouchableWithoutFeedback
          disabled={canSee}
          onPress={() => setSeePass(!seePass)}>
          <Image
            style={canSee ? styles.iconOff : styles.iconOn}
            source={
              seePass
                ? require('../assets/icons/eye-off.png')
                : require('../assets/icons/eye.png')
            }
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  labelsContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  textError: {
    fontSize: 16,
    marginLeft: 4,
    color: 'red',
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  inputError: {
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    borderColor: 'red',
  },
  inputCorrect: {
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    borderColor: 'blue',
  },
  viewPassInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  viewPassCorrect: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
  viewPassError: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  inputPass: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    width: '100%',
  },
  iconOn: {
    position: 'absolute',
    right: 10,
    width: 20,
    height: 18,
    tintColor: 'blue',
  },
  iconOff: {
    position: 'absolute',
    right: 10,
    width: 20,
    height: 18,
    tintColor: 'darkgray',
  },
});

export default Login;
