import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        
      </Switch>
    </div>
  );
}

export default App;
