import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import TopText from '../../../components/screen-components/register/registeration-screen-components/TopText'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import VerificationTextboxComponent from '../../../components/screen-components/register/registeration-screen-components/VerificationTextbox'
import OtpInput from 'react-native-otp-textinput'
import getFontSize from '../../../utils/styles/standardFonts'
import NextButton from '../../../components/button/NextButton'
import RouteNames from '../../../navigation/routeNames'
import { fontFamily } from '../../../assets/fonts/fontSelector'
const OtpVerficationScreen = ({ navigation }) => {

  // const [opt, setOtp] = useState('');
  const [isResendEnabled, updateIsResendEnabled] = useState(false);
  const [triggerResend, updateTriggerResend] = useState(false);
  const [count, setCount] = useState(60);

  const [inputField_1, updateInputField_1] = useState('');
  const [inputField_2, updateInputField_2] = useState('');
  const [inputField_3, updateInputField_3] = useState('');
  const [inputField_4, updateInputField_4] = useState('');
  const [inputField_5, updateInputField_5] = useState('');
  const [inputField_6, updateInputField_6] = useState('');

  const numberOfInputs = 4;
  const otpRefs = Array.from({ length: 4 }, () => useRef(null));
  const [otp, setOtp] = React.useState(Array(numberOfInputs).fill(''));
  const ref_1 = useRef();
  const ref_2 = useRef();
  const ref_3 = useRef();
  const ref_4 = useRef();
  const ref_5 = useRef();
  const ref_6 = useRef();



  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  }

  const setText = () => {
    otpInput.current.setValue("1234");
  }

  const Continue = () => {
    let otpStr = otp.join();
    navigation.navigate(RouteNames.WHATS_YOUR_EMAIL_ADDRESS_SCREEN)
  }

  const setOtpState = (index, value) => {
    let temp = [...otp.slice(0, 4)];
    temp[index] = value;
    setOtp(temp);
  }

  useEffect(() => {

    const interval = setInterval(() => {
      if (count > 1) {
        setCount(prevCount => prevCount - 1);
      } else {
        updateIsResendEnabled(true);
      }
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);

  }, [triggerResend, count]);

  return (
    <Wrapper>
      <View style={{ flex: 1 }}>
        <View>
          <TopText text={'Code just sent to 04******23'} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 32 }}>
          {/* <OtpInput
            defaultValue={opt}
            keyboardType='numeric'
            ref={e => (otpInput = e)}
            containerStyle={{ width: 300, marginHorizontal: 'auto', marginTop: 32 }}
            textInputStyle={{ borderWidth: 3, borderRadius: 5, }}
            tintColor={'#000'}
            // offTintColor={'#000'}
            handleTextChange={(e) => setOtp(e)}
          /> */}

          {otpRefs.map((ref, index) => (
            <VerificationTextboxComponent
              key={index}
              reference={ref}
              nextReference={index < numberOfInputs - 1 ? otpRefs[index + 1] : null}
              previousReference={index <= numberOfInputs - 1 ? otpRefs[index - 1] : null}
              value={otp[index]}
              onUpdate={(value) => setOtpState(index, value)}
            />
          ))}

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
          <Text style={{ color: 'black', fontSize: getFontSize('menuField'), fontFamily: fontFamily.euclid.regular }}>
            Didn't Receive the code?
          </Text>
          <Pressable
            disabled={!isResendEnabled}
            onPress={() => {
              setCount(60);
              updateIsResendEnabled(false);
            }}>
            <Text
              style={{
                fontSize: getFontSize('menuField'),
                fontFamily: fontFamily.euclid.medium,
                textDecorationLine: 'underline',
                marginLeft: 9,
                color: isResendEnabled ? '#000' : 'grey',
                borderBottomColor:isResendEnabled ? '#000' : 'grey',
                borderBottomWidth:1
              }}>
              Resend {count > 1 && count < 60 && ` ${count}`}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1 / 5 }}>
        {otp.length == numberOfInputs && <NextButton title='Next' icon={true} onPress={Continue} />}
      </View>
    </Wrapper>
  )
}

export default OtpVerficationScreen