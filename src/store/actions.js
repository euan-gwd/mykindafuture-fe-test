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

const getRandomShip = (ships) => ships[Math.floor(Math.random() * ships.length)]

export const loadShips = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOAD_SHIPS_BEGIN })
    try {
      const ships = await getShips()
      const getPlayer1Card = getRandomShip(ships)
      dispatch({ type: actionTypes.LOAD_SHIPS_SUCCESS, payload: ships })
      dispatch({ type: actionTypes.LOAD_PLAYER1_CARD, payload: getPlayer1Card })
    } catch (error) {
      dispatch({ type: actionTypes.LOAD_SHIPS_ERROR, error })
    }
  }
}

export const getNewPlayerCard = (player) => {
  return (dispatch, getState) => {
    const ships = getState().ships.ships
    const getPlayerCard = getRandomShip(ships)
    const type = player === 1 ? actionTypes.LOAD_PLAYER2_CARD : actionTypes.LOAD_PLAYER1_CARD
    dispatch({ type: type, payload: getPlayerCard })
  }
}
