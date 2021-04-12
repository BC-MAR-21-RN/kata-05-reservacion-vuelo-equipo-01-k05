import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '../../constants';
const { FONTS, COLORS } = theme;

import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import Container from '../../components/Container';
import TextInput from '../../components/TextInput';
import CheckBox from '../../components/CheckBox';
import PrimaryButton from '../../components/PrimaryButton';

const index = ({ navigation }) => {
    return (
        <ScrollView>
        <ScreenContainer>
            <Header label="Sign Up"/>
            <Container>
                <TextInput 
                    title="First Name"
                />
                <TextInput 
                    title="Email"
                    error="*Email in use. Use a different email"
                />
                <TextInput 
                    title="Password"
                    error="*Incorrect email and/or password"
                    note="Use 8 or more characters with a mix of letters, numbers, and symbols."
                    password
                />
            </Container>
            <Container>
                <CheckBox label="I agree to the Terms and Privacy Policy."/>
            </Container>
            <Container>
                <CheckBox label="Subscribe for select product updates."/>
            </Container>
            <Container>
                <PrimaryButton
                    textButton="Sign Up"
                />
            </Container>
            <Container>
                <View style={styles.orContainer}>
                    <Text style={styles.orText}>or</Text>
                </View>
            </Container>
            <Container>
                <PrimaryButton
                    textButton="Sign Up with Google"
                />
            </Container>
            <Container>
                <View style={styles.accountContainer}>
                    <Text style={styles.accountText}>Already have an account?</Text>
                    <RectButton onPress={() => navigation.navigate("LogIn")}>
                        <Text style={styles.logInText}>Log In</Text>
                    </RectButton>
                </View>
            </Container>
        </ScreenContainer>
        </ScrollView>
    )
}

export default index;

const styles = StyleSheet.create({
    orContainer: {
        alignSelf: "center",
    },
    orText: {
        ...FONTS.body2, 
        color: COLORS.darkgray 
    },
    accountContainer: {
        alignSelf: "center",
        flexDirection: "row"
    },
    accountText: {
        ...FONTS.body2, 
        color: COLORS.darkgray 
    },
    logInText: {
        marginHorizontal: 5,
        ...FONTS.body2,
        color: COLORS.primary,
        textDecorationLine: "underline",
    }
})
