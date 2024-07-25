let arr = [10, 12, 10, 15, 13, 10, 10];

function removeElementFromArray (arr){
    return arr.filter(num => num !== 10)
}

console.log(removeElementFromArray(arr));