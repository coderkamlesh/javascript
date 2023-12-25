const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("hello i am krishna learning promise this is many times");
        resolve();
    },3000)
})

promiseOne.then((result)=>{
console.log("promise consumed");
})


new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve()
        console.log("Async task 2");
    }, 3000);
}).then(()=>{
    console.log("promise consumed");
})


const promiseThree=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({username:"chai",email:"chai@example.com"})
        }, 3000);
})

promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"krishna",password:"123"})
        }else{
            reject("ERROR:someting went wrong")
        }
    }, 3000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject("ERROR:JS went wrong")
        }
    }, 3000);
})

async function consumePromiseFive(){
   try {
        const response=await promiseFive;
        console.log(response);  
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


async function getAllPosts(){

    try {
        const response=  await fetch("https://jsonplaceholder.typicode.com/posts");

        const data= await response.json();
        console.log(data);  
    } catch (error) {
        console.log("error ",error);
    }
   
}
getAllPosts();


fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>console.log(error))