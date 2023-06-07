import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Task from "./Task";
import { useHistory } from "react-router-dom";

function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axiosReq.get(`/tasks/${id}`);
        setTask(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTask();
  }, [id]);

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      try {
        await axiosRes.delete(`/tasks/${id}`);
        history.goBack();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const taskDone = async () => {
    const confirmed = window.confirm("Task completed?");
    if (confirmed) {
      try {
        await axiosRes.delete(`/tasks/${id}/`);
        history.goBack();
      } catch (err) {
      }
    }
  };

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container>
          {task && (
            <Task
              {...task}
              TaskPage={true}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              taskDone={taskDone}
            />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default TaskPage;