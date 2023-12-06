import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    item:{
        paddingVertical:8,
        paddingHorizontal:16,
        marginVertical:8,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: colors.textSecondary,
        marginBottom: 16,
    },
    sectionHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    icon:{
        width:24,
        height:24,
    },
    button:{
        paddingVertical:12,
        marginTop:16,
    }
})
export default styles;