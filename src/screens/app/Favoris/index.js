import React, { useContext } from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../data/products';
import FavorisItem from '../../../components/FavorisItem';
import Header from '../../../components/Header';


const Favoris = ({navigation}) => {

    const renderItem = ({item}) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', {product:item});
        };

        return(
            <FavorisItem onPress={onProductPress} {...item}/>
        )
    }
    return (
        <SafeAreaView>
            <Header title="Favoris"/>
            <FlatList 
                ListEmptyComponent={(<Text style={{textAlign:'center', marginTop: 40,}}> Vous n'avez plus de favoris </Text>)}
                data={products} 
                renderItem={renderItem} 
                keyExtractor={(item)=> String(item?.id)}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default React.memo(Favoris);