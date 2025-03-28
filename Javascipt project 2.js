// String Manipulation Functions:
// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  let reversedStr =  str.split("").reverse().join("");
  return reversedStr;
}

console.log("\nReverse a String");
console.log(reverseString("dennis mbithi"));
console.log(reverseString("reverse this string"));

// Count Characters: Create a function that counts the number of characters in a string.
function countCharactor(str) {
  let charLength = str.split("").length;
  return charLength;
}

console.log("\nCount Characters");
console.log(countCharactor("dennis"));
console.log(countCharactor("This is another string."));

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWord(word) {
  return word.at(0).toUpperCase() + word.slice(1);
}

function capitalizeString(str) {
  let capitalizedString =  str
    .split(" ")
    .map((word) => capitalizeWord(word))
    .join(" ");

    return capitalizedString;
}

console.log("\nCapitalize Words");
console.log(capitalizeString("dennis mutuku mbithi"));
console.log(capitalizeString("capitalize this sentense."));

// Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

// Find max number
function maximumNum(numArray) {
  let maxNumber = 0;
  for (n of numArray) {
    if (n > maxNumber) {
      maxNumber = n;
    }
  }
  return maxNumber;
}

// Find min number
function minimumNum(numArray) {
  let minNumber = numArray[0];
  for (n of numArray) {
    if (n < minNumber) {
      minNumber = n;
    }
  }
  return minNumber;
}

console.log("\nFind Maximum and Minimum Number");
console.log(maximumNum([3, 5, 2, 9, 8, 6, 7, 4, 6]));
console.log(maximumNum([1, 3, 5, 2, 9, 8, 6, 7, 4, 6]));
console.log(minimumNum([3, 5, 2, 9, 8, 6, 7, 4, 6]));
console.log(minimumNum([1, 3, 5, 2, 9, 8, 6, 7, 4, 6]));

// Sum of Array: Create a function that calculates the sum of all elements in an array.

function SumArray(numArray) {
  let totalSum = 0;
  for (num of numArray) {
    totalSum += num;
  }
  return totalSum;
}

console.log("\nSum of Array");
console.log(SumArray([3, 6, 6, 6, 2, 3, 9, 1, 3]));
console.log(SumArray([2, 4, 9, 4, 5, 8, 2, 3, 6]));
console.log(SumArray([1, 5, 3, 7, 1, 4, 5, 2, 8]));

// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(numArray) {
  let filteredArray = numArray.filter((num) => num % 2 == 0);

  return filteredArray;
}

console.log("\nFilter Array");
console.log(filterArray([3, 6, 6, 6, 2, 3, 9, 1, 3]));
console.log(filterArray([2, 4, 9, 4, 5, 8, 2, 3, 6]));
console.log(filterArray([1, 5, 3, 7, 1, 4, 5, 2, 8]));

// Mathematical Functions:
// Factorial: Write a function to calculate the factorial of a given number.
function factorialNum(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log("\nFactorial");
console.log(factorialNum(5)); // 120
console.log(factorialNum(7));
console.log(factorialNum(9));
console.log(factorialNum(10));
// Prime Number Check: Create a function to check if a number is prime or not.

function primeChecker(num){
    if (num < 2){
        return `${num} is a not prime number.`;
    }

    if(num === 2 || num == 3){
        return `${num} is a prime number.`;
    }

    for(let n=3; n <= Math.sqrt(num); n+=2){
        if (num % n === 0){
            return `${num} is a not prime number.`;
        }
    }
    return `${num} is a prime number.`;
}

console.log("\nPrime Number Check");
console.log(primeChecker(2));
console.log(primeChecker(3));
console.log(primeChecker(6));
console.log(primeChecker(8));
console.log(primeChecker(11));
console.log(primeChecker(13));
console.log(primeChecker(15));
console.log(primeChecker(25));
console.log(primeChecker(29));

//: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacciSequence(num){
    let a = 0
    let b = 1

    fibArray = []
    fibArray.push(a)
    fibArray.push(b);

    for(let n=3; n <= num; n++ ){
        fibNum = a + b;
        fibArray.push(fibNum);
        a = b;
        b = fibNum;
    }

    return fibArray;
}

console.log("\n Fibonacci sequence function");
console.log(fibonacciSequence(5)) // 0, 1, 1, 2, 3
console.log(fibonacciSequence(9)) // 0, 1, 1, 2, 3, 5, 8, 13, 21
console.log(fibonacciSequence(15)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377