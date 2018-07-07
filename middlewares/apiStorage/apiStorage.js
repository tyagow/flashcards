import { NEW_DECK, FETCH_DECKS } from '../../actions/deckActions'
import { mergeDecks, loadDecks } from '../api/api'

const apiStorage = store => next => (action) => {
  switch (action.type) {
    case NEW_DECK: {
      console.log(store.getState())
      mergeDecks([...store.getState().decks.items, action.payload])
      return next(action)
    }
    case FETCH_DECKS: {
      loadDecks(store)
    }
    default:
      return next(action)
  }
}

export default apiStorage
