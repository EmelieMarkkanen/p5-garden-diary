import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";

function ShoppingListCreateForm() {
  const [errors, setErrors] = useState({});
  const [listData, setListData] = useState({
    title: "",
    items: [],
  });
  const { title, items } = listData;

  const history = useHistory();

  const handleChange = (event) => {
    setListData({
      ...listData,
      [event.target.name]: event.target.value,
    });
  };

  const handleItemChange = (event, index) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], name: event.target.value };
    setListData({
      ...listData,
      items: updatedItems,
    });
  };

  const handleQuantityChange = (event, index) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      quantity: event.target.value,
    };
    setListData({
      ...listData,
      items: updatedItems,
    });
  };

  const handleAddItem = () => {
    setListData({
      ...listData,
      items: [...items, { name: "", quantity: "" }],
    });
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setListData({
      ...listData,
      items: updatedItems,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axiosReq.post("/shoppinglist/", listData);
      history.push(`/shoppinglist/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const renderItems = items.map((item, index) => (
    <div key={index} className="d-flex">
      <Form.Group className="flex-grow-1 mr-2">
        <Form.Control
          type="text"
          name="name"
          value={item.name}
          placeholder="Item name"
          onChange={(e) => handleItemChange(e, index)}
        />
      </Form.Group>
      <Form.Group className="flex-grow-1 mr-2">
        <Form.Control
          type="number"
          name="quantity"
          value={item.quantity}
          placeholder="Quantity"
          onChange={(e) => handleQuantityChange(e, index)}
        />
      </Form.Group>
      <Button variant="danger" onClick={() => handleRemoveItem(index)}>
        Remove
      </Button>
    </div>
  ));

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <h5>Items</h5>
      {renderItems}

      <Button className="mb-3" onClick={handleAddItem}>
        Add Item
      </Button>

      <Button variant="primary" type="submit">
        Create Shopping List
      </Button>
    </Form>
  );
}

export default ShoppingListCreateForm;
