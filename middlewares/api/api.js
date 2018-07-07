import { AsyncStorage } from 'react-native'
import { UPDATE_DECKS } from '../../actions/deckActions'
import { UPDATE_QUESTIONS } from '../../actions/questionActions'

const DECKS_STORAGE_KEY = 'Flashcards:decks'
const QUESTIONS_STORAGE_KEY = 'Flashcards:questions'

export function mergeDecks(decks) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({ decks }))
}
export const loadItem = (key, callback) => AsyncStorage.getItem(key, callback)

export const loadDecks = ({ dispatch }) =>
  loadItem(
    DECKS_STORAGE_KEY,
    (err, results) =>
      (results ? dispatch({ type: UPDATE_DECKS, payload: JSON.parse(results).decks }) : null),
  )


export const loadQuestions = ({ dispatch }) =>
  loadItem(
    QUESTIONS_STORAGE_KEY,
    (err, results) =>
      (results ?
        dispatch({ type: UPDATE_QUESTIONS, payload: JSON.parse(results).questions })
        :
        null
      ),
  )

