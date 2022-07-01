import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Nations from "./components/Nations";
import Home from "./components/Home";
import FireNation from "./components/FireNation";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route path="/characters" >
          <Characters />
        </Route>
        <Route exact path="/nations" >
          <Nations />
        </Route>
        <Route path="/nations/fire">
          <FireNation />
        </Route>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
