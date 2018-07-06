import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/Home/Home'
import DeckDetail from '../screens/DeckDetail'
import NewQuestion from '../screens/NewQuestion'
import QuizGame from '../screens/QuizGame'
import { headerBackgroundColor, headerStyle } from '../styles/header'

const HomeStackNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: headerStyle,
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: headerStyle,
  },
  QuizGame: {
    screen: QuizGame,
    navigationOptions: headerStyle,
  },
})
export default HomeStackNavigation
