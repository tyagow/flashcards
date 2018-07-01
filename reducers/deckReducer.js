import { NEW_DECK, DECK_SELECTED } from '../actions/deckActions'
import { NEW_QUESTION } from '../actions/questionActions'

const initialState = {
  items: [],
  item: {},
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
      const { item } = state
      return { ...state, item: { ...item, questions: [...item.questions, question.id] } }
    }
    default:
      return state
  }
}
