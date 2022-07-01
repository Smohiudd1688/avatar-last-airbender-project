import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Nations from "./components/Nations";
import Home from "./components/Home";
import FireNation from "./components/FireNation";

function App() {
  const [characters, setCharacters] = useState([]);

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
          <FireNation characters={characters} />
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
