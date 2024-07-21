import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { icons } from '../../../assets/icons/iconsExporter'

const { ArrowLeft } = icons
const BackButton = () => {
    return (
        <TouchableOpacity>
            <ArrowLeft />
        </TouchableOpacity>
    )
}

export default BackButton