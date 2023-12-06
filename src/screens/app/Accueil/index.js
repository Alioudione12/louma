import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { products } from '../../../data/products';
import Header from '../../../components/Header';
import { categories } from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';
import { getServices } from '../../../utils/backendCalls';


const Accueil = ({navigation}) => {
    const [keyword, setKeyword] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [filteredProducts, setFilteredProducts] = useState(products);


    




    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((product) => (product?.category) === (selectedCategory));
            setFilteredProducts(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => (product?.category) === (selectedCategory) && product?.title?.toLowerCase().includes(keyword?.toLowerCase()) );
            setFilteredProducts(updatedProducts); 
        } else if (!selectedCategory && keyword) {
            const updatedProducts = services.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()) );
            setFilteredProducts(updatedProducts); 
        } else if (!keyword && !selectedCategory) {
            setFilteredProducts(products);
        }
    }, [selectedCategory, keyword])
 

    const renderCategoryItem = ({ item, index }) => {
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0} 
                title={item?.title} 
                image={item?.image} 
            />
        )
    }

    const renderProductItem = ({item}) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', {product});
        }
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item}/>
        )
    }
    return (
        <SafeAreaView>
            <Header showSearch={true} onSearch={setKeyword} keyword={keyword} title="feed all your needs"/>
            <FlatList 
                showsHorizontalScrollIndicator={false} 
                style={styles.list} 
                horizontal 
                data={categories} 
                renderItem={renderCategoryItem} 
                keyExtractor={(item, index)=>String(index)}
            />
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={filteredProducts} 
                renderItem={renderProductItem} 
                keyExtractor={(item)=>String(item.id)}
                numColumns={2}
                style={styles.productList}
                ListFooterComponent={<View style={{height:200}}/>}

            />
        </SafeAreaView>
    )
}

export default React.memo(Accueil);