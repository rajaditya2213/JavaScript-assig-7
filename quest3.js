//Q3. Write a function that takes in an array of integers and a callback function, and returns a new array where each Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last name, and age in years as input. The function should concatenate the first and last name into a single string and store it in a variable called fullName. It should then calculate the person's age in days and store it in a variable called ageInDays.
const person={
     firstName:"Aditya",
     lastName:"Raj",
     age:30,
};

function ageInDays(personObject, callback){
     const fullName=`${personObject.firstName} ${personObject.lastName}`;
     const ageInDays=personObject.age * 365;
     callback(fullName,ageInDays);
}
function logResult(fullName, ageInDays){
     console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
}

//OUTPUT->The perons's full name is Aditya Raj and thier age in days is 76000;