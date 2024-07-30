const counterFunc =()=>{
    let count = 0;

    return function counter(){
        return ++count;
    }
}
const counter = counterFunc() //call hole function

console.log(counter());//call only counter function
console.log(counter());//call only counter function
console.log(counter());//call only counter function
console.log(counter());//call only counter function