import getQuizQuestions from '../questionSelector'

describe('questionSelector', () => {
  const state = {
    questions: { items: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    decks: {
      item: { questions: [1, 2] },
      items: [],
    },
  }
  it('should select all objects questions from state.questions.items filtering only those who`s ids are inside state.decks.item.questions ', () => {
    expect(getQuizQuestions(state)).toEqual([{ id: 1 }, { id: 2 }])
  })
})
