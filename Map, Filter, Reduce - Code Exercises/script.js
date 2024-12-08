/**
 * https://www.crocoder.dev/blog/map-filter-reduce-exercises/
 * 
 * 
Square the value of every element in the array. 
Presume that you will only get numbers in the input array. 


/*
Exercise #1

Input:
const input = [1, 2, 3, 4, 5];

Results:
[1, 4, 9, 16, 25];


 */
console.log("-----Exercise #1 -----");

const input = [1, 2, 3, 4, 5];
const num1 = input.map((num) => Math.pow(num, 2));
console.log(num1);

/*
Exercise #2 - Sum of every positive element
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

Input:
const input = [1, -4, 12, 0, -3, 29, -150];

Results:
42;

 */
console.log("-----Exercise #2 -----");

const input2 = [1, -4, 12, 0, -3, 29, -150];
let exercise2 = input2.filter((num) => num > 0);
let answer2 = exercise2.reduce((a, b) => a + b);
console.log(answer2);

/*
Exercise #3 - Calculate median and mean
Calculate the mean and median values of the number elements from the input array.

Input:
const input3 = [12, 46, 32, 64];

Results:
  { mean: 38.5, median: 39 }

 */
console.log("-----Exercise #3 -----");

const input3 = [12, 46, 32, 64];
const sumWithInitial = input3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
const meanResults = sumWithInitial / input3.length;

let sortedNums = input3.sort((a, b) => {
  return a - b;
});
let newMedium =
  (sortedNums[Math.floor(sortedNums.length / 2) - 1] +
    sortedNums[Math.floor(sortedNums.length / 2)]) /
  2;

console.log(newMedium);
console.log(meanResults);

/*
Exercise #5 - Get name initials
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

Input:
const input = "George Raymond Richard Martin";

Results:
"GRRM";

 */
console.log("-----Exercise #4 -----");

const input4 = "George Raymond Richard Martin";
