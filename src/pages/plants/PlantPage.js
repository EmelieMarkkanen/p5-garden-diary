import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Plant from "./Plant";
import { useHistory } from "react-router-dom";

function PlantPage() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await axiosReq.get(`/plants/${id}`);
        setPlant(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlant();
  }, [id]);

  const handleEdit = () => {
    history.push(`/plants/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this plant?");
    if (confirmed) {
      try {
        await axiosRes.delete(`/plants/${id}`);
        history.goBack();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container>
          {plant && (
            <Plant
              {...plant}
              plantPage={true}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default PlantPage;