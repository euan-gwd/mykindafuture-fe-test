import * as actionTypes from '../constants'

const initialState = {
  player1Card: {},
  player2Card: {},
  winner: undefined
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_PLAYER1_CARD:
      return {
        ...state,
        player1Card: action.payload
      }
    case actionTypes.LOAD_PLAYER2_CARD:
      return {
        ...state,
        player2Card: action.payload
      }
    case actionTypes.GET_WINNER:
      return {
        ...state,
        winner: action.payload
      }
    case actionTypes.PLAYER1_WINS:
      return {
        ...state,
        player1Card: action.payload,
        player2Card: {},
        winner: undefined
      }
    case actionTypes.PLAYER2_WINS:
      return {
        ...state,
        player1Card: {},
        player2Card: action.payload,
        winner: undefined
      }
    default:
      return state
  }
}

export default reducer
