import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreetext:{
        color:colors.textPrimary,
        marginHorizontal: 13,
    },
    agreetextbold:{
        fontWeight:'bold',
        color:colors.deepRose,
    },
    button:{
        marginVertical: 20,
    },
    footerText:{
        color:colors.textPrimary,
        marginBottom: 56,
        textAlign: 'center',
    },
    footerLink:{
        color:colors.deepRose,
        fontWeight:'bold',
        fontSize: 16,
    },
});
export default styles;