import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../data/products';
import FavorisItem from '../../../components/FavorisItem';
import Header from '../../../components/Header';

const MyListings = ({navigation}) => {
    const renderItem = ({item}) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', {product:item});
        };

        return(
            <FavorisItem icon={require('../../../assets/delete.png')} onPress={onProductPress} {...item}/>
        )
    }

    const goBack = () => navigation.goBack();
    return (
        <SafeAreaView>
            <Header title="Mes annonces" showBack onBackPress={goBack}/>
            <FlatList 
                data={products} 
                renderItem={renderItem} 
                keyExtractor={(item)=> String(item?.id)}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default React.memo(MyListings);