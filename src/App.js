import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PlantCreateForm from "./pages/plants/PlantCreateForm";
import PlantsPage from "./pages/plants/PlantsPage";
import TasksPage from "./pages/tasks/TasksPage";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";
import PlantPage from "./pages/plants/PlantPage";
import PlantEditForm from "./pages/plants/PlantEditForm";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TaskPage from "./pages/tasks/TaskPage";
import TaskEditForm from "./pages/tasks/TaskEditForm";
import ShoppingListCreateForm from "./pages/shoppinglists/ShoppinglistCreateForm";
import ListsPage from "./pages/shoppinglists/ListsPage";
import ListPage from "./pages/shoppinglists/ListPage";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/following"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route exact path="/shoppinglist/create" render={() => <ShoppingListCreateForm />} />
          <Route
            exact
            path="/shoppinglist"
            render={() =>
              <ListsPage
                message="No results found. Adjust the search keyword or add a shoppinglist."
                filter={currentUser}
              />
            }
          />
          <Route exact path="/shoppinglists/:id" render={() => <ListPage />} />
          <Route exact path="/plants/create" render={() => <PlantCreateForm />} />
          <Route exact path="/plants/:id/edit" render={() => <PlantEditForm />} />
          <Route
            exact
            path="/plants"
            render={() =>
              <PlantsPage
                message="No results found. Adjust the search keyword or add a plant."
                filter={currentUser}
              />
            }
          />
          <Route exact path="/plants/:id" render={() => <PlantPage />} />
          <Route exact path="/tasks" render={() => <TasksPage
            message="No results found. Adjust the search keyword add a task."
            filter={currentUser}
          />}
          />
          <Route exact path="/tasks/create" render={() => <TaskCreateForm />} />
          <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
          <Route exact path="/tasks/:id" render={() => <TaskPage />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;