import React, { useContext, useState } from "react";
import {Alert, ScrollView, Text} from "react-native";
import styles from "./style";
import AuthHearder from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "../../../utils/backendCalls";
import { UserContext } from "../../../../App";


const Signin = ({navigation}) => {
    const [values, setValues] = useState({});
    const { setUser } = useContext(UserContext);

    const onSignUp = () => {
        navigation.navigate('Signup')
    };

    const onBack=()=>{
        navigation.goBack();
    }

    const onChange = (key, value)=>{
        setValues(v => ({...v, [key]: value}))
    }
    const onSubmit = async () => {
        try{
            if(!values?.email || !values?.password){
                Alert.alert('Veuillez remplir tous les champs')
                return;
            }
            const token = await login(values)
            setUser({token})

            console.log('token :>>', token)
        }catch(error){
            console.log('error :>>', error)
        }
        
    }
    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHearder onBackPress={onBack} title="Connexion" />

                <Input value={values.email} onChangeText={(v)=> onChange('email', v)} label="Email" placeholder="exemple@luma.com"/>
                <Input value={values.password} onChangeText={(v)=> onChange('password', v)} isPassword label="Mot de pass" placeholder=".................."/>

                <Button onPress={onSubmit} style={styles.button} title="Connexion"/>

                <Seperator text="Oubien inscrivez-vous avec "/>

                <GoogleLogin/>

                <Text style={styles.footerText}>Vous n'avez pas de compte ?
                    <Text onPress={onSignUp} style={styles.footerLink}> Inscription</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
};

export default React.memo(Signin);