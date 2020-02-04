/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProductList from './ProductList'
import { getProduct } from '../api/BDDApi.js'

class Product extends Component {
  constructor (props) {
    super(props)
    this.state = {
      product: [],
      loading: true
    }
  }

  componentDidMount () {
    getProduct().then(data => {
      this.setState({
        product : data,
        loading:false
      })
    })
  }
  render () {
    return (
      <View>
        <ProductList product={this.state.product} navigation={this.props.navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Product