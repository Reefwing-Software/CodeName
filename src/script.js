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
        "It has a rich ecosystem of libraries and frameworks.",
        "It is often used for client-side scripting.",
        "It supports object-oriented, functional, and imperative programming paradigms.",
        "It is the backbone of modern web applications.",
        "It has built-in support for manipulating HTML and CSS.",
        "Its code can be run in both browsers and server-side environments.",
        "It has various frameworks like React, Angular, and Vue for building user interfaces.",
        "It is the most popular programming language according to numerous surveys."
      ]
    },
    {
      name: "Python",
      clues: [
        "This programming language emphasizes code readability and simplicity.",
        "It is often used for scientific computing and data analysis.",
        "It uses indentation for block structures instead of braces.",
        "It is known for its extensive standard library.",
        "It supports multiple programming paradigms including object-oriented and functional programming.",
        "It has a large and active community of developers.",
        "It is used in various domains such as web development, machine learning, and automation.",
        "It is the language of choice for many data scientists and AI researchers.",
        "It has a clean and expressive syntax.",
        "It's popularity has been steadily growing in recent years."
      ]
    },
    {
      name: "Java",
      clues: [
        "This programming language was designed to be simple, object-oriented, and familiar.",
        "It is platform-independent and can run on various operating systems.",
        "Java programs are compiled into bytecode and run on the Java Virtual Machine (JVM).",
        "It is widely used for building enterprise-level applications.",
        "Java has a strong focus on write once, run anywhere (WORA) principle.",
        "It provides built-in memory management and garbage collection.",
        "Java supports multithreading for concurrent programming.",
        "Java has a vast ecosystem with numerous libraries and frameworks.",
        "It is one of the most popular programming languages for Android app development.",
        "Java has a long history and is still widely used in the industry."
      ]
    },
    {
      name: "C++",
      clues: [
        "This programming language is an extension of the C programming language.",
        "It is a compiled language that allows low-level and high-level programming.",
        "C++ supports object-oriented programming and generic programming.",
        "It is widely used for system programming and game development.",
        "C++ provides direct memory manipulation through pointers.",
        "It has a rich standard library and supports standard template library (STL).",
        "C++ offers strong performance and efficiency.",
        "It has a complex syntax but provides powerful control over hardware resources.",
        "C++ is used extensively in industries like finance, gaming, and embedded systems.",
        "It is considered one of the most versatile and powerful programming languages."
      ]
    },
    {
      name: "Ruby",
      clues: [
        "This programming language focuses on simplicity and productivity.",
        "It has a clean and elegant syntax.",
        "Ruby is object-oriented and supports dynamic typing.",
        "It has a strong emphasis on code readability.",
        "Ruby is often used for web development with the Ruby on Rails framework.",
        "It is known for its vast collection of open-source libraries and gems.",
        "Ruby follows the principle of least surprise (POLS).",
        "It has a thriving community and promotes developer happiness.",
        "Ruby encourages writing expressive and beautiful code.",
        "It is the language behind popular websites and applications."
      ]
    },
    {
      name: "Go",
      clues: [
        "This programming language was developed by Google.",
        "It is designed for simplicity, efficiency, and scalability.",
        "Go has a statically typed syntax similar to C.",
        "It has built-in support for concurrent programming with goroutines.",
        "Go offers garbage collection and memory safety.",
        "It is commonly used for building network servers and distributed systems.",
        "Go focuses on fast compilation and execution speed.",
        "It has a strong standard library with support for various tasks.",
        "Go is favored for its ease of use and efficient resource utilization.",
        "It is gaining popularity for cloud-native and microservices architectures."
      ]
    },
    {
      name: "Swift",
      clues: [
        "This programming language was developed by Apple.",
        "It is designed to be safe, modern, and expressive.",
        "Swift is used for developing applications for Apple platforms like iOS, macOS, and watchOS.",
        "It combines the best features of C and Objective-C.",
        "Swift provides type inference, optionals, and memory management.",
        "It offers powerful features like closures, generics, and pattern matching.",
        "Swift code is concise and easy to read.",
        "It has an interactive coding environment with Playgrounds.",
        "Swift is continuously evolving with regular updates and improvements.",
        "It is gaining popularity among developers for its speed and developer-friendly features."
      ]
    },
    {
      name: "Rust",
      clues: [
        "This programming language focuses on safety, speed, and concurrency.",
        "It guarantees memory safety and prevents common programming errors.",
        "Rust provides fine-grained control over system resources.",
        "It has a strong type system and supports pattern matching.",
        "Rust's borrow checker enforces strict ownership and borrowing rules.",
        "It is used for systems programming and building high-performance applications.",
        "Rust has a growing ecosystem with a package manager called Cargo.",
        "It offers built-in concurrency support with async/await syntax.",
        "Rust code can be compiled to produce highly optimized binaries.",
        "It is considered a modern and innovative language for systems development."
      ]
    },
    {
      name: "TypeScript",
      clues: [
        "This programming language is a typed superset of JavaScript.",
        "It adds static typing and additional features to JavaScript.",
        "TypeScript code is transpiled to JavaScript for running in web browsers.",
        "It is widely used for large-scale applications and enterprise development.",
        "TypeScript provides better tooling and error checking compared to JavaScript.",
        "It supports modern JavaScript features and ECMAScript standards.",
        "TypeScript has a rich type system with interfaces, enums, and generics.",
        "It is backed by Microsoft and has a growing community of developers.",
        "TypeScript integrates well with popular JavaScript frameworks and libraries.",
        "It enhances productivity and maintainability of JavaScript projects."
      ]
    },
    {
      name: "PHP",
      clues: [
        "This programming language is mainly used for server-side web development.",
        "It is embedded within HTML code and can generate dynamic web pages.",
        "PHP is easy to learn and widely supported by web hosting providers.",
        "It has a large ecosystem of frameworks like Laravel and Symfony.",
        "PHP offers a range of database support including MySQL and PostgreSQL.",
        "It is used in popular content management systems like WordPress and Drupal.",
        "PHP provides features for handling forms, sessions, and file uploads.",
        "It is known for its simplicity and flexibility in web development.",
        "PHP has been widely adopted and powers millions of websites.",
        "It continues to evolve with regular updates and community contributions."
      ]
    }
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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function getClue(clueNumber) {
    if (clueNumber <= currentLanguage.clues.length) {
      const shuffledClues = shuffleArray(currentLanguage.clues.slice());
      return shuffledClues[clueNumber - 1];
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
      document.getElementById("result").textContent = "Wrong guess. Try again.";
      document.getElementById("result").style.color = "red";
      document.getElementById("attempts").textContent = "Remaining attempts: " + (5 - attempts);
      document.getElementById("clue").textContent = "Clue " + (attempts + 1) + ": " + getClue(attempts + 1);
      incorrectGuesses.push(guess);
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
  