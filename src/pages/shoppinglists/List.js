import React from "react";
import styles from "../../styles/Plant.module.css";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const List = (props) => {
  const { name, quantity 
  } = props;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/items/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      try {
        await axiosRes.delete(`/items/${id}/`);
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
            {name && <Card.Title>{name}</Card.Title>}
          </div>
          <div>
            <MoreDropdown handleEdit={handleEdit}
            handleDelete={handleDelete} />
          </div>
        </div>
        {quantity && <Card.Body>{quantity}</Card.Body>}
      </Card.Body>
    </Card>
  );
};

export default List;
