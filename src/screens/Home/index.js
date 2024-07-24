import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../components/screen-components/register/Wapper/Wrapper'
import { width } from '../../utils/dimensions'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { appColors } from '../../utils/styles/colors';
import CustomText from '../../components/common-ui/Text/CustomText';
import getFontSize from '../../utils/styles/standardFonts';
import { icons } from '../../assets/icons/iconsExporter';

const { HomemadeFoodIcon, WholesaleIcon } = icons

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{
            backgroundColor: appColors.backgroundColor.dark,
            color: appColors.textColor,
            height: 3,
            elevation: 0,
        }}
        inactiveColor='grey'
        indicatorContainerStyle={{ backgroundColor: appColors.backgroundColor.light }}
        style={{
            backgroundColor: 'transparent',
            color: appColors.textColor,
            elevation: 0,
        }}

        renderLabel={({ route, focused, color }) => {
            return (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <route.icon />

                    <CustomText
                        style={{
                            fontSize: getFontSize('menuField'),
                            marginTop: 5
                            // fontFamily: "",
                        }}>
                        {'  '}{route.title}
                    </CustomText>
                </View>
            );
        }}
    />
);



const HomeScreen = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Homemade Food', icon: HomemadeFoodIcon },
        { key: 'second', title: 'Wholesale', icon: WholesaleIcon },
    ]);

    const renderScene = SceneMap({
        first: () => (
            <Wrapper>
                <CustomText>Home made</CustomText>
            </Wrapper>
        ),
        second: () => (
            <Wrapper>
                <CustomText>whole sale</CustomText>
            </Wrapper>
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

export default HomeScreen