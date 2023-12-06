import React, { useState } from 'react';
import {ActivityIndicator, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../../components/Header';
import {launchImageLibrary} from 'react-native-image-picker'
import Input from '../../../components/Input';
import { categories } from '../../../data/categories';
import Button from '../../../components/Button';


const CreateListing = ({navigation}) => {
    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);



    const goBack = ()=>{
        navigation.goBack();
    }

    const updateNewImage = async ()=>{
        setLoading(true)
        const result = await launchImageLibrary();
        if(result?.assets?.length) {
            setImages(list =>[...list, ...result?.assets])
            setLoading(false)
        }
    }

    const onDeleteImage = (image)=>{
        setImages((list)=>{
            const filteredImages = list.filter(img => img.fileName !== image.fileName);
            return filteredImages;

        })
    }

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }));
    }



    return (
        <SafeAreaView >
            <Header showBack={true} onBackPress={goBack} title="Créer une nouvelle annonce" />
            
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle style={styles.container}>
                    <KeyboardAvoidingView behavior='position'>
                        <Text style={styles.sectionTitle}>Télécharger des photos</Text>
                        <View style={styles.imageRow}>
                            <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={updateNewImage}>
                                <View style={styles.uploadCircle}>
                                    <Text style={styles.uploadPlus}>+</Text>
                                </View>
                            </TouchableOpacity>
                            {images.map(image =>(
                                <View style={styles.imageCont} key={image?.fileName} >
                                    <Image style={styles.image} source={{uri: image.uri}}/>

                                    <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                    <Image style={styles.delete} source={require('../../../assets/close2.png')}/>
                                    </Pressable>
                                </View>
                            ))}
                            {loading ? (
                                <ActivityIndicator/>
                            ):null}
                        </View>
                        <Input placeholder="Titre de l'annonce" label="Titre" value={values.title} onChangeText={(v)=> onChange(v,'title')}/>
                        <Input placeholder="Sélectionnez la catégorie" label="Catégorie" value={values.category} onChangeText={(v) => onChange(v, 'category')} type="picker" options={categories} />
                        <Input placeholder="Entrez le prix en euros" label="Prix" value={values.price} onChangeText={(v)=> onChange(v,'price')} keyboardType='numeric'/>
                        <Input style={styles.texterea} placeholder="Dis nous en plus..." label="Description" value={values.description} onChangeText={(v)=> onChange(v,'description')} multiline/>
                    </KeyboardAvoidingView>
                    <Button  title="Soumettre" style={styles.button} />
                </ScrollView>
            
        </SafeAreaView>
    )
}

export default React.memo(CreateListing);