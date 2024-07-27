import { View, Text } from 'react-native'
import React from 'react'
import { appColors } from '../../../utils/styles/colors';
import CustomText from '../../../components/common-ui/Text/CustomText';
import getFontSize from '../../../utils/styles/standardFonts';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { width } from '../../../utils/dimensions';
import Wrapper from '../../../components/screen-components/register/Wapper/Wrapper';

const renderTabBar = props => (
    <TabBar
        {...props}
        pressColor='transparent'
        indicatorStyle={{
            backgroundColor: appColors.backgroundColor.dark,
            color: appColors.textColor,
            height: 5,
            elevation: 0,
        }}
        inactiveColor='grey'
        indicatorContainerStyle={{ backgroundColor: appColors.grey }}
        style={{
            color: appColors.textColor,
            elevation: 0,
        }}
        tabStyle={{ backgroundColor: "#fff" }}
        contentContainerStyle={{ borderBottomWidth:5}}
        renderLabel={({ route, focused, color }) => {
            return (
                <View style={{
                    flex: 1,
                    // display: 'flex',
                    // flexDirection: 'row',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // backgroundColor: 'red'
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

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'All', },
        { key: 'second', title: 'Summer', },
        { key: 'third', title: 'Bakery', },
        // { key: 'fouth', title: 'Drink', },
        // { key: 'fifth', title: '-', },
    ]);

    const renderScene = SceneMap({
        first: () => (
            <Wrapper>
                <Text>first</Text>
            </Wrapper>
        ),
        second: () => (
            <Text>second</Text>
        ),
        third: () => (
            <Text>third</Text>
        ),
    });

    return (
        <TabView
            style={{}}
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: width }}
        />
    )
}

export default SearchScreen