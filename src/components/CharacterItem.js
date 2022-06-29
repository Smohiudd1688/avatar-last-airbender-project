import React from "react";

function CharacterItem({id, name, image, nation, bender, about}) {
    return(
        <div>
            <h2>{name}</h2>
            <img
                src={image}
            />
            <p>{bender}, {nation}</p> <br></br>
            <p>{about}</p>
        </div>
    );
}

export default CharacterItem;