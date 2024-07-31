// normal array 
const arr = [20, 10, 67, 80, 11, 10]
console.log(arr);

// set array 
//set value take only unic value, same value does not take.
const result = new Set([22, 77, 66, 44, 99, 66]) //here 66 is same value
result.add(88)
result.add('hello')
console.log(result);//return Object

// if i get length of Set
let length = 0
for(let element of result){
    length++
}
console.log("length : "+ length);