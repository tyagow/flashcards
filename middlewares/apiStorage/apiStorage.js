import { NEW_DECK, FETCH_DATA, selectDeck, UPDATE_DECKS } from '../../actions/deckActions'
import { mergeDecks, loadDecks, loadQuestions, mergeQuestions } from '../../api/api'
import { NEW_QUESTION } from '../../actions/questionActions'

const apiStorage = store => next => (action) => {
  switch (action.type) {
    case NEW_DECK: {
      mergeDecks([...store.getState().decks.items, action.payload])
      return next(action)
    }
    case FETCH_DATA: {
      loadDecks(store.dispatch)
      loadQuestions(store.dispatch)
      break
    }
    case NEW_QUESTION: {
      const deck = store.getState().decks.item
      mergeQuestions([...store.getState().questions.items, action.payload])
      const deckSelected = { ...deck, questions: [...deck.questions, action.payload.id] }
      const decks = store.getState().decks.items.filter(e => e.id !== deckSelected.id)
      mergeDecks([...decks, deckSelected])
      return next(action)
    }
    default:
      return next(action)
  }
}

export default apiStorage
