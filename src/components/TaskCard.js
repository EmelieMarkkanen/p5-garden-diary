import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import styles from "../styles/Cards.module.css"

function TaskCard({ task }) {
    const history = useHistory();
  
    const handleClick = () => {
      history.push(`/tasks/${task.id}`);
    };
  
    return (
      <Card onClick={handleClick}>
        <div className={styles.CardImageContainer}> 
          <img
            src={task.image}
            alt={task.name}
            className={styles.CardImage} 
          />
        </div>
        <Card.Body>
          <Card.Title>{task.name}</Card.Title>
          <Card.Text>{task.created_at}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default TaskCard;