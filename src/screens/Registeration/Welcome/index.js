import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react';
import { height, width } from '../../../utils/dimensions';
import NextButton from '../../../components/button/NextButton';
import { svg } from '../../../assets/svg/svgExporter';
import { appColors } from '../../../utils/styles/colors';
import { Button } from '@ant-design/react-native';
import RouteNames from '../../../navigation/routeNames';

const { welcome } = svg

const slides = [
    {
        id: 1,
        image: svg.welcome,
        title: 'Get started with Ready-To-Serve',
        desc: 'Enjoy prompt and efficient service as we swiftly bring your orders to you, ensuring convenience without compromise.',
    },
];


const SlideImage = ({ item, currentSlideIndex, setCurrentSlideIndex }) => {
    return (
        <View style={[{ alignItems: "center", backgroundColor: '', height: height }]}>
            <View style={[{ alignItems: "center", backgroundColor: '' }, slideStyles.container]}>
                <item.image.default />
                <Image source={item.image} style={{ width, resizeMode: 'contain', padding: 10 }} />
            </View>
            <Text style={[slideStyles.title]}>{item.title}</Text>
            <Text style={{ color: "#000", width: width * 0.7, textAlign: 'center', marginTop: 16 }}>{item.desc}</Text>

        </View>
    )
}



const WelcomeScreen = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width)
        setCurrentSlideIndex(currentIndex)
    }

    const navigateWelcome = () => {
        navigation.navigate(RouteNames.REGISTER_SCREEN);
    }
    return (
        <SafeAreaView style={[styles.safeAreaView]}>
            <StatusBar backgroundColor={"white"} barStyle={'dark-content'}></StatusBar>
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                pagingEnabled
                data={slides}
                contentContainerStyle={{ height: height }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <SlideImage item={item} currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} />}
            />
            <View style={[styles.buttonContainer]}>
                <NextButton title='Get Started' onPress={navigateWelcome} icon={true} />
            </View>
        </SafeAreaView>
    )
}


const slideStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: height * 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "#000",
        // fontFamily: "Gilroy-Bold",
        fontSize: 24,
        lineHeight: 28,
        marginTop: 70
        // letterSpacing:"0.02em",
    },
    desc: {
        // fontFamily: "Gilroy-Regular",
        fontSize: 18,
        textAlign: "center",
        color: "#000"
    },
    button: {
        color: 'white',
        height: 50,
        width: 334,
        borderRadius: 12,
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.18
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: "7%",
        backgroundColor: "white"
    },
    skipContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 13,
        height: 20,
        width: width

    },
    skipText: {
        color: "#000000",
        fontSize: 16,
        marginRight: 17,
    },
    imageContainer: {
    },
    dotSliderContainer: {
        height: 20,
        width: "100%",
        marginTop: 28,
        display: "flex",
        flexDirection: "column"

    },
    indicator: {
        height: 9,
        width: 9,
        backgroundColor: '#B3B3B3',
        marginHorizontal: 3,
        borderRadius: 100
    },

    buttonContainer: {
        width: width * 0.91,
        marginHorizontal:'auto',

        height: 100,
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        backgroundColor: appColors.nextButton.btnActive,
        color: 'white',
        height: 50,
        width: 334,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default WelcomeScreen