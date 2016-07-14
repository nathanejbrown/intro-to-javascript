//Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.

var person = {
  'chuck': 22,
  'brian': 46,
  'nathan': 24,
  'tom': 88
};

function oldestPerson(obj) {
  oldest = 0;
  answer = '';
  for(human in person) {
    if(person[human] > oldest) {
      oldest = person[human];
      answer = human;
    }
  }
  return answer;
}

console.log(oldestPerson(person));

//Define a function called longestWord that takes a string and returns the longest word in the string.

function longestWord(str) {
  array = str.split(" ");
  count = 0;
  longest = 0;
  answer = '';
  for(x=0;x<array.length-1;x++) {
    for(y=0;y<array[x].length-1;y++) {
      if(typeof array[x].charAt(y) === 'string') {
        count++;
      }
    }
      if(count > longest) {
        longest = count;
        answer = array[x];
        count = 0;
      }
  }
  return answer;
}


//Refactor the longestWord function so that it ignores punctuation.
//See above



//Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

function factorial(n) {
  var answer = 0;
  for(x=1; x<n; x++) {
    console.log("x is: " + x);
    answer += (x*(x+1));
  }
  return answer;
}

//Bonus: Write a function called palindrome that takes a string as an argument. Return true if the string is a palindrome, otherwise return false.

function isPalindrome(str) {
  str = str.replace(/,/g , ""); //replace all commas w/ ""
  str = str.replace(/ /g , ""); //replace all space w/ ""
  str = str.toLowerCase();
  newStr = '';
  for(x=str.length-1;x>=0;x--) {
    newStr += str[x];
  }
  if(newStr === str) return true;
  else return false;
}
