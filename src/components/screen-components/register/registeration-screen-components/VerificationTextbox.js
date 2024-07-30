import React from 'react';
import { View, TextInput } from 'react-native';
import { RFPercentage as fp } from 'react-native-responsive-fontsize';
import { appColors } from '../../../../utils/styles/colors';
// import fontSelector from '../utils/fontSelector';
const VerificationTextboxComponent = props => {

  const onBackSpacePress = (e) => {
    if (e.nativeEvent.key == 'Backspace') {
      props.reference?.current?.clear()
      props.previousReference?.current?.focus()
    }
  }

  return (
    <TextInput
      editable={props.editable}
      ref={props?.reference}
      style={{
        height: 64,
        width: 64,
        fontSize: fp(3),
        // fontFamily: fontSelector('English_Bold'),
        backgroundColor: appColors.grey,
        padding: 13,
        paddingVertical: 5,
        textAlign: 'center',
        color: appColors.mattBlack,
        borderColor: appColors.mattBlack,
        borderWidth: props?.value ? 3 : 0,
        borderRadius: 5
      }}
      maxLength={1}
      keyboardType="numeric"
      onKeyPress={onBackSpacePress}
      onChangeText={value => {
        props?.onUpdate(value?.replace(/[^0-9]/g, ''));
        if (value.replace(/[^0-9]/g, '')) {
          props?.nextReference?.current?.focus();
        }
      }}
    />
  );
};

export default VerificationTextboxComponent;
