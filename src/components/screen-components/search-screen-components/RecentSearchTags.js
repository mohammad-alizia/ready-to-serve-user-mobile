import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { appColors } from '../../../utils/styles/colors'
import { icons } from '../../../assets/icons/iconsExporter'

const { TagCross } = icons

const RecentSearchTags = ({
    tagName = "RecentSearchTags",
    customContainerStyles,
    customTextStyles,
    customBtnStyles,
    onCrossPress = () => { },
    onSelectTag = () => { }
}) => {
    return (
        <View style={{ ...styles.container, ...customContainerStyles }}>
            <Pressable><Text style={{ ...styles.text, ...customTextStyles }} onPress={onSelectTag}>{tagName}</Text></Pressable>
            <Pressable style={{ ...styles.btn, ...customBtnStyles }} onPress={onCrossPress}><TagCross /></Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: appColors.grey,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 100,
    },
    text: {
        color: appColors.darkGrey,
        textAlignVertical: 'center',
    },
    btn: {
        marginLeft: 5
    }
})

export default RecentSearchTags