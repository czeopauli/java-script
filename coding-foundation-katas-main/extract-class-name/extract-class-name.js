function extractClassName(sessionTitle) {
  const parts = sessionTitle.split(" ");
  //Zeichenfolge wird aufgeteilt, Wörter werden im Array gespeichert

  const months = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };
  //Darstellung der Monatsnamen als Nummern

  const year = parts[2];
  const month = parts[3];
  // Jahr und Monat werden extrahiert und in seperaten Variablen gespeichert

  if (year.length === 4 && months[month]) {
    //Prüfung ob das Jahr 4 Zeichen enthält und ob Monatsname im Objekt vorhanden ist

    const result = year + "-" + months[month]; //Konvertierung/ausgabe Monatsname als Nummer + Verknüpfung mit dem Jahr
    return result; // Ergebnis "Jahr-Mon"
  } else {
    return null;
  }
}

console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"
console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"
console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"
console.log(extractClassName("Live-Session 2022 April")); // null
