import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import getFontSize from '../../../../utils/styles/standardFonts';

const TopText = ({ text }) => {
    return (
        <Text style={{ ...styles.top_text }}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    top_text: {
        textAlign: 'center',
        marginHorizontal: "auto",
        marginTop: 20,
        fontSize: getFontSize('menuField'),
    },
});

export default TopText