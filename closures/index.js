
// message:"Good Global";

// function hello1(){

//     let message="good morning"
    
//         // let message="good afternoon";
//     console.log("hello1: " + message);
    
//     let c=function hello2(){
//         console.log("I am c " +message);
//     }
//     return c;
// }
// c=hello1();
// c();


//example -2;
// function callApi(method){
//     return function(url){
//         console.log(`Fetching data from ${url} using ${method} method`);
//     }
// }

// const url='http://example.com/api';
// const api=callApi('GET');

// api(url);


// **********real life example******

// function counterWrapper(){
//     let count =0;
//    return  function(){
        
//         count++;
//         console.log(count);
        
//     }

// }

// const updateCount=counterWrapper();
// updateCount()
// updateCount()
// updateCount()



// **********real life ecommerce website (cart counter) example******

// function cartCounter(){
//     let _count=0;

//     function _updateCount(val){
//         _count+=val;
//     }

//     return{
//         increment(){
//             _updateCount(1);
//         },
//         decrement(){
//             _updateCount(-1);
//         },
//         value(){
//             return _count;
//         }
//     }
// }

// const CartCounter=cartCounter();

// CartCounter.increment();
// CartCounter.increment();
// CartCounter.increment();
// CartCounter.decrement();

// console.log(CartCounter.value());

// ********** cloning useState Hooks  ******

function useState(initial){
    let _state=initial;
    function setState(value){
        _state=value;
    }

    function getState(){
        return _state;
    }

    return [getState,setState]

}

function counter(){
    const[count,setCount]=useState(0);

    return{
        click(){
            setCount(count()+1);
        },
        render(){
            console.log("value", count());
        }
    }
}

const Counter=counter();
Counter.click();

Counter.render()
Counter.click();

Counter.render()
Counter.click();

Counter.render()
