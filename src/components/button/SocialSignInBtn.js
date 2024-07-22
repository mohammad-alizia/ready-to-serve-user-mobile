import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { appColors } from '../../utils/styles/colors'
import getFontSize from '../../utils/styles/standardFonts'

const SocialSignInBtn = ({
    customStyle = {},
    title = "continue with social",
    Icon = <></>,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity style={{ ...styles.btn, ...customStyle }} onPress={onPress}>
            <View style={{ ...styles.box, flex: 1 / 2, alignItems: "flex-end" }}><Icon /></View>
            <Text style={{ ...styles.box, fontSize: getFontSize('menuField') }}>{title}</Text>
            <View style={{ ...styles.box, flex: 1 / 2 }}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 100,
        overflow: 'hidden'
    },
    box: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: appColors.socialSignIn.light,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SocialSignInBtn