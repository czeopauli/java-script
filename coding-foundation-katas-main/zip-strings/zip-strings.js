function zipStrings(strA, strB) {
  let result = " "; //Variable als leere Zeichenkette

  const maxLength = Math.max(strA.length, strB.length); //Berechnung max.Länge zwsischen strA u. B -> Somit können alle Zeichen durch die Schleife durchgehen

  for (let i = 0; i < maxLength; i++) {
    //Die for Schleife durchläuft von 0 bis maxLength -1

    if (strA[i]) {
      //Prüfung ob Zeichen vorhanden sind, falls ja werden diese result hinzugefügt
      result += strA[i];
    }
    if (strB[i]) {
      result += strB[i];
    }
  }
  return result; //Hier wird der Zipstring zurückgegeben
}
console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
