import { Dimensions, StyleSheet } from "react-native";
import colors from "../../utils/colors";
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        width: width,
        height:height * 0.45,
    },
    list:{
        
    },
    pagination:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:50,
        alignSelf:'center',
    },
    paginationLine:{
        width:20,
        height:4,
        borderRadius:10,
        backgroundColor:colors.colorRGBA,
        margin:5,
    },
    activeLine:{
        backgroundColor:colors.deepRose,
        width:30,
    }
});
export default styles;