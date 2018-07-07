export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS'
export const NEW_QUESTION = 'NEW_QUESTION'
export const createQuestion = question => ({
  type: NEW_QUESTION,
  payload: question,
})
