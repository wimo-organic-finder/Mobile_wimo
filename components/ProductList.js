import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ProductItem from './ProductItem'


export default class MyComponent extends React.Component {
  showProduct = (id) => {
    this.props.navigation.navigate('Detail',{id})
  }


  render() {
    const {product, panier} = this.props
    return(
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductItem item={item} showProduct={this.showProduct} panier={panier}/>}
        keyExtractor={item => item.id} />
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
