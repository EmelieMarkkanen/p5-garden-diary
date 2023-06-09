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
import ListCard from "../../components/ListCard";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ListsPage({ message, filter = "" }) {
  const currentUser = useCurrentUser();
  const [items, setItems] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data } = await axiosReq.get(`/items/?${filter}&search=${query}`);
        const filteredLists = data.results.filter((items) =>
          items.name.toLowerCase().includes(query.toLowerCase())
        );
        setItems(filteredLists);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchLists();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

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
            placeholder="Search items"
          />
        </Form>

        <Link to="/items/create">
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`}>
            Add a new item to list
          </Button>
        </Link>

        {hasLoaded ? (
          <>
            {items.length ? (
              <InfiniteScroll
                dataLength={items.length}
                next={() => fetchMoreData(items, setItems)}
                hasMore={!!items.next}
                loader={<Asset spinner />}
                scrollThreshold="100px"
              >
                <div className={styles.CardGrid}>
                  {items.map((items) => (
                    <ListCard key={items.id} items={items} />
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

export default ListsPage;
