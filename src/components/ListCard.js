import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import styles from "../styles/Cards.module.css";

function ListCard({ shoppinglist }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/shoppinglist/${shoppinglist.id}`);
    };

    return (
        <Card onClick={handleClick}>
            <Card.Body>
                <Card.Title>{shoppinglist.title}</Card.Title>
                <Card.Text>{shoppinglist.created_at}</Card.Text>
                <Card.Text>Number of Items: {shoppinglist.items_count || 0}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ListCard;


