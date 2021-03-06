import React from 'react';
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Searchpage from "./Searchpage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Switch>
          <Route path="/search">
            <Searchpage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
