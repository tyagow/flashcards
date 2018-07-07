import deckReducer from '../deckReducer'
import { NEW_DECK, DECK_SELECTED, LOAD_DECKS, UPDATE_DECKS } from '../../actions/deckActions'
import { NEW_QUESTION } from '../../actions/questionActions'

const initialState = {
  items: [],
  item: {},
}
describe('deckReducer', () => {
  it('should handle initial state', () => {
    expect(deckReducer(undefined, {})).toEqual(initialState)
  })
  it('should add new deck when action = NEW_DECK', () => {
    const deck = { title: 'New Deck' }
    expect(deckReducer(undefined, { type: NEW_DECK, payload: deck })).toEqual({
      items: [{ ...deck, questions: [] }],
      item: {},
    })
  })
  it('should add select deck when action = DECK_SELECTED', () => {
    const obj = { id: 1 }
    expect(deckReducer(undefined, { type: DECK_SELECTED, payload: obj })).toEqual({
      items: [],
      item: obj,
    })
  })
  it('should add payload.id to item.questions', () => {
    const obj = { id: 1 }
    expect(deckReducer(
      {
        items: [],
        item: { id: 13, title: 'Deck #1', questions: [] },
      },
      { type: NEW_QUESTION, payload: obj },
    )).toEqual({ items: [], item: { id: 13, title: 'Deck #1', questions: [1] } })
  })

  it('should add payload.id to item.questions and preserve item.questions ids', () => {
    const obj = { id: 2 }
    expect(deckReducer(
      {
        items: [],
        item: { id: 13, title: 'Deck #1', questions: [1] },
      },
      { type: NEW_QUESTION, payload: obj },
    )).toEqual({ items: [], item: { id: 13, title: 'Deck #1', questions: [1, 2] } })
  })
  it('should update items with given payload', () => {
    const obj = [{ id: 2 }]
    expect(deckReducer(
      {
        items: [],
        item: {},
      },
      { type: UPDATE_DECKS, payload: obj },
    )).toEqual({ items: obj, item: {} })
  })
})
