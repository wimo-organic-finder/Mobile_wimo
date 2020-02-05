import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ProductItem from './ProductItem'
import CartItem from './CartItem'
import {connect} from 'react-redux'

 class ProductList extends React.Component {
  showProduct = (id) => {
    this.props.navigation.navigate('Detail',{id})
  }


  render() {
    const {product, panier} = this.props
    return(
      <FlatList
        data={product}
        renderItem={({ item }) => (panier ? <CartItem item={item} /> : <ProductItem item={item} showProduct={this.showProduct}/>)}
        keyExtractor={item => item.id}
        />
    )

  }
}
export default ProductList

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
