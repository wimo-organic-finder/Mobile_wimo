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
    const {product, panier,cart} = this.props
    return(
      <FlatList
        data={product}
        renderItem={({ item }) => (panier ? <CartItem item={item} /> : <ProductItem item={item} showProduct={this.showProduct} inCart={cart.data.some(t => t.id === item.id)}/>)}
        keyExtractor={item => item.id}
        />
    )

  }
}
export default connect(state => {return { cart: state}})(ProductList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
