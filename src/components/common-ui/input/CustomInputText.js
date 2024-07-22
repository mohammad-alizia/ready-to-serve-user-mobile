import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from 'react-native-elements'
import { appColors } from '../../../utils/styles/colors'

const CustomInputText = ({
    customStyles,
    ...props
}) => {

    const [focus, setFocus] = useState(false);

    useEffect(() => {
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setFocus(false);
        });

        return () => {
            keyboardDidHideListener.remove();
        };
    }, []);


    return (
        <TextInput
            style={{ ...styles.input(focus), ...customStyles }}
            onFocus={(e) => setFocus(true)}
            onBlur={(e) => setFocus(false)}
            cursorColor={"#000"}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    input: (focus) => ({
        backgroundColor: appColors.grey,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: focus ? "#000" : appColors.grey
    })
})

export default CustomInputText