import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import CustomInputText from '../../../components/common-ui/input/CustomInputText'
import isEmail from '../../../utils/regex/isEmail'
import NextButton from '../../../components/button/NextButton'
import RouteNames from '../../../navigation/routeNames'

const WhatsYourEmailAddressScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState(true)
  const [isEdited, setEdited] = useState(false)

  const onChangeText = (text) => {
    setEdited(true)
    if (isEmail(text)) {
      setError(false)
    } else {
      setError(true)
    }
    setEmail(text)
  }

  const Continue = () => {
    navigation.navigate(RouteNames.CREATE_PASSWORD_SCREEN)
  }

  return (
    <Wrapper>
      <View style={{ flex: 1 }}>
        <CustomInputText
          customStyles={{ marginTop: 32 }}
          placeholder="name@example.com"
          onChangeText={onChangeText}
        />
        {(isEdited && error) &&
          <Text>Invalid email</Text>
        }
      </View>
      <View style={{ flex: 1 / 5 }}>
        <NextButton title='Next' icon={true} onPress={Continue} disabled={!isEmail(email)} />
      </View>
    </Wrapper>
  )
}

export default WhatsYourEmailAddressScreen