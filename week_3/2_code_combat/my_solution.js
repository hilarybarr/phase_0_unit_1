// I worked on this challenge [by myself]

 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 // RESCUE MISSION
// Press "Play"(<i class='icon-play'></i> to watch the action
//Get Tharin out of the dead end
//delete this.moveRight();
//Get Tharin behind the Munchkin:
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
//Atack that Munchkin
this.attackNearbyEnemy();
//Press the play button



// GRAB THE MUSHROOM
// Get the mushroom.
this.moveUp();
this.moveRight();
//Press play.
// Defeat the ogre.
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
// Press Play.



// DRINK ME
// Keep Tharin alive
// Kill Munchkin #1
this.attackNearbyEnemy();
// Grab the health potion
this.moveRight();
this.moveDown();
// Kill Munchkin #2
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();



// TAUNT THE GUARDS
// Move right and bust down the door.
this.moveRight();
this.bustDownDoor();
// Lure the ogre.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
// Get Phoebe to follow through the dungeon.
this.moveRight();
// Say "Follow Me"
this.say("Follow me.");
// Taunt the guards
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
//Escape to the right
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();



// IT'S A TRAP
// Taunt the ogre
this.moveDown();
this.moveDown();
this.say("Hey");
// Run for cover
this.moveUp();
this.moveUp();



// BREAK THE PRISON
// Tell friend from foe; return true if friend, false if foe
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  
if(name === "Brack")
    return false;  
if(name === "MARCUS")
    return false; 
return true;


// TAUNT
//Lure the ogre by taunting him four times
this.say("Hi");
this.say("Hello mate");
this.say("Bonjour");
this.say("Hola");


// COWARDLY TAUNT
// Run your soldier out where the ogres can hear you.
this.moveXY(51,34);
// Say something!
this.say("I am saying something.");
// Then run back behind the arrow towers for safety.
this.moveXY(58, 4);




// COMMANDING FOLLOWERS
// Say hello to followers
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
// Say anything with "follow" in it to get nearby soldiers
// to follow you
this.say("Follow me mates");
this.moveXY(63,41);
// Say anything with "attack" to send nearby troops into
// a battle mode.
this.say("Attack");
// Get Tharin to move to keep him safe.
this.moveXY(71,55);



// MOBILE ARTILLERY
//Move into range
this.moveXY(30, 26);  // Move into range
//Shoot in middle of ogres
// Move into range and shoot different groups of ogres
this.moveXY(65, 32);
this.attackXY(68,55);
this.attackXY(68,45);
this.moveXY(45,36);
this.attackXY(50,67);
this.moveXY(45,36);
this.attackXY(49,61);
this.attackXY(47,55);
 
 
 
 
 
 
// Reflection:
// Write your reflection here.


// // What is "this" referring to? Think programming-wise rather than in the terms of the game.
// This is referring to the object. In the game, the sprite was the object,
// and anything after the period was the method invoked on the sprite.

// // What does the () do in JavaScript?
// A function is an action we want to perform, like adding numbers or parsing a string. A function 
// looks like this: function functionname(parameters) {code to be executed;}; 
// The () in Javascript contains the function's parameters, which are input values for the function which 
// are treated as local variables within the function body. The body is the code to be executed
// when the function is called.

// // What is the point of the semicolons?
// The semicolon is used to separate statements. It is obligatory when you have two or 
// more statements on the same line but optional if the statement is followed by a line break. 
// You shouldn't use a semicolon after a closing curly bracket. The only exceptions are
// assigned statements like var obj={};.






// What parts of your strategy worked? What problems did you face?
// I thought through which functions would complete the challenges in each level
// and tested different functions until the goals were completed.

// What questions did you have while coding? What resources did you find to help you answer them?
// This was my first exposure to using Javascript, so I had a lot of 
// questions. I had no idea what was going on at first, but after playing the game
// for awhile, I got the hang of it and understood how it was teaching Javascript.

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I kept getting attacked by the guards in the Taunt the Guards level, so I tried moving Tharin 
// in different combinations of directions. After awhile, I realized that the point of the level
// was to taunt the guards, so I said something to make the guards leave their position.
// I then had Tharin run around the tunnel until he was able to exit to the right.

// Did you learn any new skills or tricks?
// I learned some basic Javascript game commands. For example, how to move a sprite 
// (using both moveDirection and moveXY); how to attack a nearby enemy; how to say 
// something; and how to break a dungeon door.

// How confident are you with each of the Learning Competencies?
// This is just the beginning of our Javascript studies, but I feel like I understand
// the general concepts introduced in this game (i.e calling a method on an object and using
// if-else statements in Javascript).

// Which parts of the challenge did you enjoy?
// All of it! I enjoyed feeling like I was programming an actual game.

// Which parts of the challenge did you find tedious?
// I didn't find any parts of the challenge tedious. The repetition helped me learn the basic Javascript
// concepts.




