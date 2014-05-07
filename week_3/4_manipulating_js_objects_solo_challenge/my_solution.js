// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.


1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
// Declare a variable adam and use object literal notation to assign this the value of an Object object with no properties 
  
2. Give adam a name property with the value "Adam".
// Assign the variable adam a name property with a value of "Adam."

3. Add a spouse property to terah and assign it the value of adam.
// Assign terah a spouse property with the value of adam.

4. Change the value of the terah weight property to 125.
// Redefine terah's weight to 125.

5. Remove the eyeColor property from terah.
// Delete the eyeColor property from Terah.

6. Add a spouse property to adam and assign it the value of terah.
// Assign adam a spouse property with the value of terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
// Assign a children property to Terah and assign it the value of a Javascript object with no properties.

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
// Assign a carson property to the value of the terah children property.
// Assign the carson property the value of an object with the property name with a value of "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
// Assign a carter property to the value of the terah children property.
// Assign the carter property the value of an object with the property name with a value of "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
// Assign a colton property to the value of the terah children property.
// Assign the colton property the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.
// Assign adam the value of terah children.


*/

// __________________________________________
// Write your code below.

var adam= {};
var adam= {name: "Adam"};
terah.spouse=adam;
terah.weight=125;
delete terah.eyeColor;
terah.spouse.spouse=terah;
terah.children={};
var carson= {name: "Carson"};
terah.children.carson= {};
terah.children.carson.name="Carson";
terah.children.carter= {};
terah.children.carter.name="Carter";
terah.children.colton= {};
terah.children.colton.name="Colton";
adam.children=terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
// 

// What parts of your strategy worked? What problems did you face?
// I approached this challenge test by test, by writing code in response to the error messages then refining that 
// code based on the subsequent error messages. I had great difficulty figuring out how to add Carson,
// Carter, and Colton as children. Trial and error helped me solve this problem. I also wasn't sure why 
// I wasn't able to assign terah's children as adam's children, then realized it was because I had to reverse the
// order in which I presented the values to adam.children=terah.children.

// What questions did you have while coding? What resources did you find to help you answer them?
// I wasn't sure how to delete a property from an Object literal, so I consulted Stack Overflow. I also am not sure why
// the console prints spouse[circular]. 

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I struggled with adding Terah's children. When I put terah.children.name.carson="Carson", the
// console stated that it cannot read property "name" of undefined. I kept trying different configurations of 
// this until the test passed. At one point, the console said that Carson was undefined. After pondering this
// for awhile, I realized that it was because I forgot to put it in quotation marks.

// Did you learn any new skills or tricks?
// I learned how to create, add properties to, delete properties from, and access values from JavaScript Object literals.


// How confident are you with each of the Learning Competencies?
// I feel pretty confident about using test-driven development to alter Object literals. 

// Which parts of the challenge did you enjoy?
// I enjoyed solving the problems incrementally and checking in with the console test by test.

// Which parts of the challenge did you find tedious?
// I didn't find the challenge tedious.


__________________________________________
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)