import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign up to Garden Diaries</h1>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control 
                            className={styles.Input} 
                            type="text" 
                            placeholder="Choose a username" 
                            name="username" />
                        </Form.Group>
                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control 
                            className={styles.Input}  
                            type="password" 
                            placeholder="Choose a password" 
                            name="password1" />
                        </Form.Group>
                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm password</Form.Label>
                            <Form.Control 
                            className={styles.Input} 
                            type="password" 
                            placeholder="Confirm password" 
                            name="password2" />
                        </Form.Group>
                        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} `}type="submit">
                            Sign up!
                        </Button>
                    </Form>

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signin">
                        Already have an account? <span>Sign in</span>
                    </Link>
                </Container>
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
            >
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={
                        "https://res.cloudinary.com/dbgnna5vv/image/upload/v1685186160/media/images/default_upload_zxqesj.jpg"
                    }
                />
            </Col>
        </Row>
    );
};

export default SignUpForm;