import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/Home/Home'
import DeckDetail from '../screens/DeckDetail'
import NewQuestion from '../screens/NewQuestion'
import QuizGame from '../screens/QuizGame'

const HomeStackNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        height: 30,
        backgroundColor: '#0f0',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  NewQuestion: {
    screen: NewQuestion,
  },
  QuizGame: {
    screen: QuizGame,
  },
})
export default HomeStackNavigation
