input = [[11,13],[0,2]];

function arrayThing(input) {
  input = input.reverse();
  for(x=0; x<(input.length-1); x++) {
    input[x] = input[x].reverse();
  }
  input = input[0].concat(input[1]);
  return input;
}

console.log(arrayThing(input));
