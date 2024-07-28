import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import Search from '../../../components/screen-components/home-screen-components/wholesale-tab/Search'
import RouteNames from '../../../navigation/routeNames'

const WholeSaleTab = ({ navigation }) => {
    const handlePress = () =>{
        navigation.navigate(RouteNames.SEARCH_SCREEN)
    }

    return (
        <Wrapper>
            <Search onPress={handlePress} customBtnStyles={{ marginTop: 18 }} />
        </Wrapper>
    )
}

export default WholeSaleTab