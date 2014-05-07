// I paired [by myself:] on this challenge.



// Pseudocode
// Assign a number to a variable called secretNumber.
// Redefine the value of secretNumber to 7.
// Assign a string to a variable called password.
// Redefine the value of password to "just open the door."
// Assign a boolean to a ariable called allowedIn.
// Redefine the value of allowedIn to false.
// Create an instance of an array called members. 
// The first element in the array called members is John.
// Add two more elements to the array, and make the fourth element in the array  Mary.


// __________________________________________
// Write your code below.

var secretNumber= 3
var secretNumber= 7
var password="hello"
var password="just open the door"
var allowedIn = true
var allowedIn= false
var members= []
var members= ["Tim"]
var members= ["John"]
var members=["John", "Bill", "Todd", "Mary"]


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// I removed the code that did not pass the tests. I also added a semicolon at the end of
// each line just to get in the practice of doing this.

// var secretNumber= 7;
// var password="just open the door";
// var allowedIn= false;
// var members=["John", "Bill", "Todd", "Mary"];


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// What parts of your strategy worked? What problems did you face?
// My strategy was to run the JavaScript file using node.js then debug error by error. To debug, I wrote code 
// that I hypothesized would address the error, then adjusted the code based on the output of
// the driver test. After all my tests passed as true, I knew that the code was complete. I initially
// didn't understand what I was supposed to do but understood how the driver test worked after going 
// through a few tests.


// What questions did you have while coding? What resources did you find to help you answer them?
// Becaause Javascript is so new to me, I had questions about just about everything, so I went through the 
// Codecademy tutorials and also skimmed through Mozilla's Javascript documentation.

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I am still wrapping my head around how to use arrays in Javascript (i.e. how to create an each, select,
// map, and max method on an array). I am also shaky on all the possible variations of while and for 
// loops in Javascript.

// Did you learn any new skills or tricks?
// I learned a lot in this challenge, most notably how to do test-driven development.


// How confident are you with each of the Learning Competencies?
// I feel confident with the learning objectives (define local variables in Javascript, 
// create objects of different types, create and add objects to an array, and use pre-written 
// tests to drive development). 
//


// Which parts of the challenge did you enjoy?
// I  found it interesting learning the similarities and differences between Javascript and Ruby 
// and enjoyed solving the problems incrementally.


// Which parts of the challenge did you find tedious?
// Writing the pseudocode was a bit tedious.
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

