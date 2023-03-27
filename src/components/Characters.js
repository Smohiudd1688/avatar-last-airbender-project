import React, { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";
import CharacterForm from "../CharacterForm";

function Characters({characters}) {

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

    return(
        <div className="characterPage">
            <h1 id="characterHeader">Meet the Cast of Characters</h1>
            {renderCharacters}
        </div>
    );
}

export default Characters;