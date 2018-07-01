import { NEW_QUESTION, createQuestion } from '../questionActions'

describe('NEW_QUESTION', () => {
  it('action should return expected object', () => {
    const expected = { type: NEW_QUESTION, payload: 'Title Deck' }
    expect(createQuestion('Title Deck')).toEqual(expected)
  })
})

