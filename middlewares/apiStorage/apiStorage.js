import { NEW_DECK, FETCH_DATA } from '../../actions/deckActions'
import { mergeDecks, loadDecks, loadQuestions } from '../api/api'

const apiStorage = store => next => (action) => {
  switch (action.type) {
    case NEW_DECK: {
      mergeDecks([...store.getState().decks.items, action.payload])
      return next(action)
    }
    case FETCH_DATA: {
      loadDecks(store)
      loadQuestions(store)
    }
    default:
      return next(action)
  }
}

export default apiStorage
