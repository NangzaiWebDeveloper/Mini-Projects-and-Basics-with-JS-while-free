const firstFun = (val) => {
    console.log(val);
}
const secondFun = (a, b, callback) => {
    sum = a + b;
    callback(sum)
}
secondFun(2, 2, firstFun)
