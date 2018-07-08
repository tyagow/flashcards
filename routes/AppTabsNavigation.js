import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { Feather, Entypo } from '@expo/vector-icons'

import { primary, textSecondary, textPrimary, secondary } from './../utils/colors'
import HomeStack from './HomeStackNavigation'
import { NewDeck } from './../screens'


const Tabs = createBottomTabNavigator(
  {
    home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Feather name="list" size={30} color={tintColor} />,
      },
    },
    newDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="add-to-list" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? textSecondary : textPrimary,
      tintColor: textPrimary,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? secondary : primary,
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
