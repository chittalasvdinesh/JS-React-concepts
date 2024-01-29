const arr = [1, 2, 1, 3, 4, 3, 5, 3, 2,4,4,];

//output output =  [1, 2, 3, 4, 3, 5,3];
let res = [];


arr.map((val, i) => {
    //   console.log(val,i);
    const filteredList = arr.filter((el) => el === val);
    const uniqueList = arr.indexOf(val) === i
    if ((filteredList.length) % 2 == 0) {
        if (uniqueList) {
            res.push(val)
        }
    }
    else {
        res.push(val)
    }

})


console.log(res);


// const arr=[1,2,4,10,12]
// const filterArr=arr.filter((val)=>val>5);
// const doubledArr=arr.map((val)=>val>5)
// console.log(filterArr)
// console.log(doubledArr);


// console.log(1)
// setTimeout(()=>{
//  console.log(2)
// },0)
// console.log(3)


// home page - parent
// nav page -


// const HomePage=()=>{
//   const[textColor,setTextColor]=useState("red")
//     return (
//         <>
//         <Navbar setTextColor={setTextColor}/>
//         <div style={{color:{textColor}}}>
//            Color
//         </div>
//         </>
//     )
// }


// const Navbar=({setTextColor})=>{

//     const changeColor=()=>{
//         setTextColor("green")
//     }

//     return (
//         <button onClick={changeColor}>change</button>

//     )
// }


// stack- LIFO(Last-in-first-out)
// queue- FIFO principle(First-in-First-out)


const stack=[];

stack.push(1)
stack.push(2)
stack.push(3)


const poppedStackArr=stack.pop()

console.log(stack,poppedStackArr);



const queue=[];

queue.push(4)
queue.push(5)
queue.push(6)


const QueueArr=queue.shift()

console.log(QueueArr,queue);

//Synchronous programming often follows a stack-like behavior.
// In synchronous programming, execution follows a straightforward, top-to-bottom flow,
//  which aligns well with the Last In,
//  First Out (LIFO) principle of a stack. Each function call or operation is added to the top of the stack, and when a function completes, 
// it is removed from the stack.
// Asynchronous programming often involves queuing mechanisms to manage the order of execution.

const syncStack=[];

function syncOperation1(){
    syncStack.push("operation1")
};

function syncOperation2(){
    syncStack.push("operation2")
};

syncOperation2();
syncOperation1();

console.log(syncStack);


const myApp=document.getElementById("app");
const myAppHeadingEl=document.createElement('h1');
const text="My APP Heading";
const headerContent=document.createTextNode(text);
myAppHeadingEl.appendChild(headerContent);
myApp.appendChild(myAppHeadingEl)


// excecution example

// var n=2;
// function square(num){
//     var res=num*num;
//     return res;
// };

// var square2=square(2);
// var square4=square(4);

// ends


// hoisting example
// getName(); // This is dinesh
// myName(); // error:myName is not a function
// console.log(x); //undefined
// console.log(getName)

// var x=5;

// function getName(){
//     console.log("This is dinesh");
// }

// var myName=()=>{
//    console.log("dinesh");
// }

//ends

//functions

// var x=1;
// a()
// b();
// console.log(x);
// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }
//

//this, window
  
// var a=10;
// function abc(){
//     var x=5;
// }

// console.log(window.a); //10
// console.log(window.abc); // function
// console.log(window.x); // undefined
// console.log(this.a);

//

// scope chain

function a(){
    var b=10;
    c()
    function c(){
        console.log(b)
    }
}
a()

//