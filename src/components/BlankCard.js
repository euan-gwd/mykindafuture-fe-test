import React from 'react'
import Card from 'react-bootstrap/Card'
import { FaEmpire, FaRebel } from 'react-icons/fa'
import './player-card-styles.scss'

const BlankCard = () => {
  return (
    <Card className="player-card">
      <Card.Body className="card-back">
        <FaEmpire size="3rem" />
        <FaRebel size="3rem" />
      </Card.Body>
    </Card>
  )
}

export default BlankCard
