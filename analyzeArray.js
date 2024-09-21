function analyzeArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let average = sum / array.length;
  let object = {
    average: average,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return object;
}

module.exports = analyzeArray;
