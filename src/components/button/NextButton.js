import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { appColors } from '../../utils/styles/colors'
import { width } from '../../utils/dimensions'
import { icons } from '../../assets/icons/iconsExporter'
import getFontSize from '../../utils/styles/standardFonts'

const { arrowNext: ArrowNext, ArrowNextDisabled } = icons;

const NextButton = ({
    icon = false,
    customIcon,
    title = "button",
    disabled = false,
    customBtnStyles = {},
    customTextStyles = {},
    isCenter = true,
    onPress = () => { }, }) => {
    return (
        <TouchableOpacity disabled={disabled} style={{ ...styles.btnBody(disabled), ...customBtnStyles }} onPress={onPress}>
            <Text style={[styles.btnTitle(disabled), { marginLeft: 20, flex: isCenter ? 1 : 1 / 5, }]}>{' '}</Text>
            <Text style={[styles.btnTitle(disabled), customTextStyles]}>{title}</Text>
            <View style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'flex-end',
                flex: isCenter ? 1 : 1 / 5,
                paddingRight: 20
            }}>
                {customIcon && customIcon}
                {(icon && !customIcon) ? !disabled ? <ArrowNext /> : <ArrowNextDisabled /> : <></>}
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnBody: (disabled) => ({
        backgroundColor: !disabled ? appColors.nextButton.btnActive : appColors.nextButton.btnDisabled,
        height: 56,
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    }),
    btnTitle: (disabled) => ({
        color: !disabled ? appColors.nextButton.textActive : appColors.nextButton.textDisabled,
        fontSize: getFontSize('menuField'),
        flex: 1,
        textAlign: 'center'
    })
})

export default NextButton