import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const List = (props) => {
  const { id, title, created_at, item } = props;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/shoppinglist/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this list?");
    if (confirmed) {
      try {
        await axiosReq.delete(`/shoppinglists/${id}/`);
        history.goBack();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-center flex-grow-1">
            {title && <Card.Title>{title}</Card.Title>}
          </div>
          <div>
            <MoreDropdown
              handleEdit={handleEdit}
              handleDelete={handleDelete} />
          </div>
        </div>
        {created_at && <Card.Text>Created: {created_at}</Card.Text>}
        {item &&
          item.map((shoppingListItem) => (
            <Card.Text key={shoppingListItem.item.id}>
              {shoppingListItem.item.name} - Quantity: {shoppingListItem.quantity}
            </Card.Text>
          ))}
      </Card.Body>
    </Card>
  );
};

export default List;
