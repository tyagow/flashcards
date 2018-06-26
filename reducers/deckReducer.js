import { NEW_DECK, DECK_SELECTED } from '../actions/deckActions'

const initialState = {
  items: [],
  item: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_DECK: {
      const deck = action.payload
      const decks = state.items
      return { ...state, items: [...decks, deck] }
    }
    case DECK_SELECTED: {
      const deck = action.payload
      return { ...state, item: { ...deck } }
    }
    default:
      return state
  }
}
