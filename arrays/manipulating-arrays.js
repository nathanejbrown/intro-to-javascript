//take an input array of [[11,13],[0,2]] and return //[2,0,13,11]

input = [[11,13],[0,2]];

function arrayThing(n) {
  n = n.reverse();
  for(x=0; x<(n.length-1); x++) {
    n[x] = n[x].reverse();
  }
  n = n[0].concat(n[1]);
  return n;
}

console.log(arrayThing(input));
