import React from "react";
import {Card, Icon, Image} from 'semantic-ui-react';


export default function CharacterCard(props) {
  return(
    <Card> 
      <Card.Content>
        <img src={props.image} />
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>
        <p>{props.species} {props.status}</p>
        <p>Location: {props.location}</p>
        <p>Origin: {props.origin}</p>

        
      
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <p><Icon name='user' /> Episodes</p>
    </Card.Content>
  </Card> 
  ); 
}