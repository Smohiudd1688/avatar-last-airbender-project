import React, { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";

function Characters() {
    const [characters, setCharacters] = useState([]);

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
    })

    return(
        <div>
            <h1 className="pageHeaders">Meet the Cast of Characters</h1>
            {renderCharacters}
        </div>
    );
}

export default Characters;