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
// Initial Code (With two objects and no constructors)


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





*/


//Refactored code:  This code isn't necessarily better than the original version. They both work, but I wanted to get 
// practice creating constructors and object types and working with the this keyword. This version makes it possible to define new
// seekers easily, in case the user wants to change who the seeker is.


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


//Function calls

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





/*
// Reflection


At first, my code wasn't working and I realized that it was because I had placed all of my functions calls inside console logs.
This wasn't necessary because the functions themselves had console logs inside of them. I also wasn't sure whether to create variables 
that were equal to functions (as in the original version) versus whether to use constructors (as in the refactored version). I discussed this during 
office hours and learned that this comes down to personal preference, but creating a constuctor function can be helpful when you will be creating 
multiple instances of an object type (i.e. if we wanted to create multiple seekers versus just one). If we were to use a constructor function, 
we would use the this keyword to refer to the future objects we instantiate. Hence, the this keyword was used frequently in the methods 
in the refactored but not original version. The only time I used the this keyword in the original version was when I created a method as 
a property of the seeker object (seeker.feeling()); the this keyword in the body of the feeling method referred back to the seeker object.


I wanted to be able to create a while loop where if the seeker searchers the bedroom more than twice in a row, they would get one message,
then after they have searched the bedroom three times in a row, they would another message. I wasn't able to figure out how to do this,
so I will keep playing with it.

I learned how to create object types with constructor functions; how to create instances of objects using literal notation and constructors; and how to work with the this keyword. I also learned about scope.
I have a decent understanding of all this but am still a bit confused by constructors and the this keyword.

I enjoyed writing code that resembled a game and seeing it work. I didn't find any parts of the challenge tedious since everything
was a part of the learning experience.




*/