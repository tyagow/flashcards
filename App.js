import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Constants } from 'expo'

import store from './store/store'
import { purple } from './utils/colors'

import Tabs from './routes/AppTabsNavigation'

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)
MyStatusBar.propTypes = {
  backgroundColor: PropTypes.string,
}
MyStatusBar.defaultProps = {
  backgroundColor: purple,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <MyStatusBar backgroundColor={purple} barStyle="light-content" />
      <Tabs />
    </View>
  </Provider>
)

export default App

