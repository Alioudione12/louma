import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Config from "react-native-config";
import styles from "./style";

const ProductHomeItem = ({title , price, image, onPress}) => {

    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}€</Text>
        </Pressable>
    )
};
export default React.memo(ProductHomeItem);