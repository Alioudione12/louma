import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image: {
        width: '100%',
        height: 300,
    },
    titlecontainer: {
        marginVertical: 54,
    },

    title: {
        color: colors.textSecondary,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'left',
    },
    innertitle: {
        color: colors.deepRose,
    },
    footertext:{
        color: colors.deepRose,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
    },
    buttonContainer:{
        width:'100%', 
        flexDirection:'row',
    },
});
export default styles;