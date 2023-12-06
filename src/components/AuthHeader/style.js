import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:54,
    },
    image: {
        width: 24,
        height:24,
    },
    title:{
        color: colors.textPrimary,
        fontSize: 24,
        fontWeight: '500',
        paddingHorizontal: 16,
    },
});
export default styles;