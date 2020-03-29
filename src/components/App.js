import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadNewGame } from '../store/actions'
import PlayerCard from './PlayerCard'
import BlankCard from './BlankCard'
import ScoreCard from './ScoreCard'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import isEmpty from 'lodash/isEmpty'
import './app-styles.scss'

const App = () => {
  const shipsLoading = useSelector((state) => state.ships.shipsLoading)
  const shipsError = useSelector((state) => state.ships.shipsError)
  const player1Card = useSelector((state) => state.players.player1Card)
  const player2Card = useSelector((state) => state.players.player2Card)
  const winningCard = useSelector((state) => state.players.winner)
  const losingCard = useSelector((state) => state.players.loser)
  const dispatch = useDispatch()

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
      <div className="card-container">
        <ScoreCard />
      </div>
      <div className="card-container">
        <CardDeck>
          {!isEmpty(player1Card) ? (
            <PlayerCard starship={player1Card} player={1} winner={winningCard} loser={losingCard} />
          ) : (
            <BlankCard />
          )}
          {!isEmpty(player2Card) ? (
            <PlayerCard starship={player2Card} player={2} winner={winningCard} loser={losingCard} />
          ) : (
            <BlankCard />
          )}
        </CardDeck>
      </div>
      {winningCard !== undefined && (
        <div>
          <Button variant="outline-secondary" block onClick={() => dispatch(loadNewGame())}>
            Play Again
          </Button>
        </div>
      )}
    </div>
  )
}

export default App
