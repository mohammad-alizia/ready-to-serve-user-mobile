import { View, Text, Image } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import { icons } from '../../../assets/icons/iconsExporter'
import CustomText from '../../../components/common-ui/Text/CustomText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LineSeperator from '../../../components/common-ui/LineSeperator/LineSeperator'
import ClickableRow from '../../../components/screen-components/account-screen-components/ClickableRow'

const { UserIcon, UserHomeIcon, BriefCaseIcon } = icons

const ProfileEdit = ({
    imageUrl = null,
}) => {
    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                {imageUrl ? <Image src={imageUrl} /> : <UserIcon />}
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <CustomText>John Doe</CustomText>
                <TouchableOpacity style={{ marginTop: 15 }}><CustomText>EDIT ACCOUNT</CustomText></TouchableOpacity>
            </View>
        </View>
    )
}

const UserAccounScreen = () => {
    return (
        <Wrapper>
            <View style={{ margin: 15 }}>
                <ProfileEdit />
            </View>
            <LineSeperator customStyles={{ marginTop: 50, marginBottom: 30 }} />
            <View>
                <CustomText type={'sub-heading'}>Saved places</CustomText>
            </View>
            <View>
                <ClickableRow title={'Home'} desc={'Add home'} Icon={UserHomeIcon} />
                <ClickableRow title={'Work'} desc={'Add work'} Icon={BriefCaseIcon} />
            </View>

            <LineSeperator customStyles={{ marginTop: 30, marginBottom: 30 }} />

            <View>
                <CustomText type={'sub-heading'} style={{marginTop:0}}>Other options</CustomText>
                <CustomText type={'sub-heading'} style={{marginTop:24  }}>Sign Out</CustomText>
            </View>
            <View>

            </View>
        </Wrapper>
    )
}

export default UserAccounScreen