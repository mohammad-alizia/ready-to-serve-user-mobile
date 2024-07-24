import React from 'react';
import { Text } from 'react-native';
import { RFPercentage as fp } from 'react-native-responsive-fontsize';
// import fontSelector from '../utils/fontSelector';
import getFontSize from '../../../utils/styles/standardFonts';

const CustomText = ({ type, style, children, ...otherProps }) => {
    // const { type, style, children, ...otherProps } = props;

    const default_fontsize =
        type === 'heading'
            ? getFontSize('heading')
            : type === 'sub-heading'
                ? getFontSize('subHeading')
                : getFontSize('menuField');

    const default_fontfamily =
        type === 'heading' || type === 'sub-heading' || type === 'sub-sub-heading'
            ? "bold"
            : "normal";

    const default_style = {
        fontFamily: default_fontfamily,
        fontSize: default_fontsize,
        color: '#000',
    };

    const combinedStyles = { ...default_style, ...style };

    return (
        <Text {...otherProps} style={combinedStyles} accessible={true}>
            {children}
        </Text>
    );
};

export default CustomText;
