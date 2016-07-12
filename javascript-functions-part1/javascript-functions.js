//1====================================================
function sum(x, y) {
  return(x+y);
}
//2====================================================
function isEqual(x, y) {
  return(x === y);
}
//3====================================================
function discountPercentage(amount, discount) {
  if(discount > 100 || discount < 0) {
    console.log("The discount must be between 1% and 100%");
  }
  else {
    totalDiscount = (amount*(discount / 100));
    console.log("The discount amount is: " + totalDiscount);
  }
}
//4====================================================
function stringCapitalize(stringToCapitalize) {
  var result = "";
  for(x=0; x<stringToCapitalize.length; x++) {
    if(stringToCapitalize[x-1] === " " || x === 0) {
      var letter = stringToCapitalize.charAt(x);
      letter = letter.toUpperCase();
      result += letter;
    }
    else result += stringToCapitalize[x];
  }
  console.log(result);
}
//5====================================================
function evenNumbers(n) {
  for(x=0; x<n; x++) {
    if(x % 2 === 0) {
      console.log(x);
    }
  }
}
//6====================================================
function isDivisible(x,y) {
  if(x%y === 0) {
    return true;
  } else return false;
}
//7====================================================
function oddNumbers(n) {
  if(n <= 40) {
    n = 40;
    i = 1;
  } else {
    i = 41;
  }
  if(n<0 || n>100) {
    console.log("Your number must be between 0-100");
  }
  else {
    do {
        console.log(i);
        i+=2;
    } while (i<n);
  }
}
