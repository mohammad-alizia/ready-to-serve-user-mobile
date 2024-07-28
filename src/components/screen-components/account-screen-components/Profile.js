import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomText from '../../common-ui/Text/CustomText'
import { png } from '../../../assets/png/pngExporter'
import { icons } from '../../../assets/icons/iconsExporter';
import { appColors } from '../../../utils/styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import getFontSize from '../../../utils/styles/standardFonts';
import RouteNames from '../../../navigation/routeNames';

const { ProfilePlaceholder } = png;
const { Edit } = icons;

const Profile = (props) => {
    try {

        const { navigation } = props;

        const handlePress = () => {
            navigation.navigate(RouteNames.USER_ACCOUNT_SCREEN)
        }

        return (
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                    <View>
                        <Image source={ProfilePlaceholder} style={{ width: 74, height: 74 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <CustomText type='sub-heading' style={{ fontWeight: '700' }}>Muhammad Ali Zia</CustomText>
                            <TouchableOpacity onPress={handlePress}>
                                <Edit />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <CustomText style={{ marginTop: 10, color: appColors.darkGrey, fontSize: 13, width: '70%' }}>Dont tell anyone, but I'm a the Muhammad Ali</CustomText>
                        </View>
                    </View>
                </View>
            </View>
        )

    } catch (error) {
        return <><CustomText>{error.message}</CustomText></>
    }

}
const styles = StyleSheet.create({

})

export default Profile