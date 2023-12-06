import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4,
    },
    label: {
        color: colors.deepRose,
        fontSize: 18,
        marginBottom: 6,
        fontWeight: '600',
    },
    input:{
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: '500',
    }
});
export default styles;