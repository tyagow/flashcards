import { NEW_QUESTION, UPDATE_QUESTIONS } from '../actions/questionActions'

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
    case UPDATE_QUESTIONS:
      return { ...state, items: action.payload }
    default:
      return state
  }
}
