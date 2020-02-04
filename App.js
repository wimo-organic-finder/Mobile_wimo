import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import DropBounce from './animation/DropBounce'
import Navigation from './navigation/Navigation'
import Product from './components/Product'

export default class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  _screenLoad () {
    return (
      <View style={styles.screen}>
        <DropBounce>
          <Image source={require('./images/wimo-logo.png')} />
        </DropBounce>
      </View>
    )
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2500)
  }

  render () {
    return (
      <View style={styles.container}>

        {this.state.loading ? this._screenLoad() : (
          <Navigation />
        )}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  screen: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgb(64, 205, 125)'
  }
})
