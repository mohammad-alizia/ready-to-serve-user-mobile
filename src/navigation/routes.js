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

const commonProps = {
    title: '',
    headerShadowVisible: false
}

const routes = [
    {
        name: RouteNames.SPLASH_SCREEEN,
        component: SplashScreen,
        options: {
            ...commonProps,
            headerShown: false,
        },
    },
    {
        name: RouteNames.ONBOARDING_SCREEN,
        component: OnBoardingScreen,
        options: {
            ...commonProps,
        }
    },
    {
        name: RouteNames.WELCOME_SCREEN,
        component: WelcomeScreen,
        options: {
            ...commonProps,
        }
    },
    {
        name: RouteNames.REGISTER_SCREEN,
        component: RegisterationScreen,
        options: {
            ...commonProps,
            header: (props) => <Header title={'Welcome to\nReady-To-Serve'} {...props} />
        }
    },
    {
        name: RouteNames.OPT_VERFICATION_SCREEN,
        component: OtpVerficationScreen,
    },
    {
        name: RouteNames.WHATS_YOUR_EMAIL_ADDRESS_SCREEN,
        component: WhatsYourEmailAddressScreen,
    },
    {
        name: RouteNames.CREATE_PASSWORD_SCREEN,
        component: CreatePasswordScreen,
    },
    {
        name: RouteNames.WHATS_YOUR_NAME_SCREEN,
        component: WhatsYourNameScreen,
    },
    {
        name: RouteNames.ENABLE_LOCATION_SCREEN,
        component: EnableYourLocationScreen,
    },
    {
        name: RouteNames.ADDRESS_INFO_SCREEN,
        component: AddressInfoScreen,
    },
    {
        name: RouteNames.SET_PREFERENCES_SCREEN,
        component: SetPreferencesScreen,
    },
    {
        name: RouteNames.HOME_SCREEN,
        component: HomeScreen,
    },
]

export default routes