import React from 'react';
import { Image, Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';



const ProductDetails = ({route, navigation}) => {
    const { product } = route?.params || {};

    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        // Make a phone call
        //const phone = '+33641'
        //Linking.openURL(`tel:${phone}`);

        // Send an Email
        const email = 'dionealiou88@gmail.com'
        Linking.openURL(`mailto:${email}`)
    }

    
    
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images}/>
                ):(
                    <Image style={styles.image} source={{ uri: product?.image }} />
                )}
                <View style={styles.content}>
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.price}>{product?.price}€</Text>
                <Text style={styles.description}>{product?.description}</Text>
                </View>

                <Pressable onPress={onBackPress}  style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')}/>
                </Pressable>

            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                <Image style={styles.bookmarkIcon} source={require('../../../assets/tabs/bookmark_active.png')} />
                </Pressable>
                <Button onPress={onContact} title="Contactez le vendeur"/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails);