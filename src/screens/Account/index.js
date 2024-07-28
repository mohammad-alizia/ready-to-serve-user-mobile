import { View, Text, Image } from 'react-native'
import React from 'react'
import Wrapper from '../../components/screen-components/register/Wapper/Wrapper'
import Profile from '../../components/screen-components/account-screen-components/Profile'
import CustomText from '../../components/common-ui/Text/CustomText'
import { icons } from '../../assets/icons/iconsExporter'
import { appColors } from '../../utils/styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import getFontSize from '../../utils/styles/standardFonts'
import RouteNames from '../../navigation/routeNames'
import ClickableRow from '../../components/screen-components/account-screen-components/ClickableRow'

const { AccountIcon, NotificationIcon, ChatboxIcon, StorageIcon, HelpCenterIcon } = icons

const AccountScreen = (props) => {

    const { navigation } = props;

    const navigateTo = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <Wrapper>
            <View style={{ marginTop: 20 }}>
                <Profile {...props} />
            </View>
            <View style={{ marginTop: 19 }}>
                <ClickableRow title={'Account'} desc={'Privacy, secutrity, change email or number'} Icon={AccountIcon} onPress={() => navigateTo(RouteNames.USER_ACCOUNT_SCREEN)} />
                <ClickableRow title={'Chats'} desc={'Theme, wallpapers, chat history'} Icon={ChatboxIcon} />
                <ClickableRow title={'Notifaction'} desc={'Message, group & call tones'} Icon={NotificationIcon} />
                <ClickableRow title={'Storage and data'} desc={'Network usage, auto-download'} Icon={StorageIcon} />
                <ClickableRow title={'Help'} desc={'Help cenre, contact us, privacy policy'} Icon={HelpCenterIcon} />
            </View>
        </Wrapper>
    )
}

export default AccountScreen