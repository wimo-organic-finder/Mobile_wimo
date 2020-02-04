/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Cart extends Component {
  render () {
    return (
      <View>
        <Text>I'm the MyComponent component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Cart
