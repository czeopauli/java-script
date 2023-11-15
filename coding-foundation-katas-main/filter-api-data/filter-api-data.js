"use strict";

function filterApiData(apiData, mandatoryKeys) {
  const result = [];

  for (let objects of apiData) {
    let hasKey = true;
    for (let key of mandatoryKeys) {
      if (!objects.hasOwnProperty(key)) {
        hasKey = false;
      }
    }

    if (hasKey) {
      result.push(objects);
    }
  }
  return result;
}
