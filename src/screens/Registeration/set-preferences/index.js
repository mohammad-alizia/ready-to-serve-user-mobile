import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper'
import TopText from '../../../components/screen-components/register/registeration-screen-components/TopText'
import Tag from '../../../components/common-ui/tags/Tag'
import { appColors } from '../../../utils/styles/colors'
import getFontSize from '../../../utils/styles/standardFonts'
import Header from '../../../components/headers/Header'
import NextButton from '../../../components/button/NextButton'
import RouteNames from '../../../navigation/routeNames'
import { CommonActions } from '@react-navigation/native'


const foodPref = [
    {
        id: 1,
        pref: 'Thai Cuisine'
    },
    {
        id: 2,
        pref: 'Italian Cuisine'
    },
    {
        id: 3,
        pref: 'Desi'
    },
    {
        id: 4,
        pref: 'Chinese Cuisine'
    },
    {
        id: 5,
        pref: 'Fast Food'
    },
    {
        id: 6,
        pref: 'etc'
    },
]
const groceryPref = [
    {
        id: 1,
        pref: 'Frozen Food'
    },
    {
        id: 2,
        pref: 'Food Cupboard'
    },
    {
        id: 3,
        pref: 'Chilled Food'
    },
    {
        id: 4,
        pref: 'Bakery'
    },
    {
        id: 5,
        pref: 'Drinks'
    },
    {
        id: 6,
        pref: 'etc'
    },
]

const SetPreferencesScreen = (props) => {

    const { navigation } = props;
    const [index, setIndex] = useState(1);
    const [selectedFoodPref, setSelectedFoodPref] = useState([]);
    const [selectedGroceryPref, setSelectedGroceryPref] = useState([]);

    const addFoodPref = (pref) => {
        const isSelected = selectedFoodPref.find(item => item.id === pref.id);

        if (isSelected) {
            let temp = selectedFoodPref.filter(item => item.id !== pref.id) // remove added pref
            setSelectedFoodPref(temp)
        } else {
            setSelectedFoodPref(prev => ([...prev, pref]))
        }
    }
    const addGroceryPref = (pref) => {
        const isSelected = selectedGroceryPref.find(item => item.id === pref.id);

        if (isSelected) {
            let temp = selectedGroceryPref.filter(item => item.id !== pref.id) // remove added pref
            setSelectedGroceryPref(temp)
        } else {
            setSelectedGroceryPref(prev => ([...prev, pref]))
        }
    }

    const onPreviousPress = () => {
        if (index > 1) {
            setIndex(1)
        }
    }

    const onNext = () => {
        if (index === 1) {
            setIndex(2)
        } else if (index === 2) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: RouteNames.HOME_SCREEN }]
                })
            )
        }
    }

    useEffect(() => {
        console.log(selectedFoodPref)
    }, [selectedFoodPref])

    return (
        <>
            <Header {...props} title={'Set Preferences'} customOnBackPress={onPreviousPress} />
            <Wrapper>
                <TopText text={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`} />
                <TopText text={index === 1 ? `Food Preferences` : `Grocery Preferences`} customStyles={{ fontSize: getFontSize("heading"), fontWeight: '500', color: appColors.textColor }} />
                <View style={{ ...styles.tags }}>
                    {index === 1 &&
                        foodPref.map((pref => (
                            <Tag
                                key={pref.id}
                                tagTitle={pref.pref}
                                customBtnStyles={{
                                    marginRight: 10,
                                    marginVertical: 10,
                                    backgroundColor: selectedFoodPref.some(el => el.id === pref.id) ? "#000" : appColors.grey
                                }}
                                customTextStyles={{
                                    color: selectedFoodPref.some(el => el.id === pref.id) ? "#fff" : "#000"
                                }}
                                onPress={() => addFoodPref(pref)}
                            />
                        )))}
                    {index === 2 &&
                        groceryPref.map((pref => (
                            <Tag
                                key={pref.id}
                                tagTitle={pref.pref}
                                customBtnStyles={{
                                    marginRight: 10,
                                    marginVertical: 10,
                                    backgroundColor: selectedGroceryPref.some(el => el.id === pref.id) ? "#000" : appColors.grey
                                }}
                                customTextStyles={{
                                    color: selectedGroceryPref.some(el => el.id === pref.id) ? "#fff" : "#000"
                                }}
                                onPress={() => addGroceryPref(pref)}
                            />
                        )))}
                </View>
                <View style={{ flex: 1 / 5 }}>
                    <NextButton title='Next' icon={true} onPress={onNext} />
                </View>
            </Wrapper>
        </>
    )
}

const styles = StyleSheet.create({
    tags: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
        flex: 1
    }
})

export default SetPreferencesScreen