import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import {FirstScreenLoad} from './Loading'
import Navigation from './navigation/Navigation'
import {Provider} from 'react-redux'
import store from './store'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
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
      <Provider store={store}>
        <View style={styles.container}>
          {this.state.loading ? <FirstScreenLoad /> : <Navigation />}
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
