import { NEW_DECK } from '../actions/deckActions'

const initialState = {
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_DECK: {
      const deck = action.payload
      const decks = state.items
      return { ...state, items: [...decks, deck] }
    }
    default:
      return state
  }
}
