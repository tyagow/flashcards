import { createStackNavigator } from 'react-navigation'
import HomeScreen from './../screens/Home/Home'
import DeckDetail from './../screens/DeckDetail/'

const HomeStackNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null },
  },
  DeckDetail: {
    screen: DeckDetail,
  },
})
export default HomeStackNavigation
