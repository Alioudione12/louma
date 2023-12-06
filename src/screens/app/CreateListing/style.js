import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: colors.textPrimary,
        marginBottom: 14,
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 4,
        marginRight: 8,
        marginTop: 8,
    },
    uploadContainer:{
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.deepRose,
        borderStyle: 'dashed',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 8,
    },
    uploadCircle:{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.deepRose,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadPlus:{
        color: colors.white,
        fontSize: 30,
    },
    imageRow:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBottom: 16,
    },
    imageCont:{
        flexDirection: 'row',
    },
    delete:{
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    texterea:{
        minHeight: 150,
        paddingTop: 16,
    },
    button:{
        marginBottom: 140,
    },
})
export default styles;