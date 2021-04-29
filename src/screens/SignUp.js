import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from '../styles/styleSignUp';
import {
  Header,
  CheckBox,
  Container,
  TextInput,
  Button,
} from '../../src/components';
import {isDisabled} from '../../src/methods';
import {useGoogleConfig, useLoginInputController} from '../../src/hooks';

const SignUp = ({navigation}) => {
  const [
    propsName,
    propsEmail,
    propsPassword,
    validEmail,
    validPass,
    validName,
  ] = useLoginInputController();
  const [singInWithGoogle] = useGoogleConfig();
  const [isError] = useState(false);
  const [checkboxAgree, setCheckboxAgree] = useState(false);
  const [checkboxSubscribe, setCheckboxSubscribe] = useState(false);

  return (
    <ScrollView bounces={false} style={styles.scrollView}>
      <Container isScreen>
        <Header headerLabel="Sign Up" />
        <Container>
          <TextInput {...propsName} title="First Name" />
          <TextInput
            {...propsEmail}
            title="Email"
            error={isError && '*Email in use. Use a different email'}
          />
          <TextInput
            {...propsPassword}
            title="Password"
            error={isError && '*Incorrect email and/or password'}
            note="Use 8 or more characters with a mix of
            letters, numbers, and symbols."
            password
          />
        </Container>
        <Container>
          <CheckBox
            state={checkboxAgree}
            setState={setCheckboxAgree}
            checkBoxlabel="I agree to the Terms and Privacy Policy."
          />
        </Container>
        <Container>
          <CheckBox
            state={checkboxSubscribe}
            setState={setCheckboxSubscribe}
            checkBoxlabel="Subscribe for select product updates."
          />
        </Container>
        <Container>
          <Button
            isDisable={isDisabled(
              validEmail,
              validPass,
              validName,
              checkboxAgree,
            )}
            textButton="Sign Up"
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
            textButton="Sign Up with Google"
          />
        </Container>
        <Container>
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>Already have an account?</Text>
            <RectButton onPress={() => navigation.navigate('Login')}>
              <Text style={styles.logInText}>Log In</Text>
            </RectButton>
          </View>
        </Container>
      </Container>
    </ScrollView>
  );
};

export default SignUp;
