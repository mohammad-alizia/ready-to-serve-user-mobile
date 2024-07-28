import { View } from "@ant-design/react-native";
import { TouchableOpacity } from "react-native";
import CustomText from "../../common-ui/Text/CustomText";
import getFontSize from "../../../utils/styles/standardFonts";
import { appColors } from "../../../utils/styles/colors";

const ClickableRow = ({
    Icon = () => <></>,
    title,
    desc,
    onPress = () => { }
}) => (
    <TouchableOpacity onPress={onPress} style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', marginTop: 21 }}>
        <View>
            <Icon />
        </View>
        <View style={{ width: '90%', marginLeft: 22 }}>
            <CustomText>{title}</CustomText>
            <CustomText style={{ color: appColors.darkGrey, fontSize: getFontSize('menuField', -2) }}>{desc}</CustomText>
        </View>
    </TouchableOpacity>
)

export default ClickableRow;