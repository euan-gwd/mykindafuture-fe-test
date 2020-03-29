import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import './player-card-styles.scss'

const PlayerCard = ({ starship }) => {
  console.log('Card -> starship', starship)

  return (
    <Card className="player-card">
      <Card.Header>
        <Card.Title>{starship.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{starship.starship_class}</Card.Subtitle>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div className="categories">
            <div>{`Model: `}</div>
            <div>{starship.model}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="categories">
            <div>{`Manufacturer: `}</div>
            <div>{starship.manufacturer}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="categories">
            <div>{`Crew: `}</div>
            <div>{starship.crew}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action>
          <div className="categories">
            <div>{`Maximum speed: `}</div>
            <div>{starship.max_atmosphering_speed}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action>
          <div className="categories">
            <div>{`Cost in credits: `}</div>
            <div>{starship.cost_in_credits}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action>
          <div className="categories">
            <div>{`Number of passengers: `}</div>
            <div>{starship.passengers}</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item action>
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
