import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import { purple, white } from './../utils/colors'
import HomeStack from './HomeStackNavigation'
import { NewDeck } from './../screens'


const Tabs = createBottomTabNavigator(
  {
    home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={30} color={tintColor} />,
      },
    },
    newDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  },
)

export default Tabs
