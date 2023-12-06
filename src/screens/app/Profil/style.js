import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: 12,
    },
    email: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: 16,
    },
    content: {
        flex: 1,
    },
    buttonCont: {
        flex: 0,
        width: '100%', 
        flexDirection: 'row' 
    }
})
export default styles;