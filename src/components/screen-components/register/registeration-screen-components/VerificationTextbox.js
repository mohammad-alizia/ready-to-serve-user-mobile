import React from 'react';
import { View, TextInput } from 'react-native';
import { RFPercentage as fp } from 'react-native-responsive-fontsize';
// import fontSelector from '../utils/fontSelector';
const VerificationTextboxComponent = props => {
  return (
    <View style={{ backgroundColor: 'pink' }}>
      <TextInput
        editable={props.editable}
        ref={props?.reference}
        style={{
          fontSize: fp(3),
          // fontFamily: fontSelector('English_Bold'),
          backgroundColor: props?.value?.length > 0 ? '#fff' : 'lightgrey',
          padding: 13,
          paddingVertical: 5,
          textAlign: 'center',
          color: '#007794',
        }}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={value => {
          props?.onUpdate(value?.replace(/[^0-9]/g, ''));
          if (value.replace(/[^0-9]/g, '')) {
            props?.nextReference?.current?.focus();
          }
        }}
      />
      <View
        style={{
          // backgroundColor: props?.value?.length > 0 ? '#007794' : 'grey',
          backgroundColor: props?.value?.length > 0 ? '#007794' : 'grey',
          height: 5,
        }}></View>
    </View>
  );
};

export default VerificationTextboxComponent;
