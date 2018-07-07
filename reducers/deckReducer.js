import { NEW_DECK, DECK_SELECTED, LOAD_DECKS, UPDATE_DECKS } from '../actions/deckActions'
import { NEW_QUESTION } from '../actions/questionActions'

const initialState = {
  items: [],
  item: {},
}

const initialStateFull = {
  items: [{ id: '1', title: 'Deck One', questions: [1, 2] }],
  item: { id: '1', title: 'Deck One', questions: [1, 2] },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_DECK: {
      const deck = { ...action.payload, questions: [] }
      const decks = state.items
      return { ...state, items: [...decks, deck] }
    }
    case DECK_SELECTED: {
      const deck = action.payload
      return { ...state, item: { ...deck } }
    }
    case NEW_QUESTION: {
      const question = action.payload
      const { item, items } = state
      const newItem = { ...item, questions: [...item.questions, question.id] }
      return { items: [...items.filter(e => e.id !== item.id), newItem], item: newItem }
    }
    case UPDATE_DECKS: {
      const { item } = state
      if (action.payload) {
        return { items: action.payload, item }
      }
      return state
    }
    default:
      return state
  }
}
