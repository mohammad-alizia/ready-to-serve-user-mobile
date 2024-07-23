import { View, Text, PermissionsAndroid, Platform, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import MapView, { Marker } from 'react-native-maps';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';

const AddressInfoScreen = ({ navigation, route }) => {


    const { location } = route.params;
    console.log("route", location)
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

    return (
        <Wrapper>
            <View style={styles.container}>
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
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    autocompleteContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        zIndex: 1,
    },
    listView: {
        backgroundColor: 'white',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default AddressInfoScreen