//1====================================================
function sum(x, y) {
  return(x+y);
};
//2====================================================
function isEqual(x, y) {
  if(x === y) return true;
  else return false;
};
//3====================================================
function discountPercentage(amount, discount) {
  if(discount > 100 || discount < 0) {
    console.log("The discount must be between .01 and 1");
  }
  else {
    totalDiscount = (amount*discount);
    console.log("The discount amount is: " + totalDiscount);
  }
};
//4====================================================
function stringCapitalize(input) {
  var result = "";
  for(x=0; x<input.length; x++) {
    if(input[x-1] === " " || x === 0) {
      var letter = input.charAt(x);
      letter = letter.toUpperCase();
      result += letter;
    }
    else result += input[x];
  }
  console.log(result);
};
//5====================================================
function evenNumbers(n) {
  for(x=0; x<n; x++) {
    if(x % 2 === 0) {
      console.log(x);
    }
  }
};
//6====================================================
function isDivisible(x,y) {
  if(x%y === 0) {
    return true;
  } else return false;
};
//7====================================================
function oddNumbers(n) {
  if(n<0 || n>100) {
    console.log("Your number must be between 0-100");
  }
  else if(n>40) {
    for(x=41; x<n; x+=2) {
        console.log(x);
    }
  }
  else {
    for(x=1; x<40; x+=2) {
        console.log(x);
    }
  }
};
