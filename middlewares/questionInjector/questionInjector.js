import { NEW_DECK } from '../../actions/deckActions'

const questionInjector = () => next => (action) => {
  // Should inject an id if an object dont have it
  if (action.type !== NEW_DECK) {
    return next(action)
  }
  // create an empty array inside Deck object
  const payload = { ...action.payload, questions: [] }
  return next({ ...action, payload })
}

export default questionInjector
