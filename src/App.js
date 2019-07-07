import React, { Component } from "react";
import { Homepage } from "./pages/homepage/Homepage";
import { Route, Switch,Redirect } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Header from "./components/header/Header";
import SignInAndUp from "./pages/signinandup/SignInAndUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setUser } from "./store/actions/userActions";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to="/"/>):(<SignInAndUp/>)} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
    
  setUser: user => dispatch(setUser(user))
});

const mapStateToProps = state => {
    return{
    currentUser: state.user.currentUser
    }
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);