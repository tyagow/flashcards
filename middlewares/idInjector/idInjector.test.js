import idInjector from './idInjector'
import { NEW_DECK } from '../../actions/deckActions'
import generateId from '../../utils/generateId'
import { NEW_QUESTION } from '../../actions/questionActions'

jest.mock('../../utils/generateId')
generateId.mockImplementation(() => 123)
const setupMiddleware = (actionType) => {
  const store = { dispatch: jest.fn() }
  const next = jest.fn()

  const action = { type: actionType, payload: {} }
  const result = idInjector(store)(next)(action)
  return {
    store, next, action, result,
  }
}
describe('idInjector middleware', () => {
  it('should inject id if action type is NEW_DECK', () => {
    const { next, action } = setupMiddleware(NEW_DECK)
    expect(next).toBeCalledWith(action)
    expect(action.payload.id).toEqual(123)
  })
  it('should inject id if action type is NEW_QUESTION', () => {
    const { next, action } = setupMiddleware(NEW_QUESTION)
    expect(next).toBeCalledWith(action)
    expect(action.payload.id).toEqual(123)
  })
  it('should inject id if action type is NEW_QUESTION', () => {
    const { next, action } = setupMiddleware('OTHER')
    expect(next).toBeCalledWith(action)
    expect(action.payload).toEqual({})
  })
})
