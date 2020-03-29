import { combineReducers } from 'redux'
import shipsReducer from './shipsReducer'
import playersReducer from './playersReducer'

const rootReducer = combineReducers({
  ships: shipsReducer,
  players: playersReducer
})

export default rootReducer
