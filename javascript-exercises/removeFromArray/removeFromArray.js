const removeFromArray = function(array, ...valuesToRemove) {
  let finalArray = array;
  valuesToRemove.forEach(function(value) {
    finalArray = removeAllInstances(finalArray, value);
  });
  return finalArray;
};

function removeAllInstances(someArray, someElement) {
  let parsedArray = [];
  let startIndex = 0;
  while (startIndex < someArray.length) {
    let foundAtIndex = someArray.indexOf(someElement, startIndex);
    let endIndex = (foundAtIndex >= startIndex) ? 
        foundAtIndex : 
        someArray.length;
    let someSlice = someArray.slice(startIndex, endIndex);
    if (someSlice.length > 0) {
      parsedArray = parsedArray.concat(someSlice);
    }
    startIndex = endIndex + 1;
  }
  return parsedArray;
}

module.exports = removeFromArray
