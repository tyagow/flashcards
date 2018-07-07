import { NEW_QUESTION } from '../actions/questionActions'

const initialState = {
  items: [],
  item: {},
}

const initialStateFull = {
  items: [
    { id: 1, title: 'Question One Title Here', answer: 'Answer One Question' },
    { id: 2, title: 'Question Two Title Here', answer: 'Answer Two Question' },
  ],
  item: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_QUESTION: {
      const question = action.payload
      const questions = state.items
      return { ...state, items: [...questions, question] }
    }
    default:
      return state
  }
}
