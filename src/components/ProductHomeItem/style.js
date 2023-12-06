import { Dimensions, StyleSheet } from "react-native";
import colors from "../../utils/colors";

const {width} = Dimensions.get('window');
console.log(width);

const styles = StyleSheet.create({
    container: {
        margin: 8,

    },
    title: {
        color: colors.textSecondary,
        paddingVertical: 8,
    },
    image:{
        width: (width - 64)/2,
        height:220,
        borderRadius: 8,
        backgroundColor: colors.textPrimary,
    },
    price:{
        color:colors.deepRose,
        paddingBottom: 8,
        fontWeight: 'bold',
    }
});
export default styles;