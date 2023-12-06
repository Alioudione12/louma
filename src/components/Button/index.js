import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";

const Button = ({title, onPress, style}) => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[style, styles.container]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
};
export default React.memo(Button);