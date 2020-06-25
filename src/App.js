import React from "react";
import AppHeader from "./cmps/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import FavoritesPage from "./views/FavoritesPage";

import "./styles/global.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/favoritesPage" exact component={FavoritesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
