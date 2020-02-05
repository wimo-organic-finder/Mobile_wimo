/* @flow weak */

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import DropBounce from '../animation/DropBounceToCenter'

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
    flex:1,
    backgroundColor: 'rgb(64, 205, 125)'
  }
});
