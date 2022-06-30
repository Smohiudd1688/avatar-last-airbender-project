import React, { useState } from "react";

function CharacterForm() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [nation, setNation] = useState("");
    const [bender, setBender] = useState("");
    const [about, setAbout] = useState("");

    return(
        <form>
            <h3>Fill Out Character Form</h3>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" value={name} /><br></br>
            <label for="image">Image: </label>
            <input type="text" id="image" name="image" value={image} /><br></br>
            <p id="nationQ">What nation does this character belong to?</p>
            <input type="radio" id="fire" name="fire" value="Fire" />
            <label for="fire">Fire</label>
            <input type="radio" id="air" name="air" value="Air" />
            <label for="air">Air</label>
            <input type="radio" id="water" name="water" value="Water" />
            <label for="fire">Water</label>
            <input type="radio" id="earth" name="earth" value="Earth" />
            <label for="fire">Earth</label>

        </form>
    );
}

export default CharacterForm;