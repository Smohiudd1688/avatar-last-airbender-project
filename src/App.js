import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Nations from "./components/Nations";
import Home from "./components/Home";
import NationPage from "./components/NationPage";
import {nationData} from "./components/NationData"

function App() {
  const [characters, setCharacters] = useState([]);
  console.log(nationData);
  useEffect(() => {
    fetch("http://localhost:3001/characters")
    .then(response => response.json())
    .then(data => setCharacters(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route path="/characters" >
          <Characters characters={characters} setCharacters={setCharacters} />
        </Route>
        <Route exact path="/nations" >
          <Nations />
        </Route>
        <Route path="/nations/fire">
          <NationPage characters={characters} nationClicked={nationData.fire} />
        </Route>
        <Route path="/nations/air">
          <NationPage characters={characters} nationClicked={nationData.air} />
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
