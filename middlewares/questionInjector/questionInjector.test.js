import questionInjector from './questionInjector'
import { NEW_DECK, ADD_QUESTION } from '../../actions/deckActions'
import { NEW_QUESTION } from '../../actions/questionActions'

const setupMiddleware = (actionType) => {
  const store = { dispatch: jest.fn() }
  const next = jest.fn()

  const action = { type: actionType, payload: { id: 1 } }
  const result = questionInjector(store)(next)(action)
  return {
    store, next, action, result,
  }
}
describe('questionInjector  middleware', () => {
  it('should inject empty questions array if action type is NEW_DECK', () => {
    const { next, action } = setupMiddleware(NEW_DECK)
    expect(next).toBeCalledWith({ ...action, payload: { ...action.payload, questions: [] } })
  })
})
