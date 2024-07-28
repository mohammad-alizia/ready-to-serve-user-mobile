import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react';
import { icons } from '../../../../../assets/icons/iconsExporter';
import CustomInputText from '../../../../common-ui/input/CustomInputText';
import { appColors } from '../../../../../utils/styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomText from '../../../../common-ui/Text/CustomText';
import { width } from '../../../../../utils/dimensions';

const { Search, Microphone, Camera } = icons;


const Suggestion = ({
    onPress = () => { },
    value = "suggestion"
}) => {
    console.log("Suggestion-value", value)
    return (
        <TouchableOpacity onPress={onPress} style={{
            backgroundColor: appColors.grey,
            width: width * 0.95,
            height: 30,
            paddingHorizontal: 10,
            paddingVertical: 5,
            justifyContent: 'center'
        }}>
            <CustomText style={{ color: appColors.darkGrey }}>{value}</CustomText>
        </TouchableOpacity>
    )
}

const SearchInput = ({
    suggestions = [],
    navigation = {},
    customContainerStyles,
    onChangeText = () => { },
    onCameraPress = () => { },
    onMicPress = () => { }
}) => {

    console.log("SearchInput", suggestions)

    React.useEffect(()=>{

    },[suggestions])

    return (
        <View style={{ ...styles.container, ...customContainerStyles }}>
            <View style={{ flex: 1 / 5, justifyContent: 'space-betweenß', alignItems: "center" }}>
                <Search />
            </View>
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ ...styles.input }}
                    placeholder='What are you looking for?'
                    placeholderTextColor={appColors.placeholderTextColor}
                    onChangeText={onChangeText}
                    onSubmitEditing={() => console.log('i got submitted')}
                />
            </View>
            <View style={{ flex: 1 / 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", paddingRight: 15 }}>
                <TouchableOpacity onPress={onCameraPress}>
                    <Camera />
                </TouchableOpacity>
                <TouchableOpacity onPress={onMicPress}>
                    <Microphone />
                </TouchableOpacity>
            </View>
            <View style={{ ...styles.suggestion }}>
                {suggestions.map(el => (
                    <Suggestion value={el.search} onPress={() => console.log(el)} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        borderRadius: 100,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
        backgroundColor: appColors.grey,
        // overflow: 'hidden',
        // position: 'relative'
    },
    input: {
        color: appColors.mattBlack

    },
    suggestion: {
        position: 'absolute',
        top: 40,
    }
})

export default SearchInput