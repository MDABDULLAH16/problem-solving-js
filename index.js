// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const reversed = (str) => [...str].reverse().join('');
// Input: "hello"
const result1 = reversed('hello');
console.log(result1);
// Output: "olleh"


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e,i, o, u) are in a given string.
const countVowels = (str) => {
    const arr = [...str];
    const vowels = 'aeiou'
    let count = 0;
 for (const alfa of arr) {
       if (vowels.includes(alfa)) {
        count++
       }
       
 }
return count
}
 
// Input: "programming"
const result2 = countVowels("programming");
// Output: 3
console.log(result2);

// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

const checkPalindrome = (str) => {
    const reverse = str.split('').reverse().join('')
    return reverse ===str
}
// Input: "madam"

const result3 = checkPalindrome('madam');
console.log(result3);
// Output: true
 
