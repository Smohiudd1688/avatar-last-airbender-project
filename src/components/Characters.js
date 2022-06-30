import React, { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";
import CharacterForm from "../CharacterForm";

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/characters")
        .then(response => response.json())
        .then(data => setCharacters(data));
    }, []);

    const renderCharacters = characters.map(character => {
        return <CharacterItem
            key={character.id}
            name={character.name}
            image={character.image}
            nation={character.nation}
            bender={character.bender}
            about={character.about}
        />
    });

    function handleNewCharacterSubmit(newCharacter) {
        setCharacters([...characters, newCharacter]);
    }

    return(
        <div className="characterPage">
            <h1 id="characterHeader">Meet the Cast of Characters</h1>
            <button onClick={() => setShowForm(!showForm)}>{showForm ? "Don't Add Character": "Add A Missing Character"}</button>
            {showForm ? <CharacterForm onNewCharacterSubmit={handleNewCharacterSubmit} setShowForm={setShowForm} /> : null}
            {renderCharacters}
        </div>
    );
}

export default Characters;