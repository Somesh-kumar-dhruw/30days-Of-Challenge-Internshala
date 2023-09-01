// Different methods to check if two arrays are equal

// Method 1: Using JSON.stringify
var a = [1, 2, 5, 4, 0];
var b = [1, 2, 5, 4, 0];

if (JSON.stringify(a) === JSON.stringify(b)) {
  console.log('Method 1: They are equal');
} else {
  console.log('Method 1: They are not equal');
}

// Method 2: Using the every method and length comparison
var areEqual = a.length === b.length && a.every((value, index) => value === b[index]);

if (areEqual) {
  console.log('Method 2: They are equal');
} else {
  console.log('Method 2: They are not equal');
}

// Method 3: Using a custom function
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // Arrays are not equal if they have different lengths
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Arrays are not equal if any elements differ
    }
  }

  return true; // Arrays are equal
}

if (arraysAreEqual(a, b)) {
  console.log('Method 3: They are equal');
} else {
  console.log('Method 3: They are not equal');
}
