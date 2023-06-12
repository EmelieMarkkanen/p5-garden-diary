import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import styles from "../../styles/ListsPage.module.css";
import ListCreateForm from "./ShoppinglistCreateForm";
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
        const filteredLists = data.results.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
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

  const handleCreateItem = async (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

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
            placeholder="Search item"
          />
        </Form>

          <ListCreateForm onCreateItem={handleCreateItem} />

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
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </InfiniteScroll>
              ) : (
                <Container>
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
