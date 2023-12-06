import React, { useContext, useState } from "react";
import {Alert, ScrollView, Text, View } from "react-native";
import styles from "./style";
import AuthHearder from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { signup } from "../../../utils/backendCalls";
import { UserContext } from "../../../../App";


const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({});
    const { setUser } = useContext(UserContext);

    const onSignIn = () => {
        navigation.navigate('Signin')
    };

    const onBack=()=>{
        navigation.goBack();
    }

    const onChange = (key, value)=>{
        setValues(v => ({...v, [key]: value}))
    }

    const onSubmit = async () => {
        try{
            if(!values?.fullName || !values?.email || !values?.password || !values?.confirmPassword){
                Alert.alert('Veuillez remplir tous les champs')
                return;
            }
    
            if(values?.password !== values?.confirmPassword){
                Alert.alert('Les mots de passe ne correspondent pas')
                return;
            }
    
            if(!checked){
                Alert.alert('Veuillez accepter les conditions')
                return;
            }
    
    
            const token = await signup(values);
            setUser({token})

            console.log('token :>>', token)
        }catch(error){
            console.log('error :>>', error)
        }
    }
        

    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHearder onBackPress={onBack} title="Inscription" />

                <Input value={values.fullName} onChangeText={(v)=> onChange('fullName', v)} label="Nom" placeholder="Joe doe"/>
                <Input value={values.email} onChangeText={(v)=> onChange('email', v)} label="Email" placeholder="exemple@luma.com"/>
                <Input value={values.password} onChangeText={(v)=> onChange('password', v)} isPassword label="Mot de pass" placeholder="****************"/>
                <Input value={values.confirmPassword} onChangeText={(v)=> onChange('confirmPassword', v)} isPassword label="Confirmation mot de pass" placeholder="****************"/>

                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked}/>
                    <Text style={styles.agreetext}> J'accepte les<Text style={styles.agreetextbold}> Conditions</Text> et la <Text style={styles.agreetextbold}>Confidentialité</Text> </Text>
                </View>

                <Button onPress={onSubmit} style={styles.button} title="S'inscrire"/>

                <Seperator text="Oubien inscrivez-vous avec "/>

                <GoogleLogin/>

                <Text style={styles.footerText}>Vous avez déjà un compte? 
                    <Text onPress={onSignIn} style={styles.footerLink}> Se connecter</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
};

export default React.memo(Signup);