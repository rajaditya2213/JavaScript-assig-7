//Q7. Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs.
async function getCombinedData(){
     const data1=await fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(function(response){
          return response.json();
     })

     const data2=await fetch('https://jsonplaceholder.typicode.com/posts/1')
     .then(function(response){
          return response.json();
     })

     const combineddata={
          todos:data1,
          posts:data2,
     }
     return combineddata;
     
}
getCombinedData().then(function(data){
     console.log(data);
})

//OUTPUt-> todos:{userIdd:1, id:1, titlw:'delctus aut autem', completed:false},
//posts:{userId:1, id:1, title:'sunt aut facere repellat provident occaecati
//excepturi optio reprehedrit'},
//body:'quia et susipit\n' +'suscipit recusandae consequuntur expedita et cum\n' +
//     'reprehenderit molestiae ut ut quas totam\n' +
//     'nostrum rerum est autem sunt rem eveniet architecto'

