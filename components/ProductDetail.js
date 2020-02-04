

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet, ActivityIndicator,ScrollView, Image, Button
} from 'react-native'
import { getProductById } from '../api/BDDApi'

export default class MyComponent extends Component {
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
      <View style={styles.loading_container}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}

  _displayProduct () {
    const { product } = this.state
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
          <Button
          title="Ajouter au panier"
          />
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
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
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
