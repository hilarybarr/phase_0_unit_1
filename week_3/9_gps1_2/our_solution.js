// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Michael Weiss
//  2. Hilary Barr


// 1. "YOU SIGNED... WHO?!"
var tomCruise = {
    Name: "Tom Cruise",
    Age: 50,
    Quote: "Show me the money!",
    Gender: "Male"
};

var nataliePortman = {
    Name: "Natalie Portman",
    Age: 35,
    Quote: "May the force be with you!",
    Gender: "Female"
};



// 2. "Here they Come!"

var adamSandler = {
    Name: "Adam Sandler",
    Age: 47,
    Quote: "That's your home! Are you too good for your home?!",
    Gender: "Male"
};

var kristenBell = {
    Name: "Kristen Bell",
    Age: 33,
    Quote: "Do you wanna build a snowman?",
    Gender: "Female"
};


var jimCarrey = {
    Name: "Jim Carrey",
    Age: 52,
    Quote: "...So you're telling me there's a chance? YEAH!",
    Gender: "Male",
    showQuote: function() {console.log(this.Quote); }
};



// 3. "TIME IS MONEY!"


var Client= function(Name, Age, Quote) {
	 this.Name=Name;
	 this.Age=Age;
	 this.Quote=Quote;
};


var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.Age === 48);
console.log(shooterMcGavin.Quote === "Just stay out of my way... or you'll pay. Listen to what I say.");

console.log(shooterMcGavin.Age);



// 4. "SHOW 'EM OFF!"
//The Client here is just the parameter, not the same as the var Client
var printClient=function(Client) {
	console.log("This is " + Client.Name);
	if (Client.Gender==="Male") {
		console.log("He is " + Client.Age);
		console.log("He said  " + Client.Quote);
	}
	else {
		console.log("She is  " + Client.Age);
		console.log("She said  " + Client.Quote);
	}

}

printClient(kristenBell);



// 5. "ShowQuote"

var jimCarrey = {
    Name: "Jim Carrey",
    Age: 52,
    Quote: "...So you're telling me there's a chance? YEAH!",
    Gender: "Male",
    showQuote: function() {console.log(this.Quote); }
};

jimCarrey.showQuote()



// ** BONUS **
// Added Gender above

// //  Your Reflection:
// What parts of your strategy worked? What problems did you face?
// We were confused about how to write the functions and what to include in them, so we did some research and tried implementing 
// a few different ideas. I was a bit thrown off by the driver test (i.e. I wasn't sure if it was complete or not). Michael did a great
// job of helping me understand what was going on. This was the first pairing challenge where I wasn't sure what was going on part of the time, and
// it was a good experience going through that and seeing that everything worked out in the end.

// What questions did you have while coding? What resources did you find to help you answer them?
// We had questions about syntax and what constructors are. For about half our questions we asked Roy for help and the other half we googled or consulted Stack Overflow.


// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I am having trouble with the concept of constructors. Also, our syntax resulted in error messages frequently, but we found that terminal indicates what exactly the syntax error is.

// Did you learn any new skills or tricks?
// I learned how to write a function within an object literal and how to use "this". I also got more experience with test-driven development and syntax.


// How confident are you with each of the Learning Competencies?
// I am not very confident about working with object literals yet, so I will keep practicing.

// Which parts of the challenge did you enjoy?
// I enjoyed going from being confused to seeing everything come together in the end.


// Which parts of the challenge did you find tedious?
// Writing multiple object literals with the same properties was a bit tedious.