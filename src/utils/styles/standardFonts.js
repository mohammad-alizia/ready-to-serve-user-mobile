import { Platform } from 'react-native';

const fontSizes = {
    // Common font sizes
    common: {
        heading: 20,
        subHeading: 16,
        menuField: 14,
        miniText: 14,
    },

    // Platform-specific overrides
    ios: {
        heading: 22,
        subHeading: 18,
        menuField: 16,
    },

    android: {
        heading: 24,
        subHeading: 20,
        menuField: 16,
    },
};

const getFontSize = (type, extra = 0) => {
    if (fontSizes[Platform.OS] && fontSizes[Platform.OS][type]) {
        return fontSizes[Platform.OS][type] + extra;
    }
    return fontSizes.common[type];
};

export default getFontSize
