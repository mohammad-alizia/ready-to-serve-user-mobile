import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react';
import ReadyToServeLogo from '../../assets/svg/splash/readyToServeLogo.svg'
import RouteNames from '../../navigation/routeNames';
import { useDispatch, useSelector } from 'react-redux';
import { slicesName } from '../../redux/reducers/slicesNames';
import { setFirstAccess } from '../../redux/reducers/app-behaviour/app-behaviour';

const SplashScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const { first_access } = useSelector(state => state[slicesName.APP_BEHAVIOUR]);

    console.log({ first_access })

    const splashTimeout = () => {
        setTimeout(() => {
            if(first_access){
                dispatch(setFirstAccess())
                navigation.replace(RouteNames.ONBOARDING_SCREEN)
            }
            else{
                navigation.replace(RouteNames.WELCOME_SCREEN)
            }
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