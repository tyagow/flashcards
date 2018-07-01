import { createSelector } from 'reselect'

const getQuestions = state => state.decks.items
const getDeckQuestions = state => state.decks.item.questions

const getQuizQuestions = createSelector(
  [getQuestions, getDeckQuestions],
  (questions, deckQuestions) => questions.filter(question => deckQuestions.indexOf(question.id) >= 0),
)
export default getQuizQuestions
