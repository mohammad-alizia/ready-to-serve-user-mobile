import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import TopText from '../../../components/screen-components/register/registeration-screen-components/TopText'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import VerificationTextboxComponent from '../../../components/screen-components/register/registeration-screen-components/VerificationTextbox'
import OtpInput from 'react-native-otp-textinput'
import getFontSize from '../../../utils/styles/standardFonts'
import NextButton from '../../../components/button/NextButton'
import RouteNames from '../../../navigation/routeNames'
const OtpVerficationScreen = ({navigation}) => {

  const [opt, setOtp] = useState('');
  const [isResendEnabled, updateIsResendEnabled] = useState(false);
  const [triggerResend, updateTriggerResend] = useState(false);
  const [count, setCount] = useState(60);

  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  }

  const setText = () => {
    otpInput.current.setValue("1234");
  }

  const Continue = () =>{
    navigation.navigate(RouteNames.WHATS_YOUR_EMAIL_ADDRESS_SCREEN)
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

    // }, [triggerResend]);
  }, [triggerResend, count]);

  return (
    <Wrapper>
      <View style={{ flex: 1 }}>
        <View>
          <TopText text={'Code just sent to 04******23'} />
        </View>
        <View>
          <OtpInput
            defaultValue={opt}
            keyboardType='numeric'
            ref={e => (otpInput = e)}
            containerStyle={{ width: 300, marginHorizontal: 'auto', marginTop: 32 }}
            textInputStyle={{ borderWidth: 3, borderRadius: 5, }}
            tintColor={'#000'}
            // offTintColor={'#000'}
            handleTextChange={(e) => setOtp(e)}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
          <Text style={{ color: 'black', fontSize: getFontSize('menuField') }}>
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
                textDecorationLine: 'underline',
                marginLeft: 9,
                color: isResendEnabled ? '#000' : 'grey',
              }}>
              Resend {count > 1 && count < 60 && ` ${count}`}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1 / 5 }}>
        {opt.length == 4 && <NextButton title='Next' icon={true} onPress={Continue}/>}
      </View>
    </Wrapper>
  )
}

export default OtpVerficationScreen