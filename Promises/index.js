
        // ******** video1*********
// let promise=new Promise(function(resolve,reject){
//     alert("hello")
//   resolve(56)
// })

// console.log("hello promises");
// setTimeout(function(){
//     console.log("promises in 2sec");
// },2000)

// console.log("my name is krishna kamlesh");

// console.log(promise);

//fetch google.com homepage => alert("google homepage done")
//fetch data from the data api=>()
//fetch pictures from the servers
//print downloading
//rest of the script


    //   *********video2*******
// let promise1=new Promise(function(resolve,reject){
//     console.log("promise is pending");
//     setTimeout(()=>{
//         // alert("i am promise and i am resolve");
//         resolve(true)
//         // reject(new Error("i am an error"))
//     },5000)
// })

// let promise2=new Promise(function(resolve,reject){
//     console.log("promise is pending");
//     setTimeout(()=>{
//         // alert("i am promise and i am rejected");
        
//         reject(new Error("i am an error"))
//     },5000)
// })

// console.log(promise1,promise2);


// //To get the value
// promise1.then((value)=>{
//     console.log(value);
// })

// //to catch the error
// promise2.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// })


// **************video3*************

// let p1=new Promise(function(resolve,reject){
   
//     setTimeout(()=>{
       
//         console.log("resolve after 2sec");
//         resolve(56);
        
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("promise p2"),2000);
        
//     })
    
       
// }).then((value)=>{
//     console.log("we are done");
//     return 2;
// }).then((value)=>{
//     console.log("Now we are pakka done");
// })

// load script function

// const loadScript=()=>{

//     return new Promise((resolve,reject)=>{
//     let script=document.createElement("script");
//     script.type="text/javascript"
//     script.src=src;
//     document.body.appendChild(script);
//     script.onload=()=>{
//         resolve(1);
//     }
//     script.onerror=()=>{reject(0)};
// })
  
// }

// let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" )
// p1.then((value)=>{
//     console.log(value);
// })



// *************video 4************

let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // alert("hey i am not resolved")
        resolve(1)
    }, 3000);
})

p1.then(()=>{
    console.log("Hurray")
})
p1.then(()=>{
    console.log("congrats this promise is now resolve");
})