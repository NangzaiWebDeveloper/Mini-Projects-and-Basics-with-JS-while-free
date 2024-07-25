const numbers = [1, 2, 5, 3, 9, 13, 10]

function filterEvenNumber(numbers){
    return numbers.filter(num => num % 2 !== 0)
}
console.log(filterEvenNumber(numbers));