//////// Check for 2 arguements and integers
function maxOfTwoNumbers(...nums) {
  let max = 0;
  if (nums.length !== 2) {
    throw new Error("input exactly two nums");
  }
  nums.forEach((num) => {
    if (typeof num !== "number") {
      throw new Error("input two integers");
    } else if (num >= max) {
      max = num;
    }
  });
  return max;
}
console.log("max of two numbers: ", maxOfTwoNumbers(14, 7));

//////// check for one character
function isCharVowel(char) {
  if (char.length !== 1 || typeof char !== "string") {
    throw new Error("input exactly one letter");
  }
  return "aeiou".includes(char.toLowerCase());
}
console.log("Is this a vowel: ", isCharVowel("E"));

///// check for array
const sumArray = (nums) => {
  if (!Array.isArray(nums)) {
    throw new Error("argument must be an array");
  } else {
    return nums.reduce((acc, elem) => acc + elem, 0);
  }
};
console.log("sum of the array: ", sumArray([1, 2, 3]));
