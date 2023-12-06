import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line:{
        height: 1,
        flex: 1,
        backgroundColor: colors.colorRGBA,
        marginVertical: 20,
    },
    text:{
        color: colors.textPrimary,
        fontWeight: '500',
        marginHorizontal: 8,
    }
});
export default styles;