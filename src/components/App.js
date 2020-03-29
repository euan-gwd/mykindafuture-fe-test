import React from 'react'
import { useSelector } from 'react-redux'
import PlayerCard from './PlayerCard'
import BlankCard from './BlankCard'
import isEmpty from 'lodash/isEmpty'
import './app-styles.scss'

const App = () => {
  const shipsLoading = useSelector((state) => state.ships.shipsLoading)
  const shipsError = useSelector((state) => state.ships.shipsError)
  const player1Card = useSelector((state) => state.players.player1Card)
  const player2Card = useSelector((state) => state.players.player2Card)

  if (shipsLoading) {
    return (
      <div className="app">
        <div className="container">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (shipsError) {
    return (
      <div className="app">
        <div className="container">
          <div>{`Oops something went wrong..., ${shipsError}`}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="container">
        {!isEmpty(player1Card) ? <PlayerCard starship={player1Card} player={1} /> : <BlankCard />}
        {!isEmpty(player2Card) ? <PlayerCard starship={player2Card} player={2} /> : <BlankCard />}
      </div>
    </div>
  )
}

export default App
