import { createSelector } from 'reselect'

const getQuestions = (state, props) => props.questions
const getQuestionsAnswered = (state, props) => state.answered

const getQuizQuestion = createSelector(
  [getQuestions, getQuestionsAnswered],
  (questions, answers) => {
    const noAnsweredQuestions = questions.filter(e => answers.indexOf(e.id) < 0)
    return noAnsweredQuestions[0] || {}
  },
)
export default getQuizQuestion
