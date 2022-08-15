var mixedArray = [3,13,74,14,66,15,22,4];

const isEven = (num) => { 
  let i = num % 2
  if (i == 0) {
    return  num
  }
};

function filterArray(array, even){
  var result = [];
    for (let a = 0; a < array.length; a++) {
    if (even(array[a]) == array[a]) {
      result.push(array[a])
    }
  }
  return result
}


console.log(filterArray(mixedArray, isEven));