//Write a function that takes a string and returs the string //plus the length.
//Input: "hoisting"
//Output: ["hoisting", 8]

function strLength(str) {
  return [str, str.length];
}
var result = strLength('hoisting');

//Write a function that takes the output above and prints //out the phrase: "The phrase [YOUR STR] is [LENGTH] //characters long"

function phrase(arr) {
  console.log("The phrase " + arr[0] + " is " + arr[1] +" characters long.");
}

// console.log(phrase(result));
// console.log(typeof strLength);


//The given code is the function and the variable //listItems
function listIt (items) {
  return items[0] + ': ' + items[1];
}

listIt([1, 'Zarya']);

var listItems = [
  [ 1, 'Zarya' ],
  [ 2, 'Mei' ],
  [ 3, 'Mercy' ],
];

//Take that code and write code to output: [1: Zarya, 2: //Mei, 3: Mercy]

var newListItems = [];
for(x=0; x<listItems.length; x++) {
  newListItems.push(listIt(listItems[x]));
}
console.log(newListItems);


console.log("====================================");

var listItems = [
  [ 1, 'Zarya' ],
  [ 2, 'Mei' ],
  [ 3, 'Mercy' ],
];

function listIt (items) {
  return items[0] + ': ' + items[1];
}

function allTheThings (items, listItFn) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    // `pair` is an array of two items (e.g. [ 2, 'Mei' ])
    var pair = items[i];

    // `formattedAsList` is the two items, formatted (e.g. '2: Mei')
    var formattedAsList = listItFn(pair);

    // Now we take that result and push it into a final array
    result.push(formattedAsList);
  }

  return result;
}

console.log(allTheThings(listItems, listIt));
// [ '1: Zarya', '2: Mei', '3: Mercy' ]

console.log("====================================");

//given code:
function map (array, callbackFn) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var item = callbackFn(array[i]);
    result.push(item);
  }

  return result;
}

// Write a function, then use the map function to manipulate myArray and return [11, 21, 31]
var myArray = [10, 20, 30];
function plusOne(num) {
  return num+1;
}
console.log(map(myArray, plusOne));
