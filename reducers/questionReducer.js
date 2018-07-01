import { NEW_QUESTION } from '../actions/questionActions'

const initialState = {
  items: [],
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
