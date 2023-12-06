import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import colors from "../../utils/colors";

const CategoryBox = ({title, image, onPress, isFirst, isSelected}) => {

    return(
        <Pressable onPress={onPress} style={[styles.container, isFirst ? {marginLeft:24}:{}]}>
            <View style={[styles.imageContainer, isSelected ? {borderColor: colors.deepRose,borderWidth: 1,}:{}]}>
                <Image style={styles.image} source={{uri:image}}/>
            </View>
            <Text style={[styles.title, isSelected ? {color:colors.deepRose, fontWeight:"500"}:{}]}>{title}</Text>
        </Pressable>
    )
};
export default React.memo(CategoryBox);