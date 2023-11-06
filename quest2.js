//Write a function "manipulateString" that takes the string and convert the charcters to uppercase letter.The Write a Function "manipulateString" that takes in a string and converts the charcter to uppercase letter The function shoucld return a callback function "logString" that log the sentence  "The manipulate String is :" along with the manipulated string or the new string to the console
function manipulateString(inputString){
     const manipulatedString=inputString.toUpperCase()
     return manipulatedString;
} 
function logString(manipulatedString){
     console.log(`The ManipulatedString is : ${manipulatedString}`);
}
console.log(manipulateString("hello, world!"));


//OUTPUT-> HELLO, WORLD!