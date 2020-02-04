import React from 'react'
import {Image} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Product from '../components/Product'
import ProductDetail from '../components/ProductDetail'
import Cart from '../components/Cart'

const ProductNavigator = createStackNavigator(
  {
    Product: {
      screen: Product,
      navigationOptions: {
        title: <Image style={{width:30, height:25}} source={require('../images/wimo-logo.png')} />,
        headerStyle: {
          backgroundColor: 'rgb(64, 205, 125)' // Specify the height of your custom header
        }
      }
    },
    Detail: {
      screen: ProductDetail
    }
  }

)

const CartNavigator = createStackNavigator(
  {
    Cart: {
      screen: Cart,
      navigationOptions: {
        title: "Panier"
      }
    }
  }

)


const TabNavigator = createBottomTabNavigator({
  Product: {
    screen: ProductNavigator
  },
  Cart: {
    screen: CartNavigator
  }
},  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
    }
  })
export default createAppContainer(TabNavigator)
