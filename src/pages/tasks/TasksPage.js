import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import styles from "../../styles/Cards.module.css";
import TaskCard from "../../components/TaskCard";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import appStyles from "../../App.module.css";

function TasksPage({ message, filter = "" }) {
    const [tasks, setTasks] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data } = await axiosReq.get(`/tasks/?${filter}search=${query}`);
                setTasks(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchTasks();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8} xl={9}>
                <Form
                    className={styles.SearchBar}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <Form.Control
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        className="mr-sm-2"
                        placeholder="Search tasks"
                    />
                </Form>

                <Link to="/tasks/create">
                    <Button className={`${btnStyles.Button} ${btnStyles.Blue}`}>
                        Add a task
                    </Button>
                </Link>

                {hasLoaded ? (
                    <>
                        {tasks.results.length ? (
                            <InfiniteScroll
                                dataLength={tasks.results.length}
                                next={() => fetchMoreData(tasks, setTasks)}
                                hasMore={!!tasks.next}
                                loader={<Asset spinner />}
                                scrollThreshold="100px"
                            >
                                <div className={styles.CardGrid}>
                                    {tasks.results.map((task) => (
                                        <TaskCard key={task.id} task={task} />
                                    ))}
                                </div>
                            </InfiniteScroll>
                        ) : (
                            <Container className={appStyles.Content}>
                            <Asset src={NoResults} message={message} />
                          </Container>
                        )}
                    </>
                ) : (
                    <Container>
                        <Asset spinner />
                    </Container>
                )}
            </Col>
        </Row>
    );
}

export default TasksPage;