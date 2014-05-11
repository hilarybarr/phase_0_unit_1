// I worked [by myself] on this challenge

// Your mission description:
// Let's play a game of hide and seek! Mike will be the seeker and his brother Tom will be the hider.
// Type begingame to start (console.log(begingame()), then search by location (console.log(search(location)).
// If you need a hint, request a hint (console.log(requestHint(). Bring it on!



// Pseudocode
// Define seeker and hider.
// Define the begingame function.
// Define the search function.
// Define the requestHint function.
// Begin game
// Ask for a hint
// Search in the basement.
// Search in the attic.
// Search in the bathroom.
// Ask for a hint
// Search in the closet.
// Search in the dining room.
// Ask for a hint
// Search in the bedroom twice.
// Search in the kitchen.



/*
// Initial Code

var seeker= {
	name: "Mike",
	status: "excited",
	location: "bedroom"
}

var hider= {
	name: "Tom",
	status: "excited",
	location: "closet",
	hint: "You are getting warmer, bro."
}



// Define the begingame function.

var begingame= function() {
	console.log(seeker.name + " is currently in the " + seeker.location +"." + seeker.name + " closes his eyes and counts to ten while "+ hider.name+ " hides. Go find " + hider.name +"!!!");
}

// Define the search function.

var search=function(location) {
	 this.location=location;
	 if (this.location===hider.location) {
	 	 console.log("You found  " + hider.name + " in the  " +this.location +" . Good job!");
	 		if (hider.location==="kitchen")  {
	 			console.log("You are tired now. Game over.")
	 		}
	 		else {
				console.log(hider.name +" moved somewhere else. Try searching again!");
	 			hider.location="kitchen";
	 			this.status="proud";
	 		}
	 }
	 else {
	 	if (this.location==="bedroom") {
	 		console.log("You walked out the bedroom but think you hear something from inside. Maybe you should check the bedroom again?")
	 	}
	 	else {
	 		console.log(hider.name +" is not in the " + this.location + ". Try searching somewhere else.");
	 		this.status="confused";
	 	}
	 }
}; 


// Define the requestHint function.
var requestHint=function() {
	if (this.status==="confused") {
		console.log(hider.hint);
	}
	else {
		console.log("You need to try searching more before " + hider.name + " will give you a hint, silly.")
	}

};




// Begin game
console.log(begingame());
// Ask for a hint
console.log (requestHint());
// Search in the basement.
console.log(search("basement"));
// Search in the attic.
console.log(search("attic"));
// Search in the bathroom.
console.log(search("bathroom"));
// Ask for a hint
console.log (requestHint());
// Search in the closet.
console.log(search("closet"));
// Search in the dining room.
console.log(search("diningroom"));
// Ask for a hint
console.log (requestHint());
// Search in the bedroom twice.
console.log(search("bedroom"));
console.log(search("bedroom"));
// Search in the kitchen.
console.log(search("kitchen"));

*/



// Refactored Code
// The original code did what it was supposed to do. However, the console wrote "undefined" after each console log. 
// After trying a bunch of ideas out, I realized that I didn't need all the console.logs in the code because there are console.logs
// written into the functions. I deleted the console logs from the game portion. I also added a function, feeling, to the seeker that writes 
// his status. 


var seeker= {
	name: "Mike",
	status: "excited",
	feeling: function() {console.log("You are feeling " + this.status);},
	location: "bedroom"
}

var hider= {
	name: "Tom",
	status: "excited",
	location: "closet",
	hint: "You are getting warmer, bro."
}



// Define the begingame function.

var begingame= function() {
	console.log(seeker.name + " is currently in the " + seeker.location +"." + seeker.name + " closes his eyes and counts to ten while "+ hider.name+ " hides. Go find " + hider.name +"!!!");
}

// Define the search function.

