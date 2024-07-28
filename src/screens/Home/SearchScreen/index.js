import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { appColors } from '../../../utils/styles/colors';
import CustomText from '../../../components/common-ui/Text/CustomText';
import getFontSize from '../../../utils/styles/standardFonts';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { width } from '../../../utils/dimensions';
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper';
import SearchInput from '../../../components/screen-components/register/home-screen-components/wholesale-tab/SearchInput';
import AllTab from './All-Tab';

const renderTabBar = props => (
    <TabBar
        {...props}
        pressColor='transparent'
        indicatorStyle={{
            backgroundColor: appColors.backgroundColor.dark,
            color: appColors.textColor,
            height: 3,
            elevation: 0,
        }}
        inactiveColor='grey'
        indicatorContainerStyle={{ backgroundColor: appColors.grey }}
        style={{
            color: appColors.textColor,
            elevation: 0,
        }}
        tabStyle={{ backgroundColor: "#fff" }}
        contentContainerStyle={{ borderBottomWidth: 3 }}
        renderLabel={({ route, focused, color }) => {
            return (
                <View style={{
                    flex: 1,
                }}>
                    <CustomText
                        style={{
                            fontSize: getFontSize('menuField'),
                            marginTop: 5,
                            textAlign: 'center'
                        }}>
                        {'  '}{route.title}
                    </CustomText>
                </View>
            );
        }}
    />
);

const SearchScreen = (props) => {

    const searchDebounceRef = React.useRef();
    const [index, setIndex] = React.useState(0);
    const [searchText, setSearchText] = React.useState('')
    const [routes] = React.useState([
        { key: 'first', title: 'All', },
        { key: 'second', title: 'Summer', },
        { key: 'third', title: 'Bakery', },
        // { key: 'fouth', title: 'Drink', },
        // { key: 'fifth', title: '-', },
    ]);
    const [suggestions, setSuggestions] = React.useState([])
    const [fakeData, setFakeData] = React.useState([

        {
            id: 1,
            search: 'Coca cola'
        },
        {
            id: 2,
            search: 'Tissue box'
        },
        {
            id: 3,
            search: 'Umbrellas'
        },
        {
            id: 4,
            search: 'Hand Sanitizer'
        },
        {
            id: 5,
            search: 'Coca cola2'
        }, {
            id: 6,
            search: 'Coca cola3'
        }, {
            id: 7,
            search: 'Coca cola4'
        },

    ])

    const renderScene = SceneMap({
        first: () => (
            <Wrapper>
                <AllTab {...props} />
            </Wrapper>
        ),
        second: () => (
            <Text>second</Text>
        ),
        third: () => (
            <Text>third</Text>
        ),
    });

    const onSearch = (search) => {
        // Clear the existing timeout if it exists
        if (searchDebounceRef.current) {
            clearTimeout(searchDebounceRef.current);
        }
        // Set a new timeout and store its ID in the ref
        searchDebounceRef.current = setTimeout(() => {
            let finds = search ? fakeData.filter(data => data.search.includes(search)) : [];
            setSuggestions(finds);
            setSearchText(search);

        }, 300);
    }

    React.useEffect(() => {
        console.log({ searchText, suggestions })
    }, [searchText])


    return (
        <>
            <View style={{ width: width, backgroundColor: appColors.backgroundColor.light, zIndex: 1 }}>
                <SearchInput
                    suggestions={suggestions}
                    navigation={props.navigation}
                    onChangeText={onSearch}
                    customContainerStyles={{ width: width * 0.95, marginHorizontal: 'auto', marginTop: 20 }} />
            </View>
            <TabView
                style={{}}
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: width }}
            />
        </>
    )
}

export default SearchScreen