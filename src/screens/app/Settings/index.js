import React, { useContext, useState } from 'react';
import { Image, Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';
import { ProfileContext } from '../../../../App';
import { updateProfile } from '../../../utils/backendCalls';

const Settings = ({navigation}) => {
    const [editing, setEditing] = useState(false);
    const {profile, setProfile } = useContext(ProfileContext);
    const [values, setValues] = useState({ _id:profile?._id, fullName: profile?.fullName, email: profile?.email})

    const onEditPress = ()=>{
        setEditing(true);
    }
    const onSave = async ()=>{
        const updatedProfile = await updateProfile(values);
        setProfile(updatedProfile);
        setEditing(false);
    }

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onItemPress = ()=>{
        Linking.openURL('https://www.google.com/')
    }
    const onItemContact = ()=>{
        Linking.openURL('https://developer.mozilla.org/fr/')
    }
    const onItemTerme = ()=>{
        Linking.openURL('https://www.termsfeed.com/blog/sample-terms-and-conditions-template/')
    }
    const goBack = ()=>{
        navigation.goBack();
    }
    return (
        <SafeAreaView style={{ flex:1}} >
            <Header showBack onBackPress={goBack} title="Paramètres" />
            <ScrollView style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Informations personnelles</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit.png')}/>
                    </Pressable>
                </View>
                <EditableBox label="Nom" onChangeText={(v) => onChange('fullName', v)} value={values.fullName} editable={editing} />
                <EditableBox label="Email" onChangeText={(v)=>onChange('email',v)} value={values.email} editable={editing}/>
                {editing ? (
                    <Button style={styles.button} onPress={onSave} title="Sauvegarder"/>
                ):null}
                

                <Text style={[styles.sectionTitle, {marginTop:40}]}>Centre d'aide</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ"/>
                <ListItem onPress={onItemContact}  style={styles.item}  title="Contactez-nous"/>
                <ListItem onPress={onItemTerme}  style={styles.item}  title="Confidentialité & Conditions"/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings);