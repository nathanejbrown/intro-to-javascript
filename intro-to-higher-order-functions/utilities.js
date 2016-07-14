/*
Create a function called max that returns the largest value from an input array.
*/

function max(inputArray, callback) {
  answer = 0;
  for(item in inputArray) {
    if (inputArray[item] > answer) {
      answer = inputArray[item];
    }
  }
  return callback(answer);
}
var testArray = [123, 456, 789, 321, 1, 8, 99999];
// console.log(max(testArray));

module.exports = {
  max: max
};

/* In the following context, I'm passing testArray into max, and I'm passing in the callback function. The callback function is defined in the same line as the call to max. When max is done, it returns the result of callback(answer), which is function(answer){console.log(answer);};
*/

max(testArray, function(result) {
  console.log(result);
});

/*
Do the same thing using a callback function as well as max
*/

//Test performance of a given function:
function testPerformance(callback, arr) {
  var t0 = performance.now();
  callback(arr);
  var t1 = performance.now();
  return t1 - t0;
}
