import React from 'react'
import {Button, Image, StyleSheet} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Product from '../components/Product'
import ProductDetail from '../components/ProductDetail'
import Cart from '../components/Cart'
import CartButton from '../components/CartButton'
const ProductNavigator = createStackNavigator(
  {
    Product: {
      screen: Product,
      navigationOptions: {

      }
    },
    Detail: {
      screen: ProductDetail,
      navigationOptions: {
      }
    },
    Cart: {
      screen: Cart
    }
  },{
    defaultNavigationOptions:({navigation}) => ({
      title: <Image style={{width:30, height:25}} source={require('../images/wimo-logo.png')} />,
      headerBackTitleVisible: false,
      headerRight: () => <CartButton navigation={navigation} />,
      headerStyle: {
        backgroundColor: 'rgb(64, 205, 125)' // Specify the height of your custom header
      }
    })
  }

)

export default createAppContainer(ProductNavigator)
