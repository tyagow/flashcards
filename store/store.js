import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import idInjector from '../middlewares/idInjector/idInjector'

const initialState = {}
const middleware = [idInjector]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
)


export default store
