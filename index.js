// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const reversed = (str) => [...str].reverse().join('');
// Input: "hello"
const result = reversed('hello');
console.log(result);
// Output: "olleh"