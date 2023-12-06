import React, { useContext, useEffect  } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import { getProfile } from '../../../utils/backendCalls';
import { ProfileContext } from '../../../../App';

const Profil = ({navigation}) => {
    const num = 10;
    const {profile, setProfile} = useContext(ProfileContext);

    useEffect(() => {
        (async () => {
            const data = await getProfile()
            setProfile(data);
        })();
    }, []);



    const onLogout = () => {
        console.log('logout clicked');

    };

    const onSettingsPress = () => {
        navigation.navigate('Settings');
    };

    const onMyListingsPress= () => {
        navigation.navigate('MyListings');
    };

    const onNewListinPress = () => {
        navigation.navigate('CreateListing');
    };


    return (
        <SafeAreaView style={{ flex:1}}>
        <Header title="Profil" showLogout onLogout={onLogout}/>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>{profile?.fullName}</Text>
                    <Text style={styles.email}>{profile?.email}</Text>

                    <ListItem onPress={onMyListingsPress} title="Mes annonces" subtitle={`You have ${num} listings`}/>
                    <ListItem onPress={onSettingsPress} title="Paramètres" subtitle="Compte, FAQ, Contact"/>
                    
                </View>
                <View style={styles.buttonCont}>
                <Button onPress={onNewListinPress} style={{flex:0}} title="Ajouter une nouvelle annonce" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profil);