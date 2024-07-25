// factorial of 5 = 5*4*3*2*1 = 120
// factorial of 0 = 1
// factorial of 1 = 1

function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }else{
        let fact = 1;
        for(let i=1; i<=num; i++){
            fact = fact * i
        }
        return fact;
    }
}
console.log(factorial(5));