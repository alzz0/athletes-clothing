import React, { Component } from "react";
import { Homepage } from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Header from "./components/header/Header";
import SignInAndUp from "./pages/signinandup/SignInAndUp";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends Component {
  state = {
    user: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ user })
    );
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
