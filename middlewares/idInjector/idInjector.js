import generateId from '../../utils/generateId'
import { NEW_DECK } from '../../actions/deckActions'
import { NEW_QUESTION } from '../../actions/questionActions'

const idInjector = () => next => (action) => {
  // Should inject an id if an object dont have it
  if (action.type !== NEW_DECK && action.type !== NEW_QUESTION) {
    return next(action)
  }
  // Check if object  has an id and inject one if it dosen't
  const object = action.payload

  if (!object.id) {
    object.id = generateId()
    action.payload = object
  }
  return next(action)
}

export default idInjector
