import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';
import {Header, CheckBox, Container, TextInput, Button} from '../../components';
import {icons} from '../../constants';

const index = ({navigation}) => {
  return (
    <ScrollView bounces={false} style={styles.scrollView}>
      <Container isScreen>
        <Header label="Sign Up" />
        <Container>
          <TextInput title="First Name" />
          <TextInput
            title="Email"
            error="*Email in use. Use a different email"
          />
          <TextInput
            title="Password"
            error="*Incorrect email and/or password"
            note="Use 8 or more characters with a mix of
            letters, numbers, and symbols."
            password
          />
        </Container>
        <Container>
          <CheckBox label="I agree to the Terms and Privacy Policy." />
        </Container>
        <Container>
          <CheckBox label="Subscribe for select product updates." />
        </Container>
        <Container>
          <Button textButton="Sign Up" />
        </Container>
        <Container>
          <View style={styles.orContainer}>
            <Text style={styles.orText}>or</Text>
          </View>
        </Container>
        <Container>
          <Button textButton="Sign Up with Google" icon={icons.google} />
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
