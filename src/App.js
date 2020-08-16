import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";

import "./App.css";

const HatsPage = () => {
  return <h1>HATS PAGE</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
