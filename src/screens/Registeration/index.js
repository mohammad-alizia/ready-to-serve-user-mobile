import React from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { width } from '../../utils/dimensions'
import { appColors } from '../../utils/styles/colors'
import EnterNumber from '../../components/screen-components/register/EnterNumber'
import NextButton from '../../components/button/NextButton'
import Wrapper from '../../components/screen-components/register/Wapper/Wrapper'
import SocialSignInBtn from '../../components/button/SocialSignInBtn'
import { icons } from '../../assets/icons/iconsExporter'
import getFontSize from '../../utils/styles/standardFonts'
import RouteNames from '../../navigation/routeNames'
import TopText from '../../components/screen-components/register/registeration-screen-components/TopText'

const { Apple, Google, Email } = icons

const RegisterationScreen = ({ navigation }) => {

    const Continue = () => {
        navigation.navigate(RouteNames.OPT_VERFICATION_SCREEN);
    }

    return (
        <Wrapper>
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}></TouchableWithoutFeedback> */}
            <View>
                <TopText text={'Sign in or register for an account to access all the benefits of Ready-To-Serve.'} />
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 'auto'
                    }}>
                        <EnterNumber />
                        <NextButton
                            onPress={Continue}
                            customBtnStyles={{ marginTop: 30 }}
                            title='Continue'
                            icon={true}
                        />
                    </View>
                    {/* breaker */}
                    <View style={{
                        display: 'flex',
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <Text style={{ ...styles.breakerLine }}></Text>
                        <Text style={{ ...styles.breakerText }}>or</Text>
                        <Text style={{ ...styles.breakerLine }}></Text>
                    </View>

                    <View>
                        <SocialSignInBtn customStyle={{ marginTop: 16 }} Icon={Google} title='Continue with Google' />
                        <SocialSignInBtn customStyle={{ marginTop: 16 }} Icon={Apple} title='Continue with Apple' />
                        <SocialSignInBtn customStyle={{ marginTop: 16 }} Icon={Email} title='Continue with Email' />
                    </View>
                    <View>
                        <Text style={{ ...styles.regText }}>
                            By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Ready-To-Serve and its affiliates to the number provided.
                            Text STOP to 12345 to opt out.
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {/* Enter phone number */}
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.backgroundColor.light
    },
    top_text: {
        textAlign: 'center',
        marginHorizontal: "auto",
        marginTop: 20,
        fontSize: 16,
    },
    breakerText: {
        flex: 1 / 5,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: "#AFAFAF",
    },
    breakerLine: {
        flex: 1,
        height: 1,
        borderWidth: 1,
        borderColor: "#AFAFAF",
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 5,
    },
    regText: {
        marginTop: 20,
        textAlign: "center",
        fontSize: getFontSize('menuField')
    }
});

export default RegisterationScreen