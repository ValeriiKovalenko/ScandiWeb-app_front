// import { getAllPosts, Get_All_Posts_Query } from "./components/test";
import AppBar from "./components/AppBar/AppBar";
import Products from "./pages/Products/Products";
import Container from "./components/Container/Container";
import ItemPage from './pages/ItemPage/ItemPage';
import Test from "./pages/Test/Test";
import { Route } from "react-router-dom";
import routes from './roures';



import "./styles/main.scss";

function App() {

  return (
    <div className="App">
      <Route path={routes.home} component={AppBar} />
      <Container>
        <Route path={routes.techItem} component={ItemPage} />
        <Route exact path={routes.tech}>
          <Products category="tech" />
        </Route>
        <Route path={routes.clothesItem} component={ItemPage} />
        <Route exact path={routes.clothes}>
          <Products category="clothes" />
        </Route>
      </Container>
    </div>
  );
}

export default App;
