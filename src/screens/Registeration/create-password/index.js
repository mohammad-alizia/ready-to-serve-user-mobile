import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import TopText from '../../../components/screen-components/register/registeration-screen-components/TopText'
import CustomInputText from '../../../components/common-ui/input/CustomInputText'
import { icons } from '../../../assets/icons/iconsExporter'
import CustomInputTextPassword from '../../../components/common-ui/input/CustomInputTextPassword'
import NextButton from '../../../components/button/NextButton'
import RouteNames from '../../../navigation/routeNames'

const { Check, Wrong } = icons

const CreatePasswordScreen = ({ navigation }) => {

    const [password, setPassword] = useState(null);
    const [isEdited, setIsEdited] = useState(false)
    const [isValid, setIsValid] = useState({
        length: false,
        digit: false,
        letter: false,
    });

    const validatePassword = (input) => {
        const length = input.length >= 8;
        const digit = /\d/.test(input);
        const letter = /[a-zA-Z]/.test(input);

        setIsValid({ length, digit, letter });
    };

    const handleChange = (input) => {
        if (!isEdited) {
            setIsEdited(true)
        }
        setPassword(input);
        validatePassword(input);
    };

    const onNext = () => {
        navigation.navigate(RouteNames.WHATS_YOUR_NAME_SCREEN)
    }

    useEffect(() => {

    }, [isValid])

    return (
        // <KeyboardAvoidingView
        //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        //     style={styles.container}
        // >

            <Wrapper>
                <TopText text={`Your password must be at least 8 characters long and contain at least one letter and digit`} />

                    <View style={{ flex: 1, marginTop: 20 }}>
                        <View>
                            <CustomInputTextPassword
                                value={password}
                                onChangeText={handleChange}
                                placeholder={'Please enter your password'}
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            {isEdited && <>
                                <Text style={isValid.length ? styles.valid : styles.invalid}>
                                    {isValid.length ? '✔' : '✘'} At least 8 characters
                                    {/* {isValid.length ? <Check /> : <Wrong />} At least 8 characters */}
                                </Text>
                                <Text style={isValid.digit ? styles.valid : styles.invalid}>
                                    {isValid.digit ? '✔' : '✘'} At least one digit
                                    {/* {isValid.digit ? <Check /> : <Wrong />} At least one digit */}
                                </Text>
                                <Text style={isValid.letter ? styles.valid : styles.invalid}>
                                    {isValid.letter ? '✔' : '✘'} At least one letter
                                    {/* {isValid.letter ? <Check /> : <Wrong />} At least one letter */}
                                </Text>
                            </>}
                        </View>
                    </View>
                <View style={{ flex: 1 / 4 }}>
                    <NextButton
                        icon={true}
                        title='Next'
                        disabled={!(isValid.length && isValid.digit && isValid.letter)}
                        onPress={onNext}
                    />
                </View>
            </Wrapper>
        // </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        width: '100%',
        marginBottom: 10,
    },
    valid: {
        color: 'green',
    },
    invalid: {
        color: 'red',
    },
});

export default CreatePasswordScreen