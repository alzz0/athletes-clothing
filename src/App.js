import React from "react";
import { Homepage } from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
