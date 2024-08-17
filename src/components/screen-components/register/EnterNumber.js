import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import PhoneInput from 'react-native-phone-number-input'
import { width } from '../../../utils/dimensions';

const EnterNumber = (props) => {
    const { } = props;
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);

    return (
        <View
            style={{
                height: 150,
            }}
        >
            <Text style={{
                fontSize: 25,
                fontWeight: '600',
                textAlign: 'center',
                marginTop: 32,
            }}>
                Enter your mobile number
            </Text>
            <PhoneInput
                // defaultValue={value}
                ref={phoneInput}
                defaultCode="DM"
                layout="first"
                placeholder='Mobile number'
                onChangeText={(text) => {
                    setValue(text);
                }}
                onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                }}
                withShadow
                autoFocus
                containerStyle={{
                    marginHorizontal: 'auto',
                    marginTop: 32,
                    height: 60,
                    backgroundColor: "#fff",
                    width: '100%',
                    shadowColor: 'white'
                }}
                flagButtonStyle={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: 5,
                    marginRight: 5,
                }}
                textContainerStyle={{
                    marginLeft: 5,
                    borderRadius: 5,
                    backgroundColor: "#EEEEEE",
                }}
                textInputStyle={{
                    height: 50,
                }}

            />
        </View>
    )
}

export default EnterNumber