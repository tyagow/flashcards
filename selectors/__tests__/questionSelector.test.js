import getQuizQuestions from '../questionSelector'

describe('questionSelector', () => {
  const state = {
    decks: {
      item: { questions: [1, 2] },
      items: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
  }
  it('should select all objects questions from state.decks.items filtering only those who`s ids are inside state.decks.item.questions ', () => {
    expect(getQuizQuestions(state)).toEqual([{ id: 1 }, { id: 2 }])
  })
})
