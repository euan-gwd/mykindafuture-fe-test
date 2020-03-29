import * as actionTypes from './constants'
import mockData from '../mockData.json'

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
      // const ships = await getShips()
      const ships = mockData.ships
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

export const compareCards = (player, selectedItem) => {
  return (dispatch, getState) => {
    if (typeof selectedItem === 'string') {
      const player1Card = getState().players.player1Card[selectedItem]
      const player2Card = getState().players.player2Card[selectedItem]
      const player1CardItem = player1Card === 'unknown' || player1Card === 'n/a' ? 0 : Number(player1Card)
      const player2CardItem = player2Card === 'unknown' || player2Card === 'n/a' ? 0 : Number(player2Card)

      const player1CardGreater = player1CardItem > player2CardItem
      const player2CardGreater = player1CardItem < player2CardItem
      const playerCardsEqual = player1CardItem === player2CardItem

      if (player1CardGreater) {
        dispatch({ type: actionTypes.SHOW_WINNER, payload: 1 })
        dispatch({ type: actionTypes.SHOW_LOSER, payload: 2 })
      }

      if (player2CardGreater) {
        dispatch({ type: actionTypes.SHOW_WINNER, payload: 2 })
        dispatch({ type: actionTypes.SHOW_LOSER, payload: 1 })
      }

      if (playerCardsEqual) {
        dispatch({ type: actionTypes.SHOW_DRAW, payload: 'draw' })
      }
    }

    if (typeof selectedItem === 'number') {
      const player1CardItem = getState().players.player1Card.films.length
      const player2CardItem = getState().players.player2Card.films.length

      if (player1CardItem > player2CardItem) {
        dispatch({ type: actionTypes.SHOW_WINNER, payload: 1 })
        dispatch({ type: actionTypes.SHOW_LOSER, payload: 2 })
      } else if (player2CardItem < player1CardItem) {
        dispatch({ type: actionTypes.SHOW_WINNER, payload: 2 })
        dispatch({ type: actionTypes.SHOW_LOSER, payload: 1 })
      } else if (player2CardItem === player1CardItem) {
        dispatch({ type: actionTypes.SHOW_DRAW, payload: 'draw' })
      }
    }
  }
}
export const loadNewGame = () => {
  return (dispatch, getState) => {
    const winningPlayer = getState().players.winner
    const ships = getState().ships.ships

    if (winningPlayer === 1) {
      const getPlayerCard = getRandomShip(ships)
      dispatch({ type: actionTypes.PLAYER1_WINS, payload: getPlayerCard })
    } else if (winningPlayer === 2) {
      const getPlayerCard = getRandomShip(ships)
      dispatch({ type: actionTypes.PLAYER2_WINS, payload: getPlayerCard })
    } else if (winningPlayer === 'draw') {
      const getPlayerCard = getRandomShip(ships)
      dispatch({ type: actionTypes.PLAYER1_WINS, payload: getPlayerCard })
    }
  }
}
