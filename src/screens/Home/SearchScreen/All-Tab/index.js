import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/common-ui/Text/CustomText'
import { appColors } from '../../../../utils/styles/colors'
import RecentSearchTags from '../../../../components/screen-components/search-screen-components/RecentSearchTags'

const RecentSearches = ({
    data = [],
    onDeleteTag = () => { },
    onClear = () => { },
    onSelectTag = () => { },
    customHeaderStyles = {},

}) => (
    <>
        <View style={{ ...styles.header, ...customHeaderStyles }}>
            <CustomText type={'sub-heading'} style={{ fontWeight: "700", }}>Recent searches</CustomText>
            <Pressable onPress={onClear}>
                <CustomText
                    style={{
                        color: appColors.darkGrey,
                        textDecorationLine: 'underline',
                        textAlignVertical: "bottom",
                    }}>clear searches</CustomText></Pressable>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', marginTop: 10 }}>
            {data.map((tag, i) => (
                <RecentSearchTags
                    tagName={tag.search}
                    onSelectTag={() => { onSelectTag(tag) }}
                    onCrossPress={() => { onDeleteTag(tag) }}
                    customContainerStyles={{ marginVertical: 5, marginRight: 5 }} />
            ))}
        </View>
    </>
)

const AllTab = ({

}) => {

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

    ])

    const onClear = () => {
        setFakeData([])
    }

    const onDeleteTag = (deleteData) => {
        console.log({ deleteData })
        let temp = fakeData.filter(data => data?.id !== deleteData?.id)
        setFakeData(temp)
    }

    const onSelectTag = (tag) => {

    }

    return (
        <View>
            <RecentSearches
                data={fakeData}
                onClear={onClear}
                onSelectTag={onSelectTag}
                onDeleteTag={onDeleteTag}
                customHeaderStyles={{ marginTop: 20 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default AllTab