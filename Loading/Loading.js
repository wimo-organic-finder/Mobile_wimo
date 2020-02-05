/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,ActivityIndicator
} from 'react-native';

const Loading = ({}) => (
  <View style={styles.loading_container}>
    <ActivityIndicator size='large' />
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
