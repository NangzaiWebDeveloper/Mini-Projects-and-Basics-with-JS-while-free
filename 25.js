// < ---- eval() method ---- >
// 1. eval() method convert from string to number/code 

// EX-01: 
const num = "10 + 20";//value is string
console.log(num);//output: 10+20
const result = eval(num)//convert string to number
console.log(result);//output: 30


// EX-02:
const a = 102;
const b = 203;
const sum = eval("a+b")//convert string to number
console.log(sum) //output: 305