import { createStackNavigator } from 'react-navigation'
import HomeScreen from './../screens/Home/Home'

const HomeStackNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null },
  },
  // DeckDetail: {
  //   screen: DeckDetail,
  // },
})
export default HomeStackNavigation
