oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]



// Create variable "sum" that represents sum of numbers within a given range (a,b).

var sum= function(range) {
	total=0
	for (i=0; i<range.length; i++) {
		total += range[i]
	}
		return total
	
};

// return sum(oddLengthArray)
console.log(sum(oddLengthArray));

// return sum(evenLengthArray)
console.log(sum(evenLengthArray));



// set variable mean = sum(range)/(b-a).    
var mean= function(range) {
	return sum(range)/range.length
}; 

// return mean(oddLengthArray) 
console.log(mean(oddLengthArray));

// return mean(evenLengthArray) 
console.log(mean(evenLengthArray));



// Set variable median(range). Sort range and determine median depending on whether range length is even or odd.
var median= function(range){
	range_length=range.length
	var sortedRange=range.sort()
	var halfLength=Math.floor(range.length/2)
	 if (range_length % 2 === 0) {
			return ((sortedRange[halfLength-1]+sortedRange[halfLength])/2)
		}
	else {
		return sortedRange[halfLength]
	}
}

// return median(oddLengthArray) 
console.log(median(oddLengthArray));

// return median(evenLengthArray) 
console.log(median(evenLengthArray));




// //REFLECTION:
// The group project was an interesting experience because we got a sense of what it is like to come into a 
// project without having worked on it from the beginning. I learned that user stories convey what is desired
// in even less technical language than pseudocode. Seeing the refactored code made me realize that the console.logs 
// I put in the original code weren't necessary and also that I had to add a "var" in front of the "i" in the for loop
// and in front of some variables. I didn't realize that I was supposed to write the code with someone else due to the
// size of the group; I will read the directions more carefully next time.

