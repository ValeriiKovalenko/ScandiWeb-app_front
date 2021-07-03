
import { Component } from "react";
import AppBar from "./components/AppBar/AppBar";
import Products from "./pages/Products/Products";
import Container from "./components/Container/Container";
import ItemPage from './pages/ItemPage/ItemPage';
import CartPage from './pages/CartPage/CartPage';
import { Route } from "react-router-dom";
import routes from './routes';
import "./styles/main.scss";


class App extends Component{

  render() {
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
        <Route path={routes.cart} component={CartPage} />
      </Container>
    </div>
  );
  }

}

// function App() {

//   return (
//     <div className="App">
//       <Route path={routes.home} component={AppBar} />
//       <Container>
//         <Route path={routes.techItem} component={ItemPage} />
//         <Route exact path={routes.tech}>
//           <Products category="tech" />
//         </Route>
//         <Route path={routes.clothesItem} component={ItemPage} />
//         <Route exact path={routes.clothes}>
//           <Products category="clothes" />
//         </Route>
//         <Route path={routes.cart} component={CartPage} />
//       </Container>
//     </div>
//   );
// }

export default App;
