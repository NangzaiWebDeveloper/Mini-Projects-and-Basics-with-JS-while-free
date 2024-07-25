let num = [10, 20, 30, 40, 50];


let sum = 0
for(let i=0; i<num.length; i++){
    sum = sum + num[i]
}
console.log(sum);//150


let plus = 0;
for(let i of num){
    plus = plus + i
}
console.log(plus);//150