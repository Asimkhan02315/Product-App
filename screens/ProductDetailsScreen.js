
import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      <Image source={{ uri: product.thumbnail }} style={{ width: 395, height: 200 }} />
      <FlatList
        data={product.images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Image source={{ uri: item.url }} style={{ width: 200, height: 5 }} />}
      />
      <Text>{product.title}</Text>
      {/* <Text>{product.description}</Text> */}
    </View>
  );
};

export default ProductDetailsScreen;
