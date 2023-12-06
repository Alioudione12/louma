import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginVertical: 12,
        borderRadius: 20,
    },
    title: {
        color: colors.deepRose,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: 6,
        color: colors.textSecondary,
        marginTop: 6,
        fontSize: 12,
    },
    arrow: {
        width: 32,
        height: 32,
    },
});
export default styles;