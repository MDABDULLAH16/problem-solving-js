// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const reversed = (str) => [...str].reverse().join("");
// Input: "hello"
const result1 = reversed("hello");
console.log(result1);
// Output: "olleh"

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e,i, o, u) are in a given string.
const countVowels = (str) => {
  const arr = [...str];
  const vowels = "aeiou";
  let count = 0;
  for (const alfa of arr) {
    if (vowels.includes(alfa)) {
      count++;
    }
  }
  return count;
};

// Input: "programming"
const result2 = countVowels("programming");
// Output: 3
console.log(result2);

// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

const checkPalindrome = (str) => {
  const reverse = str.split("").reverse().join("");
  return reverse === str;
};
// Input: "madam"

const result3 = checkPalindrome("madam");
console.log(result3);
// Output: true

// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.
// Example:
const findMaxNumber = (arr) => {
  const max = Math.max(...arr);

  return max;
};
// Input: [5, 1, 9, 3]
const result4 = findMaxNumber([5, 1, 9, 3]);
console.log(result4);
// Output: 9

// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.
const removeDuplicates = (arr) => {
  const result = [];

  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
};

// Input: [1, 2, 2, 3, 4, 4]
const result5 = removeDuplicates([1, 2, 2, 3, 4, 4]);
console.log(result5);
// Output: [1, 2, 3, 4]

// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
const sumArray = (arr) => {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
};
// Example
console.log(sumArray([1, 2, 3, 4])); // 10

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

const findEvenNumbers = (arr) => {
  return arr.filter(num => num % 2 === 0);
};

 // Input: [1, 2, 3, 4, 5, 6]
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 
// Output: [2, 4, 6]



// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.
 const capitalizeWords = (str) => {

  // Step 1: Split the string into words
  const words = str.split(" ");
   // Step 2: Capitalize each word
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();  
    const restOfWord = word.slice(1);                  
    const fullWord = firstLetter + restOfWord;        
    return fullWord;
  });

  // Step 3: Join words back into a sentence
  const result = capitalizedWords.join(" ");

  return result;
};
// Input: "hello world"
// Example
console.log(capitalizeWords("hello world"));
// Output: "Hello World"



