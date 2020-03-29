import React from 'react'
import { useSelector } from 'react-redux'
import Alert from 'react-bootstrap/Alert'
import './score-card-styles.scss'

const ScoreCard = () => {
  const player1Score = useSelector((state) => state.players.player1Score)
  const player2Score = useSelector((state) => state.players.player2Score)
  return (
    <Alert variant="light">
      <div className="score-card">
        <p>
          {`Player 1 Score: `}
          <span> {player1Score}</span>
        </p>

        <p>
          {`Player 2 Score: `}
          <span> {player2Score}</span>
        </p>
      </div>
    </Alert>
  )
}

export default ScoreCard
