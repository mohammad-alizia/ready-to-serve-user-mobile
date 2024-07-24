import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { appColors } from '../../../utils/styles/colors'
import getFontSize from '../../../utils/styles/standardFonts'

const Tag = ({
    tagTitle = "title",
    customBtnStyles = {},
    customTextStyles = {},
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity style={{ ...styles.btnStyles, ...customBtnStyles }} onPress={onPress}>
            <Text style={{ ...styles.textStyles, ...customTextStyles }}>{tagTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyles: {
        display: 'flex',
        backgroundColor: appColors.grey,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 100
    },
    textStyles: {
        color: '#000',
        fontSize: getFontSize('menuField')
    }
})

export default Tag