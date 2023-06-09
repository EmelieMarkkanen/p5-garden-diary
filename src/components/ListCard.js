import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import styles from "../styles/Cards.module.css";

function ListCard({ items }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/items/${items.id}`);
    };

    return (
        <Card onClick={handleClick}>
            <Card.Body>
                <Card.Title>{items.name}</Card.Title>
                <Card.Text>{items.quantity}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ListCard;


