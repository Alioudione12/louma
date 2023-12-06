import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.deepRose,
        backgroundColor: colors.white,
        borderRadius: 20,
        width: '50%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 40,
    },
    image:{
        width: 24,
        height: 24,
        marginRight: 10,
    }
});
export default styles;