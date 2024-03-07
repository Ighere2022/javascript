//Functio to reverse word
const word = "Uyoyo";
const reversedWord = [...word].reverse().join("");

console.log(reversedWord);
//##########################

//Function to count characters
function countCharacter(str) {
  return str.length;
}

const text = "Hello World!";
console.log("Number of characters:", countCharacter(text));
//##################################

//Function to make the first letter uppercase
function firstLetter(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

let name = "uyoyo";
console.log("My name is:", firstLetter(name));

//Array min/max values
let numbers = [20, 3, 14, 47, 18, 39];
let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);

console.log(minNumber, maxNumber);

//ADDING numbers
let nums = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log(sum);

//Filter array
function filterArray(arr, condition) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

const number = [1, 2, 3, 4, 5, 6];

function isOdd(num) {
  return num % 2 !== 0;
}

// Filter out even numbers
const oddNumbers = filterArray(number, isOdd);
console.log(oddNumbers);

//Factorial of 5
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const Digit = 5;
console.log("Factorial of", Digit, "is", factorial(Digit));

function isPrime(value) {
  if (value <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}

const num = 17;
if (isPrime(num)) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}

function fibonacciSequence(numValue) {
  const sequence = [0, 1];

  for (let i = 2; i < numValue; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}

const numValue = 15;
const sequence = fibonacciSequence(numValue);
console.log(sequence);
