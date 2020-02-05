/* @flow weak */

import React from 'react';
import {Text, StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';
import {connect} from 'react-redux'

const CartButton = ({navigation,quantity}) => (
  <TouchableOpacity  style={{position: 'relative'}} onPress={() => navigation.navigate('Cart')} >
    <ImageBackground style={styles.container} source={require('../images/online-shop.png')}>
      <Text style={{position:'absolute',top:-10, left:6 ,fontSize:15 ,fontWeight: 'bold', color:'white'}} >{quantity}</Text>
    </ImageBackground>
  </TouchableOpacity>
)

export default connect(state => {
  return {
    quantity: state.data.length
  }
})(CartButton)

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    margin:20,
  },
});
