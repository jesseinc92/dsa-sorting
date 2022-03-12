function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let comparedMin = [i, arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < comparedMin[1]) {
        comparedMin[0] = j;
        comparedMin[1] = arr[j];
      }
    }
    if (comparedMin[1] < min) [arr[i], arr[comparedMin[0]]] = [comparedMin[1], min];
  }
  return arr;
}

module.exports = selectionSort;