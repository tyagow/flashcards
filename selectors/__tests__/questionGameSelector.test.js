import getCurrentQuestion from '../questionGameSelector'

describe('questionGameSelector', () => {
  const props = {
    questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
  }
  it('should select all objects questions from props.questions filtering only those who`s ids are not inside state.answered ', () => {
    const state = {
      answered: [],
    }
    expect(getCurrentQuestion(state, props)).toEqual({ id: 1 })
  })
  it('should select all objects questions from props.questions filtering only those who`s ids are not inside state.answered when answered has questions', () => {
    const state = {
      answered: [1],
    }
    expect(getCurrentQuestion(state, props)).toEqual({ id: 2 })
  })
  it('should return empty object when all questions id from props.questions are inside state.answered', () => {
    const state = {
      answered: [1, 2, 3],
    }
    expect(getCurrentQuestion(state, props)).toEqual({})
  })
})
