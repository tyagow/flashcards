import deckReducer from './deckReducer'
import { NEW_DECK } from '../actions/deckActions'

describe('deckReducer', () => {
  it('should handle initial state', () => {
    expect(deckReducer(undefined, {})).toEqual({
      items: [],
    })
  })
  it('should add new deck when action = NEW_DECK', () => {
    expect(deckReducer(undefined, { type: NEW_DECK, payload: 'New Deck' })).toEqual({
      items: ['New Deck'],
    })
  })
})
