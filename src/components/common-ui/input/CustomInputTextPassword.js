import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from 'react-native-elements'
import { appColors } from '../../../utils/styles/colors'
import { icons } from '../../../assets/icons/iconsExporter'
import { TouchableOpacity } from 'react-native-gesture-handler'

const { Show, Hide } = icons

const CustomInputTextPassword = ({
    customStyles,
    inputStyles,
    ...props
}) => {

    const [focus, setFocus] = useState(false);
    const [isShow, setShow] = useState(false);

    useEffect(() => {
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setFocus(false);
        });

        return () => {
            keyboardDidHideListener.remove();
        };
    }, []);


    return (
        <View style={{ ...styles.input(focus), ...customStyles }}>
            <TextInput
                style={{ color: "#000", ...inputStyles }}
                placeholderTextColor={appColors.placeholderTextColor}
                secureTextEntry={!isShow}
                onFocus={(e) => setFocus(true)}
                onBlur={(e) => setFocus(false)}
                cursorColor={"#000"}
                {...props}
            />

            <TouchableOpacity
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                onPress={() => setShow(!isShow)}>
                <View style={{ height: 20, width: 20, justifyContent: "center", alignItems: "center" }}>
                    {!isShow ? <Show /> : <View style={{ marginTop: 10 }}><Hide /></View>}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: (focus) => ({
        backgroundColor: appColors.grey,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: focus ? "#000" : appColors.grey,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        color: '#000'
    })
})

export default CustomInputTextPassword