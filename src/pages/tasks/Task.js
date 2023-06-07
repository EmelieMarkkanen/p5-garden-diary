import React from "react";
import styles from "../../styles/Plant.module.css";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import OverdueCheck from "../../hooks/overdueCheck";

const Task = (props) => {
  const {
    id,
    title,
    content,
    image,
    due_date,
    overdue,
    setTask
  } = props;

  const history = useHistory();

  OverdueCheck(props, setTask);

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      try {
        await axiosRes.delete(`/tasks/${id}/`);
        history.goBack();
      } catch (err) {
      }
    }
  };

  return (
    <Card className={styles.Plant}>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-center flex-grow-1">
            {title && <Card.Title>{title}</Card.Title>}
          </div>
          <div>
            <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          </div>
        </div>
        <Card.Text>{overdue && (
          <p className="text-danger font-weight-bold">Task is overdue!</p>
        )}</Card.Text>
        <Card.Text>Due: {due_date}</Card.Text>
        {content && <Card.Body>{content}</Card.Body>}
      </Card.Body>
      <Card.Img className={styles.Image} src={image} alt={title} />
    </Card>
  );
};

export default Task;
