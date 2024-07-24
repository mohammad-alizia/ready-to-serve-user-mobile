import { Button } from "react-native"
import HomeScreen from "../screens/Home"
import OnBoardingScreen from "../screens/OnBoarding"
import OtpVerficationScreen from "../screens/Registeration/Otp-Verfication"
import WelcomeScreen from "../screens/Registeration/Welcome"
import AddressInfoScreen from "../screens/Registeration/address-info"
import CreatePasswordScreen from "../screens/Registeration/create-password"
import EnableYourLocationScreen from "../screens/Registeration/enable-location"
import SetPreferencesScreen from "../screens/Registeration/set-preferences"
import WhatsYourEmailAddressScreen from "../screens/Registeration/whats-your-email-address"
import WhatsYourNameScreen from "../screens/Registeration/whats-your-name"
import SplashScreen from "../screens/Splash"
import RouteNames from "./routeNames"
import BackButton from "../components/headers/back-button/BackButton"
import Header from "../components/headers/Header"
import RegisterationScreen from "../screens/Registeration"
import TabNavigator from "./TabNavigator"

const commonProps = {
    title: '',
    headerShadowVisible: false
}

const routes = [
    {
        id: 1,
        name: RouteNames.SPLASH_SCREEEN,
        component: SplashScreen,
        options: {
            ...commonProps,
            headerShown: false,
        },
    },
    {
        id: 2,
        name: RouteNames.ONBOARDING_SCREEN,
        component: OnBoardingScreen,
        options: {
            ...commonProps,
        }
    },
    {
        id: 3,
        name: RouteNames.WELCOME_SCREEN,
        component: WelcomeScreen,
        options: {
            ...commonProps,
        }
    },
    {
        id: 4,
        name: RouteNames.REGISTER_SCREEN,
        component: RegisterationScreen,
        options: {
            ...commonProps,
            header: (props) => <Header title={'Welcome to\nReady-To-Serve'} {...props} />
        }
    },
    {
        id: 5,
        name: RouteNames.OPT_VERFICATION_SCREEN,
        component: OtpVerficationScreen,
        options: {
            ...commonProps,
            header: (props) => <Header title={'OTP Verification'} {...props} />
        }
    },
    {
        id: 6,
        name: RouteNames.WHATS_YOUR_EMAIL_ADDRESS_SCREEN,
        component: WhatsYourEmailAddressScreen,
        options: {
            ...commonProps,
            header: (props) => <Header title={'What\'t your\nemail address'} {...props} />
        }
    },
    {
        id: 7,
        name: RouteNames.CREATE_PASSWORD_SCREEN,
        component: CreatePasswordScreen,
        options: {
            ...commonProps,
            header: (props) => <Header title={'Create your account password'} {...props} />
        }
    },
    {
        id: 8,
        name: RouteNames.WHATS_YOUR_NAME_SCREEN,
        component: WhatsYourNameScreen,
        options: {
            ...commonProps,
            header: (props) => <Header title={'What\'s your name?'} {...props} />
        }
    },
    {
        id: 9,
        name: RouteNames.ENABLE_LOCATION_SCREEN,
        component: EnableYourLocationScreen,
        options: {
            ...commonProps,
            header: (props) => <Header title={'Enable your location'} {...props} />
        }
    },
    {
        id: 10,
        name: RouteNames.ADDRESS_INFO_SCREEN,
        component: AddressInfoScreen,
        options: {
            ...commonProps,
            header: (props) => <Header title={'Address Information'} {...props} />
        }
    },
    {
        id: 11,
        name: RouteNames.SET_PREFERENCES_SCREEN,
        component: SetPreferencesScreen,
        options: {
            ...commonProps,
            headerShown: false
        }
    },
    {
        id: 12,
        name: RouteNames.HOME_SCREEN,
        component: TabNavigator,
        options: {
            ...commonProps,
            headerShown: false
        }
    },
]

export default routes