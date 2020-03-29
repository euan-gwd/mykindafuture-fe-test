import React from 'react'
import { useDispatch } from 'react-redux'
import { getNewPlayerCard, compareCards } from '../store/actions'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
import './player-card-styles.scss'

const PlayerCard = ({ starship, player, winner }) => {
  const dispatch = useDispatch()

  const handleClick = (player, selectedItem) => {
    dispatch(getNewPlayerCard(player))
    dispatch(compareCards(player, selectedItem))
  }

  return (
    <Card className="player-card">
      {player === winner && (
        <Card.Header>
          <Alert variant="success">
            <h1>Winner</h1>
          </Alert>
        </Card.Header>
      )}
      <Card.Header>
        <Card.Title>{starship.name}</Card.Title>
        <Card.Subtitle className="mb-1 text-muted">{starship.model}</Card.Subtitle>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div className="categories">
            <div>{`Class: `}</div>
            <div>{starship.starship_class}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => handleClick(player, 'max_atmosphering_speed')}>
          <div className="categories">
            <div>{`Maximum speed: `}</div>
            <div>{starship.max_atmosphering_speed}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => handleClick(player, 'cost_in_credits')}>
          <div className="categories">
            <div>{`Cost in credits: `}</div>
            <div>{starship.cost_in_credits}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => handleClick(player, 'crew')}>
          <div className="categories">
            <div>{`Crew: `}</div>
            <div>{starship.crew}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => handleClick(player, 'passengers')}>
          <div className="categories">
            <div>{`Number of passengers: `}</div>
            <div>{starship.passengers}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => handleClick(player, starship.films.length)}>
          <div className="categories">
            <div>{`Featured in films: `}</div>
            <div>{starship.films.length}</div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default PlayerCard