var search=function(location) {
	 seeker.location=location;
	 if (seeker.location===hider.location) {
	 	 console.log("You found  " + hider.name + " in the  " +seeker.location +" . Good job!");
	 	 seeker.status="proud";
	 		if (hider.location==="kitchen")  {
	 			console.log("You are tired now. Game over.")
	 		}
	 		else {
				console.log(hider.name +" moved somewhere else. Try searching again!");
	 			hider.location="kitchen";
	 		}
	 }
	 else {
	 	if (seeker.location==="bedroom") {
	 		console.log("You walked out the bedroom but think you hear something from inside. Maybe you should check the bedroom again?")
	 	}
	 	else {
	 		console.log(hider.name +" is not in the " + seeker.location + ". Try searching somewhere else.");
	 		seeker.status="confused";
	 	}
	 }
}; 


// Define the requestHint function.
var requestHint=function() {
	if (seeker.status==="confused") {
		console.log(hider.hint);
	}
	else {
		console.log("You want a hint? You need to try searching more before " + hider.name + " will give you a hint, silly.")
	}

};



// Begin game
begingame();
// How are you feeling?
seeker.feeling();
// Ask for a hint
requestHint();
// Search in the basement.
search("basement");
// Search in the attic.
search("attic");
// Search in the bathroom.
search("bathroom");
// How are you feeling?
seeker.feeling();
// Ask for a hint
requestHint();
// Search in the closet.
search("closet");
// How is Mike feeling?
seeker.feeling();
// Search in the dining room.
search("diningroom");
// Ask for a hint
requestHint();
// Search in the bedroom twice.
search("bedroom");
search("bedroom");
// Search in the kitchen.
search("kitchen");







/*
Refactor V2: With constructor objects

//Define Seeker object type
function Seeker(name, status, location) {
  this.name=name;
  this.status=status;
  this.location=location;
  this.feeling= function() {console.log("You are feeling " + this.status);};
  this.begingame=begingame;
  this.search=search;
  this.requestHint=requestHint;
}



// Create an instance of Seeker
var seeker1= new Seeker("Mike", "happy", "bedroom");


// Create hider object
var hider= {
     name:"Tom", 
     location: "closet",
     hint: "You are getting warmer, bro" 
     }

// Define begingame function
function begingame() {
  console.log(this.name + " is currently in the " + this.location +"." + this.name + " closes his eyes and counts to ten while "+ hider.name+ " hides. Go find " + hider.name +"!!!");
}



// Define search function
function search(location) {
   this.location=location;
   if (this.location===hider.location) {
     console.log("You found  " + hider.name + " in the  " + this.location +" . Good job!");
     this.status="proud";
      if (hider.location==="kitchen")  {
        console.log("You are tired now. Game over.")
      }
      else {
        console.log(hider.name +" moved somewhere else. Try searching again!");
        hider.location="kitchen";
      }
   }
   else {
    if (this.location==="bedroom") {
      console.log("You walked out the bedroom but think you hear something from inside. Maybe you should check the bedroom again?")
    }
    else {
      console.log(hider.name +" is not in the " + this.location + ". Try searching somewhere else.");
      this.status="confused";
    }
   }
}; 


// Define the requestHint function.
function requestHint() {
  if (this.status==="confused") {
    console.log(hider.hint);
  }
  else {
    console.log("You want a hint? You need to try searching more before " + hider.name + " will give you a hint, silly.")
  }

};







// Begin game
seeker1.begingame();
// How is Mike feeling?
seeker1.feeling();
// Ask for a hint
seeker1.requestHint();
// Search in the basement.
seeker1.search("basement");
// Search in the attic.
seeker1.search("attic");
// Search in the bathroom.
seeker1.search("bathroom");
// How is Mike feeling?
seeker1.feeling();
// Ask for a hint
seeker1.requestHint();
// Search in the closet.
seeker1.search("closet");
// How is Mike feeling?
seeker1.feeling();
// Search in the dining room.
seeker1.search("diningroom");
// Ask for a hint
requestHint();
// Search in the bedroom twice.
seeker1.search("bedroom");
seeker1.search("bedroom");
// Search in the kitchen.
seeker1.search("kitchen");







*/


// Reflection
//   Question: was I supposed to use seeker. in the functions or this.
// How do I get it so that if he searches bedroom twice it says to look somewhere else
// 
// 
// 
// 
// 
// 