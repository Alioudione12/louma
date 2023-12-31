import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import Input from "../Input";

const Hearder = ({title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack}) => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const onSearchClick = () => {
        setShowSearchInput( $ => !$);
    };
    
    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                    <Image style={styles.icon} source={require('../../assets/back.png')}/>
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                    <Image style={styles.icon} source={require('../../assets/search.png')}/>
                    </Pressable>
                ):<View style={styles.space}/>}
                <Text style={styles.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                    <Image style={styles.icon} source={require('../../assets/logout.png')}/>
                    </Pressable>
                ):<View style={styles.space}/>}
            </View>
            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder="Tapez votre mot-clé...."/>
            ):null}
        </View>
    )
};
export default React.memo(Hearder);