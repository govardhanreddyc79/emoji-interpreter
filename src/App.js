import "./styles.css";
import React, { useState } from "react";

var foodDictionary = {
  "🍟": "French Fries",
  "🥪": "Sandwich",
  "🍕": "Pizza",
  "🥞": "Pancakes",
  "🌭": "Hot Dog",
  "🍔": "Hamburger",
  "🍪": "Cookie",
  "🍨": "Ice Cream",
  "☕": "Coffee",
  "🍖": "Meat"
};

var itemsWehave = Object.keys(foodDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    if (userInput in foodDictionary) {
      var meaning = foodDictionary[userInput];
    } else {
      meaning = "Item not in the menu";
    }
    setMeaning(meaning);
  }

  function foodClickHandler(item) {
    var meaning = foodDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food Menu</h1>
      <input
        style={{ width: "30%", height: "30px" }}
        onChange={onChangeHandler}
      />
      <h2>
        <span style={{ color: "green" }}>{meaning}</span>
      </h2>
      <h3>Items we have</h3>
      {itemsWehave.map((item) => {
        return (
          <span
            onClick={() => foodClickHandler(item)}
            key={item}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
