// 6- Using Loops

function oddNumbers(number1, number2) {
  let result = "";
  if ((number1 < 0, number2 < 0)) {
    return "undefined number";
  }
  for (let index = number1; index <= number2; index++) {
    if (index % 2 === 1) {
      if (result === "") {
        result = index;
      } else {
        result += "," + index;
      }
    }
  }
  return result;
}

console.log(oddNumbers(0, 4));
console.log(oddNumbers(10, 33));
console.log(oddNumbers(9, 12));

//02) charCount function
/*
Implement a charCount function.
The function has a first parameter for a word which is a string.
The function has a second parameter which contains the character to search for which is a string.
Check if the second parameter consists of only one character, if not, quit the function.
The function returns the number of times the character from the second parameter is present in the word.
*/

function charCount(word, character) {
  let count = 0;
  if (character.length > 1) {
    // statt ">" kann man auch "!=="verwenden
    return;
  }

  for (let index = 0; index < word.length; index++) {
    if (word[index].toUpperCase() === character.toUpperCase()) {
      count = count + 1; //andere schreibweise: count ++ (NUMBER)
    }
  }
  return count;
}

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
