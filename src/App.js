import React from "react";
import { Homepage } from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./components/shop/Shop";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
