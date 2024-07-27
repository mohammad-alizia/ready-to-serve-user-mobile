import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { appColors } from '../../../../../utils/styles/colors'
import CustomText from '../../../../common-ui/Text/CustomText'
import { icons } from '../../../../../assets/icons/iconsExporter'

const { Search: SearchIcon } = icons

const Search = ({ onPress = () => { }, customBtnStyles, }) => {
    return (
        <TouchableOpacity style={{ ...styles.btn, ...customBtnStyles }} onPress={onPress}>
            <View style={{ ...styles.icon }}><SearchIcon /></View>
            <CustomText style={{ color: appColors.black }}>What are you looking for?</CustomText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: appColors.grey,
        borderRadius: 100,
        display: "flex",
        flexDirection: 'row',
        alignItems: "center"
    },
    icon: {
        flex: 1 / 4,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 12,
        marginRight: 0
    }
})

export default Search