import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import List from "./List";
import { useHistory } from "react-router-dom";

function ListPage() {
  const { id } = useParams();
  const [shoppingList, setShoppingList] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axiosReq.get(`/items/${id}`);
        setShoppingList(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchList();
  }, [id]);

  const handleEdit = () => {
    history.push(`/items/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this list?");
    if (confirmed) {
      try {
        await axiosRes.delete(`/items/${id}`);
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
          {shoppingList && (
            <List
              {...shoppingList}
              listPage={true}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default ListPage;
