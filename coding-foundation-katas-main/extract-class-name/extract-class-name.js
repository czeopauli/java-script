function extractClassName(sessionTitle) {
  const parts = sessionTitle.split(" ");
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

  const year = parts[2];
  const month = parts[3];

  if (year.length === 4 && months[month]) {
    return year + "-" + months[month];
  } else {
    return null;
  }
}

console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"
console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"
console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"
console.log(extractClassName("Live-Session 2022 April")); // null
