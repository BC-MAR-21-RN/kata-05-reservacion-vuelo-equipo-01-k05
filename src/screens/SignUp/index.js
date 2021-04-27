import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';
import {
  Header,
  CheckBox,
  Container,
  TextInput,
  Button,
} from '../../components/index';
import {useGoogleConfig, useLoginInputController} from '../../hooks';

const index = ({navigation}) => {
  const [
    porpsName,
    propsEmail,
    propsPassword,
    validEmail,
  ] = useLoginInputController();
  const[singInWithGoogle]= useGoogleConfig();
  
  return (
    <ScrollView bounces={false} style={styles.scrollView}>
      <Container isScreen>
        <Header headerLabel="Sign Up" />
        <Container>
          <TextInput {...porpsName} title="First Name" />
          <TextInput
            {...propsEmail}
            title="Email"
            error="*Email in use. Use a different email"
          />
          <TextInput
            {...propsPassword}
            title="Password"
            error="*Incorrect email and/or password"
            note="Use 8 or more characters with a mix of
            letters, numbers, and symbols."
            password
          />
        </Container>
        <Container>
          <CheckBox checkBoxlabel="I agree to the Terms and Privacy Policy." />
        </Container>
        <Container>
          <CheckBox checkBoxlabel="Subscribe for select product updates." />
        </Container>
        <Container>
          <Button isDisable={!validEmail} textButton="Sign Up" />
        </Container>
        <Container>
          <View style={styles.orContainer}>
            <Text style={styles.orText}>or</Text>
          </View>
        </Container>
        <Container>
          <Button pressFunction={()=>singInWithGoogle()}  textButton="Sign Up with Google" />
        </Container>
        <Container>
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>Already have an account?</Text>
            <RectButton onPress={() => navigation.navigate('LogIn')}>
              <Text style={styles.logInText}>Log In</Text>
            </RectButton>
          </View>
        </Container>
      </Container>
    </ScrollView>
  );
};

export default index;
