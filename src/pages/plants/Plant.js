import React from "react";
import styles from "../../styles/Plant.module.css";

import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Plant = (props) => {
    const {
        id,
        name,
        image,
        planted_at,
        type,
        care_instructions,
    } = props;

    const history = useHistory();

    const handleEdit = () => {
        history.push(`/plants/${id}/edit`);
    };

    const handleDelete = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this plant?");
        if (confirmed) {
            try {
                await axiosRes.delete(`/plants/${id}/`);
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
              <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
            </div>
          </div>
          <span>Planted: {planted_at}</span>
          {type && <Card.Text className={styles.Type}>{type}</Card.Text>}
          {care_instructions && <Card.Text>{care_instructions}</Card.Text>}
        </Card.Body>
        <Card.Img src={image} alt={name} />
      </Card>
    );
};

export default Plant;
