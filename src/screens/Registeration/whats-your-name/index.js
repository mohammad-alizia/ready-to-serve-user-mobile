import { View, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import TopText from '../../../components/screen-components/register/registeration-screen-components/TopText'
import NextButton from '../../../components/button/NextButton'
import CustomInputText from '../../../components/common-ui/input/CustomInputText'
import RouteNames from '../../../navigation/routeNames'

const WhatsYourNameScreen = ({ navigation }) => {

    const [fname, setFname] = useState('');
    const [sname, setSname] = useState('');
    const [isSumitted, setSubmitted] = useState(false);
    const [canSubmit, setcanSubmit] = useState(false);

    const onSubmit = () => {
        navigation.navigate(RouteNames.ENABLE_LOCATION_SCREEN)
        // if (!isSumitted)
        //     setSubmitted(true);

        // if (!fname || !sname)
        //     setcanSubmit(false)
        // else
        //     setcanSubmit(true)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            style={{ flex: 1 }}
        >
            <Wrapper>
                <TopText text={`Let us know how to properly address you`} />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, marginTop: 32 }}>
                        <CustomInputText
                            value={fname}
                            customStyles={{ marginBottom: 16 }}
                            placeholder={`Please enter first name`}
                            onChangeText={(e) => setFname(e)}
                        />
                        <CustomInputText
                            value={sname}
                            placeholder={`Please enter surname`}
                            onChangeText={(e) => setSname(e)}
                        />
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ flex: 1 / 4 }}>
                    <NextButton
                        disabled={fname && sname ? false : true}
                        title='Next'
                        icon={true}
                        onPress={onSubmit}
                    />
                </View>
            </Wrapper>
        </KeyboardAvoidingView>
    )
}

export default WhatsYourNameScreen