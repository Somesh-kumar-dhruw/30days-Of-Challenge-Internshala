// Create a reversed array using different methods

// Method 1: Using the reverse() method to reverse the original array
var myArray = [1, 2, 3, 4, 5];

// Reverse the array using the reverse() method
myArray.reverse();

// Now, myArray is reversed
console.log(`Method 1 - Reverse using reverse(): myArray = ${myArray}`); // Output: [5, 4, 3, 2, 1]

// Method 2: Creating a new reversed array without modifying the original one
var originalArray = [1, 2, 3, 4, 5];

// Create a new reversed array without modifying the original one
var reversedArray = originalArray.slice().reverse();

console.log(' ');
console.log('Method 2 - Create a reversed array without modifying the original one');
console.log(`Original array: originalArray = ${originalArray}`); // Original array is still unchanged
console.log(`Reversed array: reversedArray = ${reversedArray}`); // Reversed array: [5, 4, 3, 2, 1]

// Method 3: Create a reversed array using a loop
var reversedArrayLoop = [];

for (var i = originalArray.length - 1; i >= 0; i--) {
    reversedArrayLoop.push(originalArray[i]);
}

console.log(' ');
console.log('Method 3 - Create a reversed array using a loop');
console.log(`Reversed array: reversedArrayLoop = ${reversedArrayLoop}`);
