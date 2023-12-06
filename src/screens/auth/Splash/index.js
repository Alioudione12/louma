import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import Button from "../../../components/Button";

const Splash = ({navigation}) => {

    //navigation.navigate('SignupPage')
    const onSignup = () => {
        navigation.navigate('Signup')
    };
    //navigation.navigate('SigninPage')
    const onSignin = () => {
        navigation.navigate('Signin')
    };
    
    return(
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../../../assets/splash_image1.png')}
            />
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>You'll find </Text>
                <Text style={[ styles.title, styles.innertitle]}> All you need </Text>
                <Text style={styles.title}> Here! </Text>
            </View>

            <View style={styles.buttonContainer}>
            <Button onPress={onSignup} title="Sign up" />
            </View>
            <Pressable onPress={onSignin} hitSlop={20}>
                <Text style={styles.footertext}>Sign in </Text>
            </Pressable>
        </View>
    )
};

export default React.memo(Splash) ;