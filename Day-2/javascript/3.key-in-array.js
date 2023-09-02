

function findKeyInArray(key, array){
    const index = array.indexOf(key);
    return index !== -1 ? index: "not found"
}

// Test cases:

const k1 = 4;
const A = [1,2,5,4,0]
const result1 = findKeyInArray(k1, A);
console.log(`Key ${k1} found in array A at index: ${result1}`)


const k2 = 33;
const B = [11, 22, 33, 44];
const result2 = findKeyInArray(k2, B);
console.log(`Key ${k2} found in array B at index: ${result2}`)
