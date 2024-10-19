// main.js

// Step 1: Require the Person class from exercise-1-classExample.js
const Person = require('./advanced-level-JavaScript-exercises/advanced-level-JavaScript-exercises/exercise-1-classExample.js');

// Step 2: Create instances of the Person class
const john = new Person('John', 30);  // John's initial age is 30
const jane = new Person('Jane', 25);  // Jane's initial age is 25

// Step 3: Call the greet method for both instances
john.greet();  // Output: Hello, my name is John and I am 30 years old.
jane.greet();  // Output: Hello, my name is Jane and I am 25 years old.

// Step 4: Call the haveBirthday method for both instances
john.haveBirthday();  // Output: John is now 31 years old!
jane.haveBirthday();  // Output: Jane is now 26 years old!