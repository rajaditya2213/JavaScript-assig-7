//Q. Write a function that take in an array of integer and callback function, and return a new array where each elemnt is doubled using the callback.

function doubleArray(arr,callback){
     const doublArr=arr.map((num)=>{
          return callback(num);
     });
     return doublArr;
}

const newArray=[1,2,3,4,5];
function callback(num){
     return 2*num;
}
console.log(doubleArray(newArray,callback));

//OUTPUt-> [2,4,6,8,10]