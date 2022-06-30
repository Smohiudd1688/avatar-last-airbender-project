import React from "react";

function CharacterItem({id, name, image, nation, bender, about}) {
    const styles = {
        boxShadow: '20px 10px 10px #d1e0e0'
    }

    if (nation.toLowerCase() === "water") {
        styles.boxShadow = '20px 10px 10px #ccebff'
    } else if (nation.toLowerCase() === "earth") {
        styles.boxShadow = '20px 10px 10px #f2e6d9'
    } else if (nation.toLowerCase() === "fire") {
        styles.boxShadow = '20px 10px 10px #ffcccc'
    }

    return(
        <div className="characterCard" style={styles}>
            <div className="characterImage">
                <img src={image} alt={name} />
            </div>
            <p className="characterDescription">
                <strong id="nameHeader">{name}</strong><br></br><br></br>
                <strong>Nation:</strong> {nation} Nation<br></br>
                <strong>Type of Bender: </strong> {bender}<br></br>
                {about}
            </p>
        </div>
    );
}


export default CharacterItem;