
// Test case using loop

function findKeyInArray(key, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return array[i];
        }
    }
    return `${key} is not found`;
}

// Test cases

// i put wrong array for showing if array has not that value so how my function work
const k1 = 4;
const A = [1, 2, 5, 7, 0];
const result1 = findKeyInArray(k1, A);
console.log(`Key ${k1} found in array A at index : ${result1}`);

const k2 = 33;
const B = [11, 22, 33, 44];
const result2 = findKeyInArray(k2, B);
console.log(`Key ${k2} found in array B at index : ${result2}`);
