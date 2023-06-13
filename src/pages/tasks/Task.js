import React from "react";
import styles from "../../styles/Plant.module.css";
import { Card } from "react-bootstrap";
import { MoreDropdown } from "../../components/MoreDropdown";
import OverdueCheck from "../../hooks/overdueCheck";

const Task = (props) => {
  const {
    title,
    content,
    image,
    due_date,
    overdue,
    setTask,
    handleEdit,
    handleDelete,
    taskDone
  } = props;

  OverdueCheck(props, setTask);

  return (
    <Card className={styles.Plant}>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-center flex-grow-1">
            {title && <Card.Title>{title}</Card.Title>}
          </div>
          <div>
            <MoreDropdown
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              inTask={true}
              taskDone={taskDone}
            />
          </div>
        </div>
        <Card.Text>
          {overdue && (
            <p className="text-danger font-weight-bold">Task is overdue!</p>
          )}
        </Card.Text>
        <Card.Text>Due: {due_date}</Card.Text>
        {content && <Card.Body>{content}</Card.Body>}
      </Card.Body>
      <Card.Img className={styles.Image} src={image} alt={title} />
    </Card>
  );
};

export default Task;
