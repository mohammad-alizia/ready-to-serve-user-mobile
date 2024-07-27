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
import { height, width } from '../../../utils/dimensions';
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

    const [form, setForm] = useState({
        buisness: '',
        flat: '',
        streetAdress: '',
        postCode: '',
    })

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

    const handleInput = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    }

    const handleSave = () => {
        navigation.navigate(RouteNames.SET_PREFERENCES_SCREEN, { deliveryOption: selectedOption })
    }

    return (
        <>
            <ScrollView style={{ height: height, width: width, backgroundColor: '#fff' }}>
                <View style={styles.container}>
                    <MapPlaceholder width={width} />
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
                <View style={{ width: width * 0.9, marginHorizontal: 'auto', backgroundColor: "#fff" }}>
                    <TopText
                        text={'Location address got from google'}
                        customStyles={{
                            fontSize: getFontSize('subHeading'),
                            textAlign: 'left',
                            width: "100%",
                            fontWeight: "medium",
                            marginTop: 0
                        }} />
                    <CustomInputText
                        customStyles={{ ...styles.inputText }}
                        placeholder="Buisness or building name"
                        onChangeText={(value) => handleInput('buisness', value)} value={form.buisness} />
                    <CustomInputText
                        customStyles={{ ...styles.inputText }}
                        placeholder="Flat or house number"
                        onChangeText={(value) => handleInput('flat', value)} value={form.flat} />
                    <CustomInputText
                        customStyles={{ ...styles.inputText }}
                        placeholder="Street address"
                        onChangeText={(value) => handleInput('streetAdress', value)} value={form.streetAdress} />
                    <CustomInputText
                        customStyles={{ ...styles.inputText }}
                        placeholder="Post code"
                        onChangeText={(value) => handleInput('postCode', value)} value={form.postCode} />
                    <View style={{ width: '100%', height: 2, backgroundColor: "#EEEEEE", marginVertical: 30 }}></View>
                </View>

                <View style={{ width: width * 0.9, marginHorizontal: 'auto' }}>
                    <CustomText type={'heading'}>Delivery options</CustomText>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ backgroundColor: '#fff', }}
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
                                fontWeight: 'normal',
                                fontSize: getFontSize('menuField'),
                                color: selectedOption.id === option.id ? "#fff" : "#000"
                            }}
                            onPress={() => setSelectedOption(option)}
                        />
                    ))}
                </ScrollView>
                <View style={{ width: width * 0.9, marginHorizontal: 'auto', marginTop: 10, marginBottom: 20 }}>
                    <NextButton
                        title='Save and continue'
                        isCenter={false}
                        customBtnStyles={{}}
                        onPress={handleSave}
                    />
                </View>
            </ScrollView >
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: width,
    },
    inputText: {
        marginTop: 16,
        color: '#000',
        backgroundColor: appColors.grey
    },
    discover: {
        display: "flex",
        flexDirection: 'row',
        height: 60,
        backgroundColor: appColors.backgroundColor.light
    }
});

export default AddressInfoScreen