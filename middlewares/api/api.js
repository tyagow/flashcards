import { AsyncStorage } from 'react-native'
import { UPDATE_DECKS } from '../../actions/deckActions'

const DECKS_STORAGE_KEY = 'Flashcards:decks'
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

