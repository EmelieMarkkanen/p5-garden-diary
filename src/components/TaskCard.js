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
        {task && task.image && (
          <img
            src={task.image}
            alt={task.title}
            className={styles.CardImage}
          />
        )}
      </div>
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>Added: {task.created_at}</Card.Text>
        <Card.Text>Due: {task.due_date}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;
