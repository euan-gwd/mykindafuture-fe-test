import * as actionTypes from './constants'

const getShips = () => {
  const apiReq1 = fetch('/starships/')
    .then((res) => res.json())
    .then((data) => data.results)
  const apiReq2 = fetch('/starships/?page=2')
    .then((res) => res.json())
    .then((data) => data.results)
  const apiReq3 = fetch('/starships/?page=3')
    .then((res) => res.json())
    .then((data) => data.results)
  const apiReq4 = fetch('/starships/?page=4')
    .then((res) => res.json())
    .then((data) => data.results)
  const getAllShips = Promise.all([apiReq1, apiReq2, apiReq3, apiReq4])
  return getAllShips.then((results) => {
    const allShips = results.flat()
    return allShips
  })
}

export const loadShips = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOAD_SHIPS_BEGIN })
    try {
      const ships = await getShips()
      dispatch({ type: actionTypes.LOAD_SHIPS_SUCCESS, payload: ships })
    } catch (error) {
      dispatch({ type: actionTypes.LOAD_SHIPS_ERROR, error })
    }
  }
}
