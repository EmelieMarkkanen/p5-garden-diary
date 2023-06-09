import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PlantCreateForm() {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        name: "",
        care_instructions: "",
        image: "",
        plant_type: "unknown",
        planted_at: "",
    });
    const {
        name,
        care_instructions,
        image,
        plant_type,
        planted_at,
    } = postData;

    const imageInput = useRef(null);
    const history = useHistory();

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("name", name);
        formData.append("plant_type", plant_type);
        formData.append("care_instructions", care_instructions);
        formData.append("planted_at", planted_at);
        formData.append("image", imageInput.current.files[0]);

        try {
            const { data } = await axiosReq.post("/plants/", formData);
            history.push(`/plants/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    
          <Form.Group>
            <Form.Label>Plant type</Form.Label>
            <Form.Control
              as="select"
              type="text"
              name="plant_type"
              value={plant_type}
              onChange={handleChange}
            >
              <option value="unknown">Chose one</option>
              <option value="berry_bush">Berry bush</option>
              <option value="herb">Herb</option>
              <option value="bulb">Bulb</option>
              <option value="cacti">Cacti</option>
              <option value="fern">Fern</option>
              <option value="grass">Grass</option>
              <option value="shrub">Shrub</option>
              <option value="tree">Tree</option>
              <option value="annual">Annual</option>
              <option value="biennial">Biennial</option>
              <option value="perennial">Perennial</option>
              <option value="vegetable">Vegetable</option>
              <option value="fruit_tree">Fruit tree</option>
              <option value="succulent">Succulent</option>
            </Form.Control>
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Care instructions</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="care_instructions"
              value={care_instructions}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.care_instructions?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    
          <Form.Group>
            <Form.Label>Planted</Form.Label>
            <Form.Control
              type="date"
              name="planted_at"
              value={planted_at}
              onChange={handleChange}
              min="1990-01-01"
            />
          </Form.Group>
          {errors?.planted_at?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    
          <Button
            className={`${btnStyles.Button} ${btnStyles.Green}`}
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Green}`}
            type="submit"
          >
            Add plant
          </Button>
        </div>
      );
    
      return (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
              <Container
                className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
              >
                <Form.Group className="text-center">
                  {image ? (
                    <>
                      <figure>
                        <Image className={appStyles.Image} src={image} rounded />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Green}`}
                          htmlFor="image-upload"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="image-upload"
                    >
                      <Asset
                        src={Upload}
                        message="Click or tap to upload an image"
                      />
                    </Form.Label>
                  )}
    
                  <Form.File
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeImage}
                    ref={imageInput}
                  />
                </Form.Group>
                {errors?.image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
    
                <div className="d-md-none">{textFields}</div>
              </Container>
            </Col>
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
              <Container className={appStyles.Content}>{textFields}</Container>
            </Col>
          </Row>
        </Form>
      );
    }
    
    export default PlantCreateForm;