/* @flow weak */

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import DropBounce from '../animation/DropBounce'

const FirstScreenLoad = ({}) => (
  <View style={styles.screen}>
    <DropBounce>
      <Image source={require('../images/wimo-logo.png')} />
    </DropBounce>
  </View>
);

export default FirstScreenLoad

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgb(64, 205, 125)'
  }
});
