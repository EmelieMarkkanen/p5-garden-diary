import { useState, useEffect } from "react";
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
import { MoreDropdown } from "../../components/MoreDropdown";
import btnStyles from "../../styles/Button.module.css";

function ListsPage({ message, filter = "" }) {
  const currentUser = useCurrentUser();
  const [items, setItems] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const [editingItemName, setEditingItemName] = useState("");
  const [editingItemQuantity, setEditingItemQuantity] = useState("");

  const handleEdit = (itemId, itemName, itemQuantity) => {
    setEditingItemId(itemId);
    setEditingItemName(itemName);
    setEditingItemQuantity(itemQuantity);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditingItemName("");
    setEditingItemQuantity("");
  };

  const handleSaveEdit = async (itemId) => {
    try {
      await axiosReq.put(`/items/${itemId}/`, {
        name: editingItemName,
        quantity: editingItemQuantity,
      });
      setItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              name: editingItemName,
              quantity: editingItemQuantity,
            };
          }
          return item;
        })
      );
      setEditingItemId(null);
      setEditingItemName("");
      setEditingItemQuantity("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (itemId) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      try {
        await axiosReq.delete(`/items/${itemId}/`);
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } catch (err) {
        console.log(err);
      }
    }
  };

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
                        {editingItemId === item.id ? (
                          <>
                            <td>
                              <Form.Control
                                value={editingItemName}
                                onChange={(e) => setEditingItemName(e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                value={editingItemQuantity}
                                onChange={(e) => setEditingItemQuantity(e.target.value)}
                                type="number"
                              />
                            </td>
                            <td>
                              <button className={`${btnStyles.Button} ${btnStyles.Blue}`} onClick={() => handleSaveEdit(item.id)}>
                                Update
                              </button>
                              <button className={`${btnStyles.Button} ${btnStyles.Blue}`} onClick={handleCancelEdit}>Cancel</button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                              <MoreDropdown
                                handleEdit={() =>
                                  handleEdit(item.id, item.name, item.quantity)
                                }
                                handleDelete={() => handleDelete(item.id)}
                              />
                            </td>
                          </>
                        )}
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
