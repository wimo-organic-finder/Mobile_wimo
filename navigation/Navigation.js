import React from 'react'
import {Image, StyleSheet} from 'react-native'
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
      screen: ProductDetail,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'rgb(64, 205, 125)' // Specify the height of your custom header
        }
      }
    }
  }

)

const CartNavigator = createStackNavigator(
  {
    Cart: {
      screen: Cart,
      navigationOptions: {
        title: "Panier",
        headerStyle: {
          backgroundColor: 'rgb(64, 205, 125)' // Specify the height of your custom header
        }
      }
    }
  }

)


const TabNavigator = createBottomTabNavigator({
  Product: {
    screen: ProductNavigator,
    navigationOptions: {

      tabBarIcon: () => {
        return <Image
          source={require('../images/search.png')}
          style={styles.icon}/>
      }
    }
  },
  Cart: {
    screen: CartNavigator,
    navigationOptions: {

      tabBarIcon: () => {
        return <Image
          source={require('../images/online-shop.png')}
          style={styles.icon}/>
      }
  }
  }
},  {
    tabBarOptions: {
      activeBackgroundColor: 'rgb(64, 205, 125)', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
  })

  const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }})

export default createAppContainer(TabNavigator)
