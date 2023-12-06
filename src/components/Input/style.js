import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        marginBottom:20,
    },
    label: {
        marginBottom: 8,
        color:colors.textPrimary,
        fontSize: 14,
        fontWeight:'500',
    },
    inputContainer:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.colorRGBA,
        backgroundColor:colors.white,
        flexDirection:'row',
        alignItems:'center',
    },
    input:{
        paddingHorizontal: 16,
        paddingVertical: 18,
        color: colors.black,
        fontSize: 16,
        flex:1,
    },
    eye:{
        width:24,
        height:24,
        marginHorizontal: 16,
    },
    arrow:{
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{rotate: '90deg'}]
    },
    placeholder:{
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.textSecondary,
    },
    modalWrapper:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    modalContent:{
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 16,
        width: '80%',
    },
    headerTitle:{
        marginBottom: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.deepRose,
    },
    optionText:{
        paddingVertical: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    selectedOption:{
        color: colors.textPrimary,
        fontWeight: 'bold',
        fontSize: 20,
    },

});
export default styles;