function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid input: both arguments must be numbers or parsable strings");
  }
  return numA + numB;
}

let result1 = add(1, 2); // Correct
let result2 = addSafe(1, "2"); // Correct handling of string
let result3 = addSafe("1.5", 2); // Correct handling of string
// let result4 = addSafe("abc", 2); // Throws an error: Invalid input
console.log(result1, result2, result3); 