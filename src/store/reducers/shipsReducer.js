import * as actionTypes from '../constants'

const initialState = {
  shipsLoading: false,
  shipsError: null,
  ships: [],
  player1Card: {},
  player2Card: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHIPS_BEGIN:
      return {
        ...state,
        shipsLoading: true,
        shipsError: null
      }
    case actionTypes.LOAD_SHIPS_SUCCESS:
      return {
        ...state,
        shipsLoading: false,
        shipsError: null,
        ships: action.payload
      }
    case actionTypes.LOAD_SHIPS_ERROR:
      return {
        ...state,
        shipsLoading: false,
        shipsError: action.error
      }
    case actionTypes.LOAD_PLAYER1_CARD:
      return {
        ...state,
        shipsLoading: false,
        player1Card: action.payload
      }
    case actionTypes.LOAD_PLAYER2_CARD:
      return {
        ...state,
        shipsLoading: false,
        player1Card: action.payload
      }
    default:
      return state
  }
}

export default reducer
