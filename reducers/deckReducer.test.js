import deckReducer from './deckReducer'
import { NEW_DECK, DECK_SELECTED } from '../actions/deckActions'

describe('deckReducer', () => {
  it('should handle initial state', () => {
    expect(deckReducer(undefined, {})).toEqual({
      items: [],
      item: {},
    })
  })
  it('should add new deck when action = NEW_DECK', () => {
    expect(deckReducer(undefined, { type: NEW_DECK, payload: 'New Deck' })).toEqual({
      items: ['New Deck'],
      item: {},
    })
  })
  it('should add select deck when action = DECK_SELECTED', () => {
    const obj = { id: 1 }
    expect(deckReducer(undefined, { type: DECK_SELECTED, payload: obj })).toEqual({ items: [], item: obj })
  })
})
