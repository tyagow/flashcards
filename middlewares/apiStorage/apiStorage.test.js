import apiStorage from './apiStorage'
import * as api from '../api/api'
import { NEW_DECK, FETCH_DATA } from '../../actions/deckActions'
import { NEW_QUESTION } from '../../actions/questionActions'

jest.mock('../api/api')
const setupMiddleware = (actionType, decksItems) => {
  const store = {
    dispatch: jest.fn(),
    getState: () => ({ decks: { items: decksItems } }),
  }
  const next = jest.fn()

  const action = { type: actionType, payload: { id: 1 } }
  const result = apiStorage(store)(next)(action)
  return {
    store,
    next,
    action,
    result,
  }
}
describe('apiStorage  middleware', () => {
  it('should get any NEW_DECK action and save in de AsyncStore', () => {
    const decks = [{ id: 2 }, { id: 3 }]
    const { action, store } = setupMiddleware(NEW_DECK, decks)
    expect(api.mergeDecks.mock.calls.length).toBe(1)
    expect(api.mergeDecks.mock.calls[0][0]).toEqual([
      ...store.getState().decks.items,
      action.payload,
    ])
  })
  it('should get any FETCH_DATA action and call api.loadDecks', () => {
    const decks = [{ id: 1 }, { id: 2 }]
    api.loadDecks.mockReturnValue(decks)
    setupMiddleware(FETCH_DATA, [])
    expect(api.loadDecks.mock.calls.length).toBe(1)
    expect(api.loadQuestions.mock.calls.length).toBe(1)
  })
  it('should get any NEW_QUESTION action and call api.mergeQuestions', () => {
    const questions = [{ id: 2 }, { id: 3 }]
    const { action, store } = setupMiddleware(NEW_DECK, questions)
    expect(api.mergeQuestions.mock.calls.length).toBe(1)
    expect(api.mergeQuestions.mock.calls[0][0]).toEqual([
      ...store.getState().questions.items,
      action.payload,
    ])
  })
})
