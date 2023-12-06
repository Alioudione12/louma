import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./style";

const FavorisItem = ({title , price, icon, image, onPress,onIconPress }) => {

    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}€</Text>
            </View>
            <Pressable onPress={onIconPress}>
            <Image style={styles.icon} source={icon || require('../../assets/close.png')}/>
            </Pressable>
        </Pressable>
    )
};
export default React.memo(FavorisItem);