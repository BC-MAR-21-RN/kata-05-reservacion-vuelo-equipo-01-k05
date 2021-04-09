import React from 'react';
import { View, StyleSheet } from 'react-native';

const ScreenContainer = ({ children }) => {
    return (
        <View style={styles.ScreenContainer}>
            { children }
        </View>
    )
}

export default ScreenContainer

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "white"
    }
})