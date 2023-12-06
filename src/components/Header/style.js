import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 24,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: 24,
        height:24,
    },
    title:{
        color: colors.deepRose,
        fontSize: 16,
        fontWeight: 'bold',
    },
    space:{
        width: 24,
    }
});
export default styles;