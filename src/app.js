/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRsuit());
  document.querySelector(".card").innerHTML = generateRnumber();
};

function generateRnumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indxNumber = Math.floor(Math.random() * numbers.length);
  return numbers[indxNumber];
}

// ------------------------------------------------------------------

function generateRsuit() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suit = ["diamond", "spade", "heart", "club"];

  let suitNumber = Math.floor(Math.random() * suit.length);
  return suit[suitNumber];
}
