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
import PlantCard from "../../components/PlantCard";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PlantsPage({ message, filter = "" }) {
  const currentUser = useCurrentUser();
  const [plants, setPlants] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const { data } = await axiosReq.get(`/plants/?${filter}search=${query}`);
        const filteredPlants = data.results.filter(plant => plant.author === currentUser.id);
        setPlants({ results: filteredPlants });
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPlants();
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
            placeholder="Search plants"
          />
        </Form>

        <Link to="/plants/create">
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`}>
            Add a plant
          </Button>
        </Link>

        {hasLoaded ? (
          <>
            {plants.results.length ? (
              <InfiniteScroll
                dataLength={plants.results.length}
                next={() => fetchMoreData(plants, setPlants)}
                hasMore={!!plants.next}
                loader={<Asset spinner />}
                scrollThreshold="100px"
              >
                <div className={styles.CardGrid}>
                  {plants.results.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
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

export default PlantsPage;
