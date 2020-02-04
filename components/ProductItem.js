/* @flow weak */

import React from 'react'
import {
  View,
  Text,
  StyleSheet, Image, TouchableOpacity
} from 'react-native'

const MyComponent = ({item, showProduct}) => (
  <TouchableOpacity style={styles.container} onPress={() => showProduct(item.id)}>
    <Image style={{width: 100, height: 100}} source={{url : item.img}} />
    <View style={styles.card} >
      <Text style={styles.title}>{item.name}</Text>
      <Text>Il en reste : {item.quantity}</Text>
    </View>
    <View style={styles.prix}>
      <Text >Prix : {item.prix_unit} €</Text>
    </View>

  </TouchableOpacity>
)

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  card: {
    justifyContent: 'center',
    padding: 10,
    marginRight: 'auto',

  },
  prix: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10
  }
})
