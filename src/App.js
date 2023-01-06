import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🚗": "Car",
  "🚌": "Bus",
  "🚜": "Tractor",
  "🏍️": "Motorcycle",
  "🛺": "Auto Rickshaw",
  "🚲": "Bicycle",
  "🚤": "Speedboat",
  "🚁": "Helicopter",
  "🚆": "Train"
};
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this emoji ";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>

      <div style={{ fontSize: "larger", fontWeight: "bold", padding: "1rem" }}>
        {" "}
        {meaning}
      </div>
      <h3>Emojis we know</h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
