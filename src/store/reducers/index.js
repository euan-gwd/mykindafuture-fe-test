import { combineReducers } from 'redux'
import shipsReducer from './shipsReducer'

const rootReducer = combineReducers({
  ships: shipsReducer
})

export default rootReducer
