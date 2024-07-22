import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { height, width } from '../../../../utils/dimensions'
import { appColors } from '../../../../utils/styles/colors'

const Wrapper = ({
    children,
    customStyles,
    statusbarBgColor = '#fff',
    statusBarBarStyles = 'dark-content',
}) => {
    return (
        <View style={{ ...styles.wrapper, ...customStyles }}>
            <StatusBar  barStyle={statusBarBarStyles} backgroundColor={statusbarBgColor} />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: appColors.backgroundColor.light,
        height: height,
        width: width,
        paddingHorizontal: 20,
    }
})

export default Wrapper