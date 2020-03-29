import * as actionTypes from '../constants'

const initialState = {
  player1Card: {},
  player2Card: {},
  winner: undefined,
  loser: undefined,
  player1Score: 0,
  player2Score: 0
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
    case actionTypes.SHOW_WINNER:
      return {
        ...state,
        winner: action.payload
      }
    case actionTypes.SHOW_LOSER:
      return {
        ...state,
        loser: action.payload
      }
    case actionTypes.SHOW_DRAW:
      return {
        ...state,
        winner: action.payload,
        loser: undefined,
        player1Score: state.player1Score + 1,
        player2Score: state.player2Score + 1
      }
    case actionTypes.PLAYER1_WINS:
      return {
        ...state,
        player1Card: action.payload,
        player2Card: {},
        winner: undefined,
        loser: undefined,
        player1Score: state.player1Score + 1,
        player2Score: state.player2Score - 1
      }
    case actionTypes.PLAYER2_WINS:
      return {
        ...state,
        player1Card: {},
        player2Card: action.payload,
        winner: undefined,
        loser: undefined,
        player1Score: state.player1Score - 1,
        player2Score: state.player1Score + 1
      }
    default:
      return state
  }
}

export default reducer
