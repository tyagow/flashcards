import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import idInjector from '../middlewares/idInjector/idInjector'
import questionInjector from '../middlewares/questionInjector/questionInjector'

const initialState = {}
const middleware = [idInjector, questionInjector]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
)


export default store
