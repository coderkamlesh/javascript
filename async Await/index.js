
//async

// async function test(){
//     return "hello"
// }

// test().then((result)=>{
//     console.log(result);
// })


//Await

// async function test(){
//     console.log("2: mesage");
//     await console.log("3: mesage");
//     console.log("4: mesage");
// }
// console.log("1:message");

// test();
// console.log("5:message");


//using fetch method

async function test(){
    
    const response= await fetch("json/student_data.json")

    

    const students=await response.json();

    return students;
}


test().then((result)=>{
    console.log(result);
}).catch((error)=>{
console.log(error);
})

