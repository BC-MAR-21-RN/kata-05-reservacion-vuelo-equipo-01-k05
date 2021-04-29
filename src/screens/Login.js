import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Container, Header, TextInput, Button} from '../components';
import {useGoogleConfig, useLoginInputController} from '../hooks';
import {isDisabled} from '../methods';
import styles from '../styles/styleSignUp';

const Login = ({navigation}) => {
  const [
    propsEmail,
    propsPassword,
    validEmail,
    validPass,
  ] = useLoginInputController();
  const [isError] = useState(false);
  const [singInWithGoogle] = useGoogleConfig();

  return (
    <View bounces={false} style={styles.scrollView}>
      <Container isScreen>
        <Header headerLabel="Login" />
        <Container>
          <TextInput
            {...propsEmail}
            title="Email"
            error={isError && '*Email in use. Use a different email'}
          />
          <TextInput
            {...propsPassword}
            title="Password"
            error={isError && '*Incorrect email and/or password'}
            note="Use 8 or more characters with a mix of letters, numbers, and symbols."
            password
          />
        </Container>
        <Container>
          <Button
            isDisable={isDisabled(validEmail, validPass)}
            textButton="Login"
          />
        </Container>
        <Container>
          <View style={styles.orContainer}>
            <Text style={styles.orText}>or</Text>
          </View>
        </Container>
        <Container>
          <Button
            pressFunction={() => singInWithGoogle()}
            textButton="Login with Google"
          />
        </Container>
        <Container>
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>Already have an account?</Text>
            <RectButton onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.logInText}>Sign up</Text>
            </RectButton>
          </View>
        </Container>
      </Container>
    </View>
  );
};

export default Login;
