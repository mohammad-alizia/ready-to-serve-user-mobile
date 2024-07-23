import { View, Text, PermissionsAndroid, Platform, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import TopText from '../../../components/screen-components/register/registeration-screen-components/TopText'
import NextButton from '../../../components/button/NextButton'
import RouteNames from '../../../navigation/routeNames'
import { svg } from '../../../assets/svg/svgExporter'
import { appColors } from '../../../utils/styles/colors'
import { icons } from '../../../assets/icons/iconsExporter'
import Geolocation from '@react-native-community/geolocation'
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions'

const { arrowNext: ArrowNext, ArrowNextDisabled, ArrowBlack } = icons;

const { EnableLocation } = svg

const EnableYourLocationScreen = ({ navigation }) => {


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            const permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
            const result = await request(permission);
            handlePermissionResult(result);
        } else if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            handlePermissionResult(result);
        }
    };

    const handlePermissionResult = (result) => {
        if (result === RESULTS.GRANTED || result === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
        } else {
            setErrorMsg('Location permission denied');
        }
    };

    const getLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            (error) => {
                setErrorMsg(error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    const openLocationSettings = () => {
        if (Platform.OS === 'ios') {
            Linking.openURL('app-settings:');
        } else {
            Linking.openSettings();
        }
    };

    useEffect(() => {
        requestLocationPermission()
    }, []);


    const handlePress = () => {
        navigation.navigate(RouteNames.ADDRESS_INFO_SCREEN, { location })
    }

    return (
        <Wrapper>
            <TopText text={`This will make it easier to find your closest restaurants, homemade kitchens and grocery stores.`} />

            {location ? (
                <Text>Latitude: {location.latitude}, Longitude: {location.longitude}</Text>
            ) : (
                <Text>{errorMsg || 'Requesting location permission...'}</Text>
            )}

            <View style={{ flex: 1 }}>
                <View style={{ height: 150, width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <EnableLocation />
                </View>
                <NextButton
                    // disabled={location ? true : false}
                    customBtnStyles={{ marginTop: 30, backgroundColor: appColors.grey }}
                    customTextStyles={{ color: '#000' }}
                    customIcon={<ArrowBlack />}
                    title='Manage Location Settings'
                    icon={true}
                    isCenter={false}
                    onPress={openLocationSettings} />
            </View>
            <View style={{ flex: 1 / 5 }}>
                <NextButton title='Next' icon={true} onPress={handlePress} />
            </View>
        </Wrapper>
    )
}

export default EnableYourLocationScreen