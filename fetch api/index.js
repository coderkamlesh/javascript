// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
// return (response.json());
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


//post method
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));





document.getElementById("submitbtn").addEventListener("click",(e)=>{
e.preventDefault()

// let obj={
//     title: document.getElementById("titleText").value,
//     body: document.getElementById("bodyText").value,
//     userId: document.getElementById("userId").value,
// }
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: new FormData(document.getElementById("myForm")),
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
})


