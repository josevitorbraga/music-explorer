import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function DisplayComponent(props) {
  const history = useHistory();
  const buttonClickHandler = () => {
    history.push(`/album/${props.data.id}`);
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        onClick={buttonClickHandler}
        variant="top"
        src={props.data.artist.picture_medium}
      />
      <Card.Body>
        <Card.Title>
          <h1>{props.data.title}</h1>
        </Card.Title>
        <Card.Text>
          <strong>Artist: </strong>
          {props.data.artist.name}
        </Card.Text>
      </Card.Body>
      <Button onClick={buttonClickHandler} variant="warning">
        See more
      </Button>
    </Card>
  );
}
