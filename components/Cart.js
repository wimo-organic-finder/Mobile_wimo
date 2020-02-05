/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ProductList from './ProductList'

class Cart extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.validation}>
          <Text style={styles.total}> Total : {this.props.cart.total} €</Text>
          <TouchableOpacity style={styles.commande_button}>
            <Text> Procéder au paiement </Text>
            <Image style={{width: 30,height:30}} source={require('../images/payment.png')} />
          </TouchableOpacity>
        </View>
        <ProductList product={this.props.cart.data} panier/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  validation: {
    margin: 20,
    alignItems: 'center',
  },
  total: {
    fontSize: 20,
    marginBottom:20
  },
  commande_button: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'orange',
    alignItems: 'center'
  }
})
const mapStateToProps = state => {
  return {
    cart : state
  }
}
export default connect(mapStateToProps)(Cart)
