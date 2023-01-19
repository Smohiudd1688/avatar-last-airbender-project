import React, {useState} from "react";

// Type word, click on submit button, increments the counter by the word length.

function Counter() {
    const [count, setCount] = useState(0);
    const [inputText, setInputText] = useState("");

    function handleInputChange(event) {
        setInputText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const num = inputText.length;
        setCount(count + num);
        setInputText("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} value={inputText} />
                <input type="submit" />
            </form>
            <h1>{count}</h1>
        </div>

    );
}

export default Counter;
