/* @flow weak */

import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


const ProductItem = ({ item, showProduct, inCart }) => (
        <TouchableOpacity style={styles.container} onPress={() => showProduct(item.id)}>
        <Image style={{width: 100, height: 100}} source={{url : item.img}} />
        <View style={styles.card} >
          <Text style={styles.title}>{item.name} {inCart && <Image style={ {width:20, height:20}} source={require('../images/shopping-cart.png')} />}</Text>
          {item.quantity > 0 ? <Text>Il en reste : {item.quantity}</Text> : <Text style={{color: 'red'}}> Rupture de stock </Text>}
        </View>
        <View style={styles.prix}>
          <Text >Prix : {item.prix_unit} €</Text>
        </View>
      </TouchableOpacity>
)

export default ProductItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  card: {
    flex: 1,
    padding: 10,
    marginRight: 'auto',

  }
})
