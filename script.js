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
        "Its programs are compiled into bytecode.",
        "It is widely used for building enterprise-level applications.",
        "It has a strong focus on write once, run anywhere (WORA) principle.",
        "It provides built-in memory management and garbage collection.",
        "It supports multithreading for concurrent programming.",
        "It has a vast ecosystem with numerous libraries and frameworks.",
        "It is one of the most popular programming languages for Android app development.",
        "It has a long history and is still widely used in the industry."
      ]
    },
    {
      name: "C++",
      clues: [
        "This programming language is an extension of the C programming language.",
        "It is a compiled language that allows low-level and high-level programming.",
        "It supports object-oriented programming and generic programming.",
        "It is widely used for system programming and game development.",
        "It provides direct memory manipulation through pointers.",
        "It has a rich standard library and supports standard template library (STL).",
        "It offers strong performance and efficiency.",
        "It has a complex syntax but provides powerful control over hardware resources.",
        "It is used extensively in industries like finance, gaming, and embedded systems.",
        "It is considered one of the most versatile and powerful programming languages."
      ]
    },
    {
      name: "Ruby",
      clues: [
        "This programming language focuses on simplicity and productivity.",
        "It has a clean and elegant syntax.",
        "It is object-oriented and supports dynamic typing.",
        "It has a strong emphasis on code readability.",
        "It is often used for web development with the Ruby on Rails framework.",
        "It is known for its vast collection of open-source libraries and gems.",
        "It follows the principle of least surprise (POLS).",
        "It has a thriving community and promotes developer happiness.",
        "It encourages writing expressive and beautiful code.",
        "It is the language behind popular websites and applications."
      ]
    },
    {
      name: "Go",
      clues: [
        "This programming language was developed by Google.",
        "It is designed for simplicity, efficiency, and scalability.",
        "It has a statically typed syntax similar to C.",
        "It has built-in support for concurrent programming with goroutines.",
        "It offers garbage collection and memory safety.",
        "It is commonly used for building network servers and distributed systems.",
        "It focuses on fast compilation and execution speed.",
        "It has a strong standard library with support for various tasks.",
        "It is favored for its ease of use and efficient resource utilization.",
        "It is gaining popularity for cloud-native and microservices architectures."
      ]
    },
    {
      name: "Swift",
      clues: [
        "This programming language was developed by Apple.",
        "It is designed to be safe, modern, and expressive.",
        "It is used for developing applications for Apple platforms like iOS, macOS, and watchOS.",
        "It combines the best features of C and Objective-C.",
        "It provides type inference, optionals, and memory management.",
        "It offers powerful features like closures, generics, and pattern matching.",
        "Its code is concise and easy to read.",
        "It has an interactive coding environment with Playgrounds.",
        "It is continuously evolving with regular updates and improvements.",
        "It is gaining popularity among developers for its speed and developer-friendly features."
      ]
    },
    {
      name: "Rust",
      clues: [
        "This programming language focuses on safety, speed, and concurrency.",
        "It guarantees memory safety and prevents common programming errors.",
        "It provides fine-grained control over system resources.",
        "It has a strong type system and supports pattern matching.",
        "It's borrow checker enforces strict ownership and borrowing rules.",
        "It is used for systems programming and building high-performance applications.",
        "It has a growing ecosystem with a package manager called Cargo.",
        "It offers built-in concurrency support with async/await syntax.",
        "Its code can be compiled to produce highly optimized binaries.",
        "It is considered a modern and innovative language for systems development."
      ]
    },
    {
      name: "TypeScript",
      clues: [
        "This programming language is a typed superset of JavaScript.",
        "It adds static typing and additional features to JavaScript.",
        "Its code is transpiled to JavaScript for running in web browsers.",
        "It is widely used for large-scale applications and enterprise development.",
        "It provides better tooling and error checking compared to JavaScript.",
        "It supports modern JavaScript features and ECMAScript standards.",
        "It has a rich type system with interfaces, enums, and generics.",
        "It is backed by Microsoft and has a growing community of developers.",
        "It integrates well with popular JavaScript frameworks and libraries.",
        "It enhances productivity and maintainability of JavaScript projects."
      ]
    },
    {
      name: "PHP",
      clues: [
        "This programming language is mainly used for server-side web development.",
        "It is embedded within HTML code and can generate dynamic web pages.",
        "It is easy to learn and widely supported by web hosting providers.",
        "It has a large ecosystem of frameworks like Laravel and Symfony.",
        "It offers a range of database support including MySQL and PostgreSQL.",
        "It is used in popular content management systems like WordPress and Drupal.",
        "It provides features for handling forms, sessions, and file uploads.",
        "It is known for its simplicity and flexibility in web development.",
        "It has been widely adopted and powers millions of websites.",
        "It continues to evolve with regular updates and community contributions."
      ]
    },
    {
    name: "C",
    clues: [
      "This programming language was developed in the 1970s at Bell Labs.",
      "It is a low-level programming language often used for system programming and embedded systems.",
      "It has a small set of keywords and a simple syntax.",
      "It provides direct access to memory through pointers.",
      "It is known for its efficiency, speed, and close relationship with the underlying hardware.",
      "It is widely used in operating systems, compilers, and development of other programming languages.",
      "The Standard Library provides a set of functions for common tasks.",
      "Its code can be compiled into machine code for different platforms.",
      "The development of the Unix operating system was done primarily in this language.",
      "It has influenced many programming languages that came after it."
    ]
    },
    {
    name: "FORTRAN",
    clues: [
      "This programming language was developed for scientific and engineering applications.",
      "Its name stands for Formula Translation.",
      "It is one of the oldest programming languages, first released in the 1950s.",
      "It provides extensive support for mathematical and numerical computations.",
      "It is widely used in fields such as physics, weather forecasting, and computational science.",
      "Its code is written in a fixed-format with columns used for specific purposes.",
      "It has evolved over time, and the current standard was released in 2018.",
      "This language introduced features like array processing and structured programming.",
      "The language has a rich set of built-in functions and libraries.",
      "It is known for its performance and efficiency in numerical calculations."
    ]
    },
    {
    name: "Pascal",
    clues: [
      "This programming language was designed by Niklaus Wirth in the 1970s.",
      "It is named after the French mathematician and philosopher Blaise Pascal.",
      "It was created with the goal of promoting good programming practices.",
      "It is known for its strong type checking and structured programming features.",
      "It has a clear and readable syntax with a focus on readability and maintainability.",
      "It is used in education and learning programming principles.",
      "It has influenced other programming languages, including Delphi and Ada.",
      "It supports modular programming through units and libraries.",
      "The language provides support for arrays, records, sets, and dynamic data structures.",
      "Its code is compiled into machine code or bytecode for execution."
    ]
    },
    {
    name: "Objective-C",
    clues: [
      "This programming language is an extension of the C programming language.",
      "It was developed by Brad Cox and Tom Love in the early 1980s.",
      "It is the primary language used for developing applications for Apple platforms.",
      "It combines C language syntax with Smalltalk-style messaging.",
      "It provides object-oriented programming features such as classes, inheritance, and polymorphism.",
      "It uses dynamic typing and runtime binding.",
      "The language is used with Apple's Cocoa and Cocoa Touch frameworks.",
      "Its code is compiled into machine code or bytecode for execution.",
      "With the introduction of Swift, it is still used in existing projects and for compatibility.",
      "It has a long history in Mac and iOS development."
    ]
    },
    {
    name: "HTML",
    clues: [
      "This programming language is used for creating the structure and content of web pages.",
      "Its name stands for HyperText Markup Language.",
      "It is not a traditional programming language but a markup language.",
      "It uses tags to define the structure and elements of a web page.",
      "It is the standard markup language for creating web documents and applications.",
      "It provides a way to describe the semantics and presentation of web content.",
      "The latest version is HTML5, which introduced new features like video, canvas, and web storage.",
      "It is often combined with CSS and JavaScript to create interactive and dynamic web pages.",
      "Web browsers interpret and render its code to display web pages to users.",
      "Learning it is essential for web developers and designers."
    ]
  }
  
  ];
  
  let currentLanguage;
  let cluesRemaining;
  let attempts = 0;
  let cluesShown = [];
  let incorrectGuesses = [];
  
  function generatePuzzle() {
    attempts = 0;
    incorrectGuesses = [];
    currentLanguage = getRandomLanguage();
    cluesRemaining = currentLanguage.clues.slice();
    cluesShown = [];
    document.getElementById("clue").textContent = "Clue 1: " + getClue(1);
    document.getElementById("attempts").textContent = "Remaining attempts: " + (5 - attempts);
    document.getElementById("result").textContent = "";
    document.getElementById("incorrect-guesses").textContent = "";
  }
  
  function getRandomLanguage() {
    const randomIndex = Math.floor(Math.random() * programmingLanguages.length);
    return programmingLanguages[randomIndex];
  }

  function getClue() {
    if (cluesRemaining.length === 0) {
      return "No more clues available.";
    }
  
    const randomIndex = Math.floor(Math.random() * cluesRemaining.length);
    const clue = cluesRemaining[randomIndex];
    cluesRemaining.splice(randomIndex, 1);
    cluesShown.push(clue);
    return clue;
  }
  
  function showNextClue() {
    if (attempts >= 5) {
      return;
    }
  
    const clue = getClue();
    attempts++;
    document.getElementById("clue").textContent = "Clue " + (attempts + 1) + ": " + clue;
    document.getElementById("attempts").textContent = "Remaining attempts: " + (5 - attempts);
  }
  
  function checkGuess() {
    const guess = document.getElementById("guess").value;
    attempts++;
  
    if (guess.toLowerCase() === currentLanguage.name.toLowerCase()) {
      document.getElementById("result").textContent = "Congratulations! You guessed it correctly.";
      document.getElementById("result").style.color = "green";
      document.getElementById("guess").disabled = true;
      document.getElementById("submit").disabled = true;
    } else if (attempts === 5) {
      document.getElementById("result").textContent = "Sorry, you ran out of attempts. The correct answer was " + currentLanguage.name + ".";
      document.getElementById("result").style.color = "red";
      document.getElementById("attempts").textContent = "Remaining attempts: 0";
      document.getElementById("guess").disabled = true;
      document.getElementById("submit").disabled = true;
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

    // Visitor tracking
    let visitorCount = localStorage.getItem("visitorCount") || 0;
    
    visitorCount++;
    localStorage.setItem("visitorCount", visitorCount);
    document.getElementById("visitorCount").textContent = visitorCount;
  };
  