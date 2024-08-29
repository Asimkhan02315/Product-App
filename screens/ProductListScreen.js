import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const ProductListScreen = ({ navigation }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const products = response?.data?.products || [];
      const filteredProducts = products.filter(
        (product) => product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search products"
        onChangeText={(text) => setSearchTerm(text)}
        style={styles.searchBar}
        inputStyle={styles.searchBarInput}
        icon={() => <Icon name="search" size={24} color="#000" />}
      />
      <FlatList
        numColumns={2}
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <View style={styles.productContainer}>
              <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  searchBar: {
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    margin: 5,
  },
  searchBarInput: {
    fontSize: 15,
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  productImage: {
    width: 170,
    height: 200,
    margin: 5,
    borderRadius: 25,
  },
  productTitle: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ProductListScreen;
