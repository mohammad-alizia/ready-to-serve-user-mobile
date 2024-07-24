import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react';
import { height, width } from '../../utils/dimensions';
import NextButton from '../../components/button/NextButton';
import { svg } from '../../assets/svg/svgExporter';
import { appColors } from '../../utils/styles/colors';
import { Button } from '@ant-design/react-native';
import RouteNames from '../../navigation/routeNames';
import Wrapper from '../../components/screen-components/register/Wapper/Wrapper';

const slides = [
    {
        id: 1,
        image: svg.onBoarding1,
        title: 'Fresh Food Order',
        desc: 'Experience convenience and food quality with our locally sourced produced, delivered straight to your door.',
    },
    {
        id: 2,
        image: svg.onBoarding2,
        title: 'Good Service',
        desc: 'Count on us unparalleled assistance, tailored to your needs, delivered with efficiency and professionalism.',
    },
    {
        id: 3,
        image: svg.onBoarding3,
        title: 'Fast Delivery',
        desc: `Enjoy prompt and efficient service as we swiftly bring your orders to you, ensuring convenience without compromise.`,
    },
    {
        id: 4,
        image: svg.onBoarding4,
        title: 'The Taste Exploration',
        desc: 'Enjoy prompt and efficient service as we swiftly bring your orders to you, ensuring convenience without compromise.',
    },
];


const Footer = ({ currentSlideIndex, setCurrentSlideIndex }) => {

    return (
        <View style={{ justifyContent: "space-between", paddingHorizontal: 20, position: 'absolute', top: height * 0.52, left: width * 0.38 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {slides.map((_, index) => (

                    <View key={index} style={[styles.indicator, currentSlideIndex == index && {
                        backgroundColor: "#666666",
                        width: 16,
                        height: 9,
                        // flex:'none'
                    }]} />
                ))}
            </View>
            <View style={{ marginBottom: 20 }}>

            </View>
        </View>
    )
}

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



const OnBoardingScreen = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width)
        setCurrentSlideIndex(currentIndex)
    }
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    }

    const navigateWelcome = () => {
        navigation.navigate(RouteNames.WELCOME_SCREEN);
    }
    return (
        <SafeAreaView style={[styles.safeAreaView]}>
            <StatusBar backgroundColor={"white"} barStyle={'dark-content'}></StatusBar>
            {/* <View style={[styles.skipContainer]}>
                <Text style={[styles.skipText, currentSlideIndex == 0 ? '' : { display: 'none' }]} onPress={() => skip()}>Skip</Text>
            </View> */}
            {/* <Wrapper> */}
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
            <Footer currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} />
            {currentSlideIndex == slides.length - 1 ? <View style={[styles.buttonContainer]}>
                <NextButton title='Next' onPress={navigateWelcome} icon={true} />
            </View>
                :
                <View style={[styles.buttonContainer]}>
                    <NextButton title='Next' onPress={goNextSlide} icon={true} />
                </View>}


            {/* </Wrapper> */}
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
        // marginBottom: height * 0.3,
        marginTop: height * 0.18
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        // fontFamily: 'Gilroy-SemiBold',
        // marginTop:
    }
});

const styles = StyleSheet.create({
    safeAreaView: {
        // flex:0.25*0.25,
        flex: 1,
        paddingTop: "7%",
        backgroundColor: "white"
    },
    skipContainer: {
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 13,
        height: 20,
        width: width

    },
    skipText: {
        color: "#000000",
        // fontFamily: "Gilroy-Regular",
        fontSize: 16,
        marginRight: 17,
    },
    imageContainer: {
        // backgroundColor:"black"
    },
    dotSliderContainer: {
        height: 20,
        width: "100%",
        // backgroundColor:"red",
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
        height: 100,
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal:'auto'
    },
    button: {
        // backgroundColor: AppColor.blueButton,
        backgroundColor: appColors.nextButton.btnActive,
        color: 'white',
        height: 50,
        width: 334,
        borderRadius: 12,
        // margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: height * 0.3,
        // marginTop: height * 0.18
    },
})

export default OnBoardingScreen;