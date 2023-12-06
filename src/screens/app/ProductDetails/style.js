import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../utils/colors";

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    safe:{
        flex:1,
    },
    container: {

    },
    image:{
        width:'100%',
        height:height * 0.45,
    },
    content:{
        backgroundColor:colors.white,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:-40,
        paddingHorizontal:24,
        
    },
    title:{
        marginTop:40,
        fontSize:24,
        fontWeight:'500',
        color:colors.textPrimary,
    },
    price:{
        marginTop:8,
        fontSize:24,
        fontWeight:'bold',
        marginVertical:8,
        color:colors.deepRose,
    },
    description:{
        fontSize:14,
        fontWeight:'400',
        color:colors.textSecondary,
        marginVertical:8,
    },
    footer:{
        padding: 24,
        flexDirection:'row',
        alignItems:'center',
    },
    bookmarkContainer:{
        backgroundColor:colors.textPrimary,
        padding:14,
        borderRadius:8,
        marginRight:16,
    },
    bookmarkIcon:{
        width:24,
        height:24,
    },
    backContainer:{
        padding:10,
        borderRadius:8,
        marginRight:16,
        position:'absolute',
        backgroundColor:colors.white,
        margin: 14,
    },
    backIcon:{
        width:24,
        height:24,
    },
});
export default styles;