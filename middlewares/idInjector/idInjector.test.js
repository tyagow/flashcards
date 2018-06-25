import idInjector from './idInjector'
import { NEW_DECK } from '../../actions/deckActions'
import generateId from '../../utils/generateId'

jest.mock('../../utils/generateId')
generateId.mockImplementation(() => 123)
const setupMiddleware = () => {
  const store = { dispatch: jest.fn() }
  const next = jest.fn()
  const action = { type: NEW_DECK, payload: {} }
  const result = idInjector(store)(next)(action)
  return {
    store, next, action, result,
  }
}
describe('idInjector middleware', () => {
  it('should inject id if action type is NEW_DECK', () => {
    const { next, action } = setupMiddleware()
    expect(next).toBeCalledWith(action)
    expect(action.payload.id).toEqual(123)
  })
  it('should pass any other action that isn`t NEW_DECK', () => {

  })
})
