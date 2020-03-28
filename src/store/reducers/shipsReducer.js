import * as actionTypes from '../constants'

const initialState = {
  shipsLoading: false,
  shipsError: null,
  ships: []
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
    default:
      return state
  }
}

export default reducer
