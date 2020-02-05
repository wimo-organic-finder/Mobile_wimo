/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ProductList from './ProductList'

class Cart extends Component {
  render () {
    console.log(this.props)
    return (
      <View>
        <ProductList product={this.props.cart.data} panier/>
        <Text> Total : {this.props.cart.total} €</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
const mapStateToProps = state => {
  return {
    cart : state
  }
}
export default connect(mapStateToProps)(Cart)
