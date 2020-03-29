import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import PlayerCard from './PlayerCard'

const App = () => {
  const shipsLoading = useSelector((state) => state.ships.shipsLoading)
  const shipsError = useSelector((state) => state.ships.shipsError)
  const ships = useSelector((state) => state.ships.ships)
  const getRandomShip = () => ships[Math.floor(Math.random() * ships.length)]
  // const [player1Card, setPlayer1Card] = useState(ships[Math.floor(Math.random() * ships.length)])
  // const [player2Card, setPlayer2Card] = useState({})

  if (shipsLoading) {
    return <div>{`Loading...`}</div>
  }

  if (shipsError) {
    return <div>{`Oops something went wrong..., ${shipsError}`}</div>
  }

  return (
    <Container fluid>
      <CardDeck>
        <PlayerCard starship={getRandomShip()} />
        {/* <PlayerCard ship={getRandomShip()} /> */}
      </CardDeck>
    </Container>
  )
}

export default App
