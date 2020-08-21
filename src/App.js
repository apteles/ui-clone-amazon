import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import { Provider } from "./context/modules/cart/index";
function App() {
  return (
    <Provider>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
