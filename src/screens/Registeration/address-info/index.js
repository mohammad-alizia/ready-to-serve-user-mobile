import { View, Text, PermissionsAndroid, Platform, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import MapView, { Marker } from 'react-native-maps';
import CustomInputText from '../../../components/common-ui/input/CustomInputText';
import TopText from '../../../components/screen-components/register/registeration-screen-components/TopText';
import getFontSize from '../../../utils/styles/standardFonts';
import { ScrollView } from 'react-native-gesture-handler';
import { svg } from '../../../assets/svg/svgExporter';
import CustomText from '../../../components/common-ui/Text/CustomText';
import NextButton from '../../../components/button/NextButton';
import Tag from '../../../components/common-ui/tags/Tag';
import { appColors } from '../../../utils/styles/colors';
import RouteNames from '../../../navigation/routeNames';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';


const { MapPlaceholder } = svg;

const deliveryOptions = [
    {
        id: 1,
        option: 'Leave at door'
    },
    {
        id: 2,
        option: 'Meet at door'
    },
    {
        id: 3,
        option: 'Meet at parking'
    },
]

const AddressInfoScreen = ({ navigation, route }) => {


    const { location } = route.params || {};
    const [selectedOption, setSelectedOption] = useState(deliveryOptions[0]);
    const [region, setRegion] = useState({
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [marker, setMarker] = useState({
        latitude: location?.latitude,
        longitude: location?.longitude,
    });

    const handleSearch = (data, details) => {
        const { lat, lng } = details.geometry.location;
        const newRegion = {
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
        setRegion(newRegion);
        setMarker({
            latitude: lat,
            longitude: lng,
        });
    };

    const handleInput = () => {

    }

    const handleSave = () => {
        navigation.navigate(RouteNames.SET_PREFERENCES_SCREEN, { deliveryOption: selectedOption })
    }

    return (
        <>
            {/* <ScrollView> */}
            <Wrapper customStyles={{ paddingHorizontal: 0, height: "auto" }}>
                <View style={styles.container}>
                    <MapPlaceholder />
                    {/* <GooglePlacesAutocomplete
                    placeholder="Search for a place"
                    fetchDetails={true}
                    onPress={handleSearch}
                    query={{
                        key: GOOGLE_PLACES_API_KEY,
                        language: 'en',
                    }}
                    styles={{
                        container: styles.autocompleteContainer,
                        listView: styles.listView,
                    }}
                /> */}
                    {/* <MapView
                    style={styles.map}
                    region={region}
                >
                    <Marker
                        coordinate={marker}
                        title="Selected Location"
                    />
                </MapView> */}
                </View>
            </Wrapper>
            <Wrapper customStyles={{ height: "auto" }}>
                <View>
                    <TopText text={'Location address got from google'} customStyles={{ fontSize: getFontSize('subHeading'), textAlign: 'left', width: "100%", fontWeight: "bold" }} />
                    <CustomInputText customStyles={{ ...styles.inputText }} placeholder="Buisness or building name" onChangeText={handleInput} value={""} />
                    <CustomInputText customStyles={{ ...styles.inputText }} placeholder="Flat or house number" onChangeText={handleInput} value={""} />
                    <CustomInputText customStyles={{ ...styles.inputText }} placeholder="Street address" onChangeText={handleInput} value={""} />
                    <CustomInputText customStyles={{ ...styles.inputText }} placeholder="Post code" onChangeText={handleInput} value={""} />
                </View>
                <View style={{ width: '100%', height: 2, backgroundColor: "#EEEEEE", marginVertical: 30 }}></View>
            </Wrapper>
            <Wrapper customStyles={{ height: "auto" }}>
                <CustomText type={'heading'}>Delivery options</CustomText>
            </Wrapper>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ backgroundColor: '#fff', height: 20 }}
                contentContainerStyle={{
                    ...styles.discover,
                    justifyContent: "center",
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}
            >
                {deliveryOptions.map((option, key) => (
                    <Tag
                        key={option.id}
                        tagTitle={option.option}
                        customBtnStyles={{
                            marginRight: 10,
                            backgroundColor: selectedOption.id === option.id ? "#000" : appColors.grey
                        }}
                        customTextStyles={{
                            fontWeight: 'bold',
                            fontSize: getFontSize('menuField'),
                            color: selectedOption.id === option.id ? "#fff" : "#000"
                        }}
                        onPress={() => setSelectedOption(option)}
                    />
                ))}
            </ScrollView>
            <Wrapper customStyles={{
                flex: 1,
                backgroundColor: appColors.backgroundColor.light,
            }}>
                <NextButton
                    title='Save and continue'
                    isCenter={false}
                    customBtnStyles={{}}
                    onPress={handleSave}
                />
            </Wrapper>
            {/* </ScrollView > */}
        </>
    )
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1/2,
    // },
    // autocompleteContainer: {
    //     position: 'absolute',
    //     top: 10,
    //     left: 10,
    //     right: 10,
    //     zIndex: 1,
    // },
    // listView: {
    //     backgroundColor: 'white',
    // },
    // map: {
    //     ...StyleSheet.absoluteFillObject,
    // },
    inputText: {
        marginTop: 16,

    },
    discover: {
        display: "flex",
        flexDirection: 'row',
        height: 60,
        // marginTop: 16,
        backgroundColor: appColors.backgroundColor.light
        // backgroundColor: 'red'
    }
});

export default AddressInfoScreen