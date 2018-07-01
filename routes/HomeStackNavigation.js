import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/Home/Home'
import DeckDetail from '../screens/DeckDetail'
import NewQuestion from '../screens/NewQuestion'
// import Quiz from '../screens/Quiz'

const HomeStackNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null },
  },
  DeckDetail: {
    screen: DeckDetail,
  },
  NewQuestion: {
    screen: NewQuestion,
  },
  // Quiz: {
  //   screen: Quiz,
  // },
})
export default HomeStackNavigation
