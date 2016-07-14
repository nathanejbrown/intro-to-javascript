var person = {
  firstName: 'Nathan',
  preferredName: 'Heathcliff',
  lastName: 'Brown'
};

console.log(Object.keys(person));
console.log(person['firstName']);

//bracket notation
console.log("Hello, my name is " + person['firstName'] + " " + person['lastName'] + ", but I prefer to be called "+ person['preferredName'] +"!");

//dot notation
console.log("Hello, my name is " + person.firstName + " " + person.lastName + ", but I prefer to be called "+ person.preferredName +"!");

//adding a value using dot notation, this is known as a //setter
person.age = 24;
//this is known as a 'getter'
person.age;

person.birthday = '01/09/1992';
person.address = {
  street: '2030 S Hannibal Way',
  unit: 'Unit A',
  city: 'Aurora',
  state: 'CO',
  zip: '80013'
};
person.hobbies = [
  { name: 'Guitar', levelOfInterest: 11 },
  { name: 'Hiking', levelOfInterest: 7 }
];
person.fucks = true;

/*
Assignment:
Print out the following:
1: birthday
2: Your second hobby
3: Your city
4: Your city + your state
*/

console.log(person.birthday);
console.log(person.hobbies[0].name);
console.log(person.address.city);
console.log(person.address.city + " " + person.address.state);

delete person.hobbies;
delete person.fucks;
delete person.address;

console.log("==========");
console.log(person);

console.log("==========");
for(var key in person) {
  console.log('key', key);
  console.log('value', person[key]);
}
