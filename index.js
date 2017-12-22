function iterativeLog(array) {
  array.forEach((el, index) => {
    console.log(`${index}: ${el}`);
  });
}

function iterate(callback) {
  let array = ['cats', 'dogs'];
  array.foreach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
