function zipStrings(strA, strB) {
  let result = " ";

  const maxLength = Math.max(strA.length, strB.length);

  for (let i = 0; i < maxLength; i++) {
    if (strA[i]) {
      result += strA[i];
    }
    if (strB[i]) {
      result += strB[i];
    }
  }
  return result;
}
console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
