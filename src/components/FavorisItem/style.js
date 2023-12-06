import { StyleSheet } from "react-native";
import colors from "../../utils/colors";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 24,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.colorRGBA,
    },
    title: {
        color: colors.textSecondary,
        paddingVertical: 8,
    },
    image:{
        width: 100,
        height:100,
        borderRadius: 10,
        marginRight: 20,
        backgroundColor: colors.textPrimary,
    },
    price:{
        color:colors.deepRose,
        paddingBottom: 8,
        fontWeight: 'bold',
    },
    icon:{
        width: 24,
        height: 24,
        marginLeft: 'auto',
    },
    content:{
        flex: 1,
    }
});
export default styles;