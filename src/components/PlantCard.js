import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import styles from "../styles/Cards.module.css"

function PlantCard({ plant }) {
    const history = useHistory();
  
    const handleClick = () => {
      history.push(`/plants/${plant.id}`);
    };
  
    return (
      <Card onClick={handleClick}>
        <div className={styles.CardImageContainer}> 
          <img
            src={plant.image}
            alt={plant.name}
            className={styles.CardImage} 
          />
        </div>
        <Card.Body>
          <Card.Title>{plant.name}</Card.Title>
          <Card.Text>{plant.created_at}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default PlantCard;