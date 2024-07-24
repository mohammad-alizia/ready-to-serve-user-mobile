import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import getFontSize from '../../../../utils/styles/standardFonts';

const TopText = ({ text, customStyles }) => {
    return (
        <Text style={{ ...styles.top_text, ...customStyles }}>{text}</Text>
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