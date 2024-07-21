import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { width } from '../../utils/dimensions'
import { appColors } from '../../utils/styles/colors'
import EnterNumber from '../../components/screen-components/register/EnterNumber'
import NextButton from '../../components/button/NextButton'

const RegisterationScreen = () => {
    return (
        <View style={{ ...styles.container }}>
            <View>
                <Text style={{ ...styles.top_text }}>
                    Sign in or register for an account to access all the benefits of Ready-To-Serve.
                </Text>
            </View>
            <View style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.92,
                marginHorizontal: 'auto'
            }}>
                <EnterNumber />
                <NextButton
                    customBtnStyles={{ marginTop: 30 }}
                    title='Continue'
                    icon={true}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.backgroundColor.light
    },
    top_text: {
        width: width * 0.75,
        textAlign: 'center',
        marginHorizontal: "auto",
        marginTop: 20,
        fontSize: 16,
    }
})

export default RegisterationScreen