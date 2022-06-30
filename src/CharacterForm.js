import React, { useState } from "react";

function CharacterForm({onNewCharacterSubmit, setShowForm}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [nation, setNation] = useState("");
    const [bender, setBender] = useState("Non-Bender");
    const [about, setAbout] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.value);
    }

    function handleNationChange(event) {
        setNation(event.target.value);
    }

    function handleBenderChange(event) {
        setBender(event.target.value);
    }

    function handleAboutChange(event) {
        setAbout(event.target.value);
    }

    function handleCharacterSubmit(event) {
        event.preventDefault();
        setShowForm(false);

        const newCharacter = {
            name: name,
            image: image,
            nation: nation,
            bender: bender,
            about: about
        }

        fetch("http://localhost:3001/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCharacter)
        })
        .then(response => response.json())
        .then(data => onNewCharacterSubmit(data));

        setName("");
        setImage("");
        setNation("");
        setBender("Non-Bender");
        setAbout("");
    }

    return(
        <form onSubmit={handleCharacterSubmit} >
            <h2>Fill Out Character Form</h2>
            <label htmlFor="name">Name: </label>
            <input onChange={handleNameChange} type="text" id="name" name="name" value={name} /><br></br>
            <label htmlFor="image">Image: </label>
            <input onChange={handleImageChange} type="text" id="image" name="image" value={image} /><br></br>
            <p className="formQ"><strong>What nation does this character belong to?</strong></p>
            <input onChange={handleNationChange} checked={nation === "Fire" ? true : false } type="radio" id="fire" name="fire" value="Fire" />
            <label htmlFor="fire">Fire</label>
            <input onChange={handleNationChange} checked={nation === "Air" ? true : false } type="radio" id="air" name="air" value="Air" />
            <label htmlFor="air">Air</label>
            <input onChange={handleNationChange} checked={nation === "Water" ? true : false } type="radio" id="water" name="water" value="Water" />
            <label htmlFor="fire">Water</label>
            <input onChange={handleNationChange} checked={nation === "Earth" ? true : false } type="radio" id="earth" name="earth" value="Earth" />
            <label htmlFor="fire">Earth</label>
            <p className="formQ"><strong>Are they a bender and if so, what type?</strong></p>
            <select onChange={handleBenderChange} name="bender" id="bender">
                <option value="Non-Bender">Non-Bender</option>
                <option value="Air">Air</option>
                <option value="Fire">Fire</option>
                <option value="Earth">Earth</option>
                <option value="Water">Water</option>
                <option value="Avatar">Avatar</option>
            </select><br></br>
            <p className="formQ"><strong>Tell us about this character.</strong></p>
            <textarea onChange={handleAboutChange} rows="5" cols="35" id="about" value={about}></textarea><br></br>
            <input type="submit" id="submit" value="Add Character" />
        </form>
    );
}

export default CharacterForm;