import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Nav from "./components/Navbar";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";
import Gameover from "./components/Gameover";
import Bedroom from "./components/Bedroom";
import Garden from "./components/Garden";
import Kitchen from "./components/Kitchen";
import Library from "./components/Library";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Nav /> */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path={["/bedroom", "/kitchen", "/library", "/garden"]} component={Nav} />
            <Switch>
              <PrivateRoute exact path="/gameboard" component={Gameboard} />
              <PrivateRoute exact path="/bedroom" component={Bedroom} />
              <PrivateRoute exact path="/kitchen" component={Kitchen} />
              <PrivateRoute exact path="/library" component={Library} />
              <PrivateRoute exact path="/garden" component={Garden} />
              <PrivateRoute exact path="/gameover" component={Gameover} />
              <PrivateRoute exact path="/scoreboard" component={Scoreboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
