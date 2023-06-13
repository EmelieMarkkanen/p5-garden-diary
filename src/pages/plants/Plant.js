import React from "react";
import styles from "../../styles/Plant.module.css";
import { Card } from "react-bootstrap";
import { MoreDropdown } from "../../components/MoreDropdown";

const Plant = (props) => {
  const {
    name,
    image,
    planted_at,
    plant_type,
    care_instructions,
    handleEdit,
    handleDelete
  } = props;

  const formattedPlantType = plant_type.replace(/_/g, " ");

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
        {formattedPlantType && <Card.Text className={styles.Type}>{formattedPlantType}</Card.Text>}
        {care_instructions && <Card.Text>{care_instructions}</Card.Text>}
      </Card.Body>
      <Card.Img className={styles.Image} src={image} alt={name} />
    </Card>
  );
};

export default Plant;
