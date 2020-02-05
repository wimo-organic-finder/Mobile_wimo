/* @flow weak */

import React from 'react';
import {View,Text,StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {deleteProduct,addQuantity,removeQuantity} from '../store/cart/cartAction'


const CartItem = ({item,deleteProduct, addQuantity, removeQuantity}) => (
  <View style={styles.container}>
    <Image style={{width: 100, height: 100}} source={{url : item.img}} />
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text >Prix : {item.prix_unit} €</Text>
      <View style={styles.quantity}>
        <TouchableOpacity onPress={() => removeQuantity(item.id)} >
          <Image style={styles.icon} source={require('../images/minus.png')} />
        </TouchableOpacity>
        <Text style={{marginRight: 10, marginLeft:10}}>{item.quantityCart}</Text>
        <TouchableOpacity onPress={() => addQuantity(item.id)}>
          <Image style={styles.icon} source={require('../images/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.delete}>
      <TouchableOpacity onPress={() => deleteProduct(item.id)} >
        <Image style={styles.icon} source={require('../images/trash.png')} />
      </TouchableOpacity>
    </View>
  </View>
)

export default connect(null,{deleteProduct,addQuantity,removeQuantity})(CartItem)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  quantity: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  card: {
    flex: 1,
    padding: 10,
    marginRight: 'auto',

  },
  delete: {
    flex:1,
    alignItems: 'flex-end',
    marginRight: 20
  },
  icon: {
    width:25,
    height:25,
  }
})
