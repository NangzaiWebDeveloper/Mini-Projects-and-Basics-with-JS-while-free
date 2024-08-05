//Topic : callback 

// const add = (pro) => {
//     console.log(pro);
// }

// const product = (a, b, callback) => {
//     sum = a + b;
//     callback(sum);
// }
// product(5, 5, add)

// setTimeout(loadingData, 3000)


//Topic : callback hell

function loadingData(callback) {
    setTimeout(() => {
        console.log("1. Loading data ....");
        callback()
    }, 2000)
}
function collectingData(callbackTwo) {
    setTimeout(() => {
        console.log("2. Collecting data ....");
        callbackTwo()
    }, 3000)
}
function approvingData(callbackThree) {
    setTimeout(()=>{
        console.log("3. Approving Data ....");
        callbackThree()
    }, 4000)
}
function approved() {
    console.log("4. Approved.");
}

//here this is callback hell 
loadingData(function () {
    collectingData(() => {
        approvingData(function(){
            approved();
        });
    });

});

