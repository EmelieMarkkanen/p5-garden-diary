import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import styles from "../styles/Cards.module.css"
import { useEffect } from "react";
import { axiosReq } from "../api/axiosDefaults";

function TaskCard({ task, setTask }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/tasks/${task.id}`);
  };

  useEffect(() => {
    const updateOverdue = async () => {
      try {
        const { data } = await axiosReq.patch(`/tasks/${task.id}/`, {
          overdue: task.is_overdue,
        });
        setTask(data);
      } catch (err) {
        console.log(err);
      }
    };

    updateOverdue();
  }, [task, setTask]);

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
        <Card.Title>
          {task.title}
        </Card.Title>
        <Card.Text>Added: {task.created_at}</Card.Text>
        <Card.Text>{task.overdue ? (
              <i className="fas fa-exclamation text-danger text-bold"></i>
          ) : null} Due: {task.due_date}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;