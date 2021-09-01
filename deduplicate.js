function deduplicate(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length;) {
      if (arr[j] === arr[i]) {
        arr.splice(j, 1);
        j--;
      } else {
        j++
      }
    }
  }
  return arr;
}