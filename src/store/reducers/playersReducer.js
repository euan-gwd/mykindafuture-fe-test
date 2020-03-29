import * as actionTypes from '../constants'

const initialState = {
  player1Card: {},
  player2Card: {}
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
    default:
      return state
  }
}

export default reducer
