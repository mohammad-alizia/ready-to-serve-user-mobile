import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { appColors } from '../../../utils/styles/colors'

const LineSeperator = ({
    customStyles,
}) => {
    return (
        <View style={{ ...styles.line, ...customStyles }}>

        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 2,
        width: "100%",
        backgroundColor: appColors.grey
    }
})

export default LineSeperator