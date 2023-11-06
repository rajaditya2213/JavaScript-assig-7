//Q5. write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!".

function greet(name){
     return new Promise(function(resolves){
          const greeting=`Hello, ${name}`;
          resolves(greeting);
     })
}
greet("Mithun!!").then(function(message){
      console.log(message);
});

//OUTPUT-> Hello, Mithun!!.