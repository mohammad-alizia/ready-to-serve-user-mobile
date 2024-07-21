import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { appColors } from '../../utils/styles/colors'
import { width } from '../../utils/dimensions'
import { icons } from '../../assets/icons/iconsExporter'

const { arrowNext: ArrowNext } = icons;

const NextButton = ({
    icon = false,
    title = "button",
    disabled = false,
    customBtnStyles = {},
    onPress = () => { }, }) => {
    return (
        <TouchableOpacity style={{ ...styles.btnBody(disabled), ...customBtnStyles }} onPress={onPress}>
            <Text style={[styles.btnTitle(disabled), { marginLeft: 20 }]}>{' '}</Text>
            <Text style={styles.btnTitle(disabled)}>{title}</Text>
            <View style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'flex-end',
                flex: 1,
                paddingRight: 20
            }}>
                {icon ? !disabled ? <ArrowNext /> : <ArrowNext /> : <></>}
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnBody: (disabled) => ({
        backgroundColor: !disabled ? appColors.nextButton.btnActive : appColors.nextButton.btnDisabled,
        width: width * 0.95,
        height: 56,
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    }),
    btnTitle: (disabled) => ({
        color: !disabled ? appColors.nextButton.textActive : appColors.nextButton.textDisabled,
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    })
})

export default NextButton