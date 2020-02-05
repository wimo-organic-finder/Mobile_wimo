/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Dimensions
} from 'react-native'

class firstLoadAnimation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: new Animated.Value(-300)
    }
  }

  componentDidMount () {
    Animated.spring(
      this.state.top,
      {
        toValue: 0,
        speed: 2,
        bounciness: 10
      }
    ).start()
  }

  render () {
    return (
      <Animated.View style={[styles.container, { top: this.state.top }]}>
        {this.props.children}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default firstLoadAnimation
