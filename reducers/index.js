import { combineReducers } from 'redux'
import decks from './deckReducer'
import questions from './questionReducer'

export default combineReducers({
  decks,
  questions,
})
