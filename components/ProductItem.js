/* @flow weak */

import React from 'react'
import {
  View,
  Text,
  StyleSheet, Image, TouchableOpacity, Button
} from 'react-native'
import {connect} from 'react-redux'
import {deleteProduct,addQuantity,removeQuantity} from '../store/cart/cartAction'

const MyComponent = ({ item, showProduct,panier,deleteProduct, addQuantity, removeQuantity }) => (
    <View>
      {panier ? (
        <View style={styles.container}>
          <Image style={{width: 100, height: 100}} source={{url : item.img}} />
          <View style={styles.card} >
            <Text style={styles.title}>{item.name}</Text>
            <Text>Vous en voulez : {item.quantityCart}</Text>
            <View style={styles.container}>
              <Button title='-' onPress={() => removeQuantity(item.id)} />
              <Button title='+' onPress={() => addQuantity(item.id)} />
            </View>
          </View>
          <View style={styles.prix}>
            <Text >Prix : {item.prix_unit} €</Text>
            <Button title='Supprimer' onPress={() => deleteProduct(item.id)} />

          </View>
        </View>) : (
        <TouchableOpacity style={styles.container} onPress={() => showProduct(item.id)}>
        <Image style={{width: 100, height: 100}} source={{url : item.img}} />
        <View style={styles.card} >
          <Text style={styles.title}>{item.name}</Text>
          {item.quantity > 0 ? <Text>Il en reste : {item.quantity}</Text> : <Text style={{color: 'red'}}> Rupture de stock </Text>}
        </View>
        <View style={styles.prix}>
          <Text >Prix : {item.prix_unit} €</Text>
        </View>
      </TouchableOpacity>
      )}
  </View>
)

export default connect(null,{deleteProduct,addQuantity,removeQuantity})(MyComponent)

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
