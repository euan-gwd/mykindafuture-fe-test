import React from 'react'
import { useDispatch } from 'react-redux'
import { getNewPlayerCard } from '../store/actions'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import './player-card-styles.scss'

const PlayerCard = ({ starship, player }) => {
  const dispatch = useDispatch()
  return (
    <Card className="player-card">
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
        <ListGroup.Item action onClick={() => dispatch(getNewPlayerCard(player))}>
          <div className="categories">
            <div>{`Maximum speed: `}</div>
            <div>{starship.max_atmosphering_speed}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => dispatch(getNewPlayerCard(player))}>
          <div className="categories">
            <div>{`Cost in credits: `}</div>
            <div>{starship.cost_in_credits}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => dispatch(getNewPlayerCard(player))}>
          <div className="categories">
            <div>{`Crew: `}</div>
            <div>{starship.crew}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => dispatch(getNewPlayerCard(player))}>
          <div className="categories">
            <div>{`Number of passengers: `}</div>
            <div>{starship.passengers}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => dispatch()}>
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
