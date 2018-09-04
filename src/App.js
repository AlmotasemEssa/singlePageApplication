import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/CreateUser" component={Form} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect()(App);
