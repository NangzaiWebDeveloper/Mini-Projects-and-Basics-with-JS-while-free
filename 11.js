let num = [10, 40, 20, 30, 40, 50, 1, 4,]

function findLargeNumber(num) {
    return num.reduce((max, current) =>
                    current < max ? max : current)
}
console.log(findLargeNumber(num));