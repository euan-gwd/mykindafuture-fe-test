import React from 'react'
import { useSelector } from 'react-redux'
import PlayerCard from './PlayerCard'
import BlankCard from './BlankCard'
import './app-styles.scss'

const App = () => {
  const shipsLoading = useSelector((state) => state.ships.shipsLoading)
  const shipsError = useSelector((state) => state.ships.shipsError)
  const ships = useSelector((state) => state.ships.ships)
  const getRandomShip = () => ships[Math.floor(Math.random() * ships.length)]

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
        <PlayerCard starship={getRandomShip()} />
        {/* <PlayerCard starship={getRandomShip()} /> */}
        <BlankCard />
      </div>
    </div>
  )
}

export default App
