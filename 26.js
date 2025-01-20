{/* <>----Array.from() method----<> */}
//Array.from() method return string to [array] of each number or character;

const str = "12345"
// console.log(typeof(str));

// EX-00:
const result = Array.from(str) //output: ['1', '2', '3', '4', '5']


// EX-01:
// const result = Array.from(str, toNum)
// function toNum(x){
//     return Number(x) //output: [1, 2, 3, 4, 5]
// }


// EX-02:
// const result = Array.from(str, x => Number(x)) //output: [1, 2, 3, 4, 5]


// EX-03:
// const result = Array.from(str, Number) //output: [1, 2, 3, 4, 5]


// console.log(result)
// console.log(typeof(result));//return Array, if multiple array থাকলে তখন তাকে object বলে।


// EX-04: 
// function fun(){s
//     return Array.from(arguments).join("")
// }
// const result = fun("N", "a", "n", "g", "z", "a", "i")
console.log(result);




//--------- Practice here bro --------------- 



