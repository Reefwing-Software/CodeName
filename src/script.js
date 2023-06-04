// Copyright (c) 2023 David Such
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// script.js
const programmingLanguages = [
    {
      name: "JavaScript",
      clues: [
        "This programming language was created in the early 1990s and is widely used for web development.",
        "It is a dynamic and interpreted language.",
        "It has a rich ecosystem of libraries and frameworks."
      ]
    },
    {
      name: "Python",
      clues: [
        "This programming language emphasizes code readability and simplicity.",
        "It is often used for scientific computing and data analysis.",
        "It uses indentation for block structures instead of braces."
      ]
    },
    // Add more programming languages with their respective clues
  ];
  
  let currentLanguage;
  let attempts = 0;
  let incorrectGuesses = [];
  
  function generatePuzzle() {
    attempts = 0;
    incorrectGuesses = [];
    currentLanguage = getRandomLanguage();
    document.getElementById("clue").textContent = "Clue 1: " + getClue(1);
    document.getElementById("attempts").textContent = "Remaining attempts: " + (5 - attempts);
    document.getElementById("result").textContent = "";
    document.getElementById("incorrect-guesses").textContent = "";
  }
  
  function getRandomLanguage() {
    const randomIndex = Math.floor(Math.random() * programmingLanguages.length);
    return programmingLanguages[randomIndex];
  }
  
  function getClue(clueNumber) {
    const currentClues = currentLanguage.clues;
    if (clueNumber <= currentClues.length) {
      return currentClues[clueNumber - 1];
    } else {
      return "No more clues available.";
    }
  }
  
  function checkGuess() {
    const guess = document.getElementById("guess").value;
    attempts++;
  
    if (guess.toLowerCase() === currentLanguage.name.toLowerCase()) {
      document.getElementById("result").textContent = "Congratulations! You guessed it correctly.";
      document.getElementById("result").style.color = "green";
      document.getElementById("guess").disabled = true;
    } else if (attempts === 5) {
      document.getElementById("result").textContent = "Sorry, you ran out of attempts. The correct answer was " + currentLanguage.name + ".";
      document.getElementById("result").style.color = "red";
      document.getElementById("guess").disabled = true;
    } else {
      incorrectGuesses.push(guess);
      document.getElementById("result").textContent = "Wrong guess. Try again.";
      document.getElementById("result").style.color = "red";
      document.getElementById("attempts").textContent = "Remaining attempts: " + (5 - attempts);
      document.getElementById("clue").textContent = "Clue " + (attempts + 1) + ": " + getClue(attempts + 1);
      document.getElementById("incorrect-guesses").textContent = "Incorrect guesses: " + incorrectGuesses.join(", ");
    }
  
    document.getElementById("guess").value = "";
  }
  
  window.onload = function () {
    generatePuzzle();
    document.getElementById("guess").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkGuess();
      }
    });
  };
  