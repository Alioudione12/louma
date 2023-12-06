import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.deepRose,
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderRadius: 20,
        flex: 1,
    },
    title:{
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    }
});
export default styles;