// Create a reversed string using different methods

// This is an experiment to see how spaces affect reversing the string
var originalString = 'ab c';

// Method 1: Using String Split, Array Reverse, and Join
// Split the original string into an array of characters
var splitOriginalString = originalString.split('');
// Reverse the array of characters
var reversedSplitOrigString = splitOriginalString.reverse();
// Join the reversed array of characters back into a string
var reversedOrignalString = reversedSplitOrigString.join('');

// Print out the results for Method 1
console.log(`Method 1 - Split "ab c" into characters: ${splitOriginalString}`);
console.log(`Method 1 - Reversed with split characters: ${reversedSplitOrigString}`);
console.log(`Method 1 - Original string: ${originalString}`);
console.log(`Method 1 - Reversed string with Join: ${reversedOrignalString}`);

// Method 2: An alternative one-liner using String Split, Array Reverse, and Join
// var reversedOrignalString = originalString.split('').reverse().join('');

// Print out the results for Method 2 (commented out)
// console.log(`Method 2 - Reversed string with one-liner: ${reversedOrignalString}`);

// Method 3: Using a for loop method to reverse the string
var reversedString = '';

for (var i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i]; // Append each character to the reversed string
}

console.log('  '); // Print an empty line for separation
console.log(`Method 3 - Using a for loop to reverse the string`);
console.log(`Method 3 - Original string: ${originalString}`);
console.log(`Method 3 - Reversed string: ${reversedString}`);
