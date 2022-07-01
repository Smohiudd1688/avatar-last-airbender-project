import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import CharacterItem from "./CharacterItem";

function NationPage({characters, nationClicked}) {
    const {nation, id, origin, originImage, avatar, avatarImage} = nationClicked;

    const fireCharacters = characters.filter(character => {
        return character.nation === nation
    });

    const renderCharacters = fireCharacters.map(character => {
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
        <div id={id}>
            <h1 className="nationHeaders">{nation} Nation</h1>
            <h1 className="pageHeaders">Origin</h1>
            <div className="info">
                <img
                    src={originImage}
                />
                <p>{origin}</p>
            </div>
            <h1 className="pageHeaders">Most Recent Avatar</h1>
            <div className="info">
                <p>{avatar}</p>
                <img
                    src={avatarImage}
                />
            </div>
            <h1 className="pageHeaders">{nation} Nation Characters</h1>
            {renderCharacters}
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default NationPage;