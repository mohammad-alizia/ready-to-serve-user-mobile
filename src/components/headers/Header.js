import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { icons } from '../../assets/icons/iconsExporter'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { svg } from '../../assets/svg/svgExporter';
import getFontSize from '../../utils/styles/standardFonts';

const { ArrowLeft } = icons;

const Header = ({
    navigation,
    title,
}) => {

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={{ ...styles.container }}>
            <View style={{ flex: 1 / 2, paddingLeft: 10 }}>
                <TouchableOpacity onPress={onBackPress}>
                    <ArrowLeft />
                </TouchableOpacity>
            </View>
            {title ?
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: getFontSize('subHeading'), fontWeight: '600', textAlign: 'center' }}>{title}</Text>
                </View>
                : <></>}
            <View style={{ flex: 1 / 2, paddingRight: 10 }}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default Header