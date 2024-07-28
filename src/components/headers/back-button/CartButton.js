import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Badge } from '@ant-design/react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { icons } from '../../../assets/icons/iconsExporter'
import { appColors } from '../../../utils/styles/colors'
import CustomText from '../../common-ui/Text/CustomText'
import { color } from 'react-native-elements/dist/helpers'

const { Cart } = icons;

const CartButton = ({ }) => {
    return (
        <TouchableOpacity style={{ ...styles.btn }}>
            <View style={{ ...styles.indicator }}>
                <CustomText style={{ ...styles.text }}>10</CustomText>
            </View>
            <Cart />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 40,
        width: 40,
        borderRadius: 100,
        backgroundColor: appColors.grey,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    indicator: {
        height: 14,
        width: 14,
        borderRadius: 100,
        backgroundColor: appColors.black,
        position: "absolute",
        top: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: '#fff',
        fontSize: 8,
        textAlignVertical: "center",
        textAlign: "center"
    }
})

export default CartButton