//Here’s how you convert your age from “human years” to “dog years”
const myAge = 29;
var earlyYears = 2;
//The first two years of a dog’s life count as 10.5 dog years each.
earlyYears *= 10.5;
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
var laterYears = myAge -2;
laterYears *= 4;

console.log('Early Years: ' + earlyYears);
console.log('Later Years: '+ laterYears);

//calculating my age in dog years
var myAgeInDogYears = earlyYears + laterYears;

var myName = 'Adrianne';
myName = myName.toLowerCase();
console.log(myName);

console.log('My anme is '+myName+'. I am '+myAge+' years old in human years which is '+myAgeInDogYears+' years old in dog years.');
