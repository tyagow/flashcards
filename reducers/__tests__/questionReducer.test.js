import questionReducer from '../questionReducer'
import { NEW_QUESTION, UPDATE_QUESTIONS } from '../../actions/questionActions'

describe('questionReducer', () => {
  it('should handle initial state', () => {
    expect(questionReducer(undefined, {})).toEqual({
      items: [],
      item: {},
    })
  })
  it('should add new deck when action = NEW_QUESTION', () => {
    const question = { title: 'New Question' }
    expect(questionReducer(undefined, { type: NEW_QUESTION, payload: question })).toEqual({
      items: [question],
      item: {},
    })
  })
  it('should update items with given payload', () => {
    const obj = [{ id: 2 }]
    expect(questionReducer(
      {
        items: [],
        item: {},
      },
      { type: UPDATE_QUESTIONS, payload: obj },
    )).toEqual({ items: obj, item: {} })
  })
})
