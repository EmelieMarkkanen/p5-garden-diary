import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";
import { useRedirect } from "../../hooks/useRedirect";
import styles from "/workspace/p5-garden-diary/src/styles/ShoppingListCreateForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function ShoppingListCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    item: [],
    quantity: [],
    created_at: "",
  });


  const { title, item, quantity, created_at } = postData;

  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleItemChange = (event, index) => {
    const updatedItem = [...item];
    updatedItem[index] = event.target.value;
    setPostData({
      ...postData,
      item: updatedItem,
    });
  };

  const handleQuantityChange = (event, index) => {
    const updatedQuantity = [...quantity];
    updatedQuantity[index] = event.target.value;
    setPostData({
      ...postData,
      quantity: updatedQuantity,
    });
  };


  const handleAddItem = () => {
    setPostData({
      ...postData,
      item: [...item, ""],
      quantity: [...quantity, ""],
    });
  };

  const handleRemoveItem = (index) => {
    const updatedItem = [...item];
    updatedItem.splice(index, 1);
    const updatedQuantity = [...quantity];
    updatedQuantity.splice(index, 1);
    setPostData({
      ...postData,
      item: updatedItem,
      quantity: updatedQuantity,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("item", item);
    formData.append("quantity", quantity);
    formData.append("created_at", created_at);


    try {
      const { data } = await axiosReq.post("/shoppinglist/", formData);
      history.push(`/shoppinglist/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const renderItems = item.map((name, index) => (
    <div key={index} className={styles.itemContainer}>
      <Form.Group className={`${styles.itemField} flex-grow-1 mr-2`}>
        <Form.Control
          type="text"
          name={`item[${index}]`}
          value={name}
          placeholder="Item name"
          onChange={(e) => handleItemChange(e, index)}
        />
      </Form.Group>
      <Form.Group className={`${styles.itemField} flex-grow-1 mr-2`}>
        <Form.Control
          type="number"
          name={`quantity[${index}]`}
          value={quantity[index]}
          placeholder="Quantity"
          onChange={(e) => handleQuantityChange(e, index)}
        />
      </Form.Group>
      <Button
        variant="danger"
        onClick={() => handleRemoveItem(index)}
        className={`${styles.removeItemButton} ${btnStyles.Button}`}
      >
        Remove
      </Button>
    </div>
  ));

  return (
    <Form onSubmit={handleSubmit} className={styles.formContainer}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title && errors.title.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}


      <Form.Label>Items</Form.Label>
      {renderItems}

      <div className={styles.buttonsContainer}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Bright} mb-3`}
          onClick={handleAddItem}
        >
          Add Item
        </Button>
        <Button
          type="submit"
          className={`${btnStyles.Button} ${btnStyles.Bright}`}
        >
          Create Shopping List
        </Button>
      </div>
    </Form>
  );
}

export default ShoppingListCreateForm;
