//Problems
//1:
for(x=0; x<=1000; x+=100) {
  console.log(x);
}
console.log("==============");
//2:
for(x=1; x<129; x*=2) {
  console.log(x);
}
console.log("==============");
//3:
for(x=0; x<11; x+=2) {
  console.log(x);
}
console.log("==============");
//4:
for(x=3; x<16; x+=3) {
  console.log(x);
}
console.log("==============");
//5:
for(x=9; x>=0; x--) {
  console.log(x);
}
console.log("==============");
//6:
for(x=1; x<5; x++) {
  for(y=0; y<3; y++) {
  console.log(x);
  }
}
console.log("==============");
//7:
for(x=0; x<3; x++) {
  for(y=0; y<5; y++)
  console.log(y);
}
console.log("==============");

//"Write a program..."
//1-25 even or not
for(x=1; x<26; x++) {
  if(x % 2 === 0) {
    console.log(x + " is even");
  }
  else console.log(x + " is odd");
}
console.log("==============");
//fizzbuzz:
for(x=1; x<51; x++) {
  if(x%15 === 0) {
    console.log("fizzbuzz");
  }
  else if(x%3 === 0) {
    console.log("fizz");
  }
  else if(x%5 === 0) {
    console.log("buzz");
  }
  else {
    console.log(x);
  }
}
console.log("==============");
//multiples of 3 and 5 under 1000
count = 0;
for(x=0; x<1000; x++) {
  if(x%3 === 0 || x%5 === 0) {
    count += x;
  }
}
console.log("The sum is: " + count);
console.log("==============");
//triangle
var hash = "#";
for(x=1; x<8; x++) {
  console.log(hash);
  hash += "#";
}
