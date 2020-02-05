

import React, { Component } from 'react'
import { View, Text, StyleSheet,ScrollView, Image, Button } from 'react-native'
import { getProductById } from '../api/BDDApi'
import {Loading}from '../Loading'
import {connect} from 'react-redux'
import {addProduct} from '../store/cart/cartAction'

class ProductDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      product: undefined,
      loading:true,
    }
  }

  componentDidMount () {
    const id = this.props.navigation.getParam('id')
    getProductById(id).then( data => {
      this.setState ({
        product: data,
        loading: false,
      })
    })
  }

  _displayLoading () {
  if (this.state.loading) {
    return (
      <Loading />
    )
  }
}

  _displayProduct () {
    const { product } = this.state
    const {cart, addProduct} = this.props
    if(product != undefined) {
      return (
        <ScrollView>
          <Image style={{height: 180}} source={{url: product.img}} />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.details}>
            <Text> Il en reste : {product.quantity} </Text>
            <Text>Prix à l'unité : {product.prix_unit} €</Text>
          </View>
          {product.quantity > 0 ?
            cart.data.some(t => t.id == product.id) ? <Text style={{textAlign: 'center', color: 'green'}}> Dans le panier </Text> :
            <Button
            title="Ajouter au panier"
            onPress={() => addProduct(product)}
            />
            :
            <Text style={{color: 'red', textAlign:'center'}}> Rupture de stock </Text>}
        </ScrollView>

      )
    }
  }

  render() {

    return (
      <View style={styles.container}>
        {this._displayLoading()}
        {this._displayProduct()}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize:35,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  description: {
    fontSize: 15,
    margin: 10
  },
  details: {
    alignItems: 'center'
  }
})
export default connect(state => { return { cart : state }},{addProduct})(ProductDetail)
