import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react';
import ReadyToServeLogo from '../../assets/svg/splash/readyToServeLogo.svg'
import RouteNames from '../../navigation/routeNames';

const SplashScreen = ({ navigation }) => {

    const splashTimeout = () => {
        setTimeout(() => {
            navigation.replace(RouteNames.ONBOARDING_SCREEN)
        }, 1000)
    }

    useEffect(() => {
        splashTimeout();
    }, [])

    return (
        <>
            <StatusBar backgroundColor={"#000"} />
            <View style={styles.background}>
                <ReadyToServeLogo />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#000",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SplashScreen