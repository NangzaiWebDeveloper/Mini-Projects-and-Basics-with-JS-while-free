function factorialNum(n){
    if(n===1){
        return 1;
    }
    else{
        return n * factorialNum(n-1)
    }
}
console.log(factorialNum(5));