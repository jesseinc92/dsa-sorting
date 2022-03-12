function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] >= arr[i - 1]) {
      continue;
    } else {
      for (let j = i; j >= 0; j--) {
        if (arr[j] < arr[j - 1]) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        } else {
          break;
        }
      }
    }
  }
  return arr;
}

module.exports = insertionSort;