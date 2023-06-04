// Copyright (c) 2023 David Such
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// script.js
const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "Swift",
    "Rust",
    "TypeScript",
    "PHP"
  ];
  
  let currentLanguage;
  let attempts = 0;
  
  function generatePuzzle() {
    attempts = 0;
    currentLanguage = getRandomLanguage();
    document.getElementById("clue").textContent = "Clue 1: " + getClue(1);
    document.getElementById("attempts").textContent = "Remaining attempts: " + (5 - attempts);
    document.getElementById("result").textContent = "";
  }
  
  function getRandomLanguage() {
    const randomIndex = Math.floor(Math.random() * programmingLanguages.length);
    return programmingLanguages[randomIndex];
  }
  
  function getClue(clueNumber) {
    // Add more clues for each programming language
    switch (clueNumber) {
      case 1:
        return "This programming language was created in the early 1990s and is widely used for web development.";
      // Add more cases for additional clues
      default:
        return "No more clues available.";
    }
  }
  
  function checkGuess() {
    const guess = document.getElementById("guess").value;
    attempts++;
  
    if (guess.toLowerCase() === currentLanguage.toLowerCase()) {
      document.getElementById("result").textContent = "Congratulations! You guessed it correctly.";
      document.getElementById("result").style.color = "green";
      document.getElementById("guess").disabled = true;
    } else if (attempts === 5) {
      document.getElementById("result").textContent = "Sorry, you ran out of attempts. The correct answer was " + currentLanguage + ".";
      document.getElementById("result").style.color = "red";
      document.getElementById("guess").disabled = true;
    } else {
      document.getElementById("result").textContent = "Wrong guess. Try again.";
      document.getElementById("result").style.color = "red";
      document.getElementById("attempts").textContent = "Remaining attempts: " + (5 - attempts);
      document.getElementById("clue").textContent = "Clue " + (attempts + 1) + ": " + getClue(attempts + 1);
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
  