import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import styles from "../styles/Cards.module.css"
import OverdueCheck from "../hooks/overdueCheck";
import { axiosRes } from "../api/axiosDefaults";

function TaskCard({ task, setTask }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/tasks/${task.id}`);
  };

  OverdueCheck(task, setTask);

  const taskDone = async () => {
    const confirmed = window.confirm("Task completed?");
    if (confirmed) {
      try {
        await axiosRes.delete(`/tasks/${task.id}/`);
        history.push('/tasks');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Card>
      <div className={styles.CardImageContainer}>
        {task && task.image && (
          <img
            src={task.image}
            alt={task.title}
            className={styles.CardImage}
            onClick={handleClick}
          />
        )}
      </div>
      <Card.Body>
        <Card.Title >{task.overdue ? (
          <i className="fas fa-exclamation text-danger text-bold" title="Overdue"></i>
        ) : null}{task.title}
        </Card.Title>
        <Card.Text>Added: {task.created_at}</Card.Text>
        <Card.Text> Due: {task.due_date} <i className="fas fa-check"
        inTask={true} 
        onClick={taskDone}
        title="Done" /></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;