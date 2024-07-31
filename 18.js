function createPrivateVariable() {
    //Private Variable
    let count = 0;

    //Inner Function(closer)
    function increment() {
        count++;
        console.log("Count : ", count);
    }

    return{
        incrementCounter : function(){
            increment();
        },
        getCount : function(){
            return count;
        }
    }
}

const counter = createPrivateVariable()

counter.incrementCounter()
counter.incrementCounter()
counter.incrementCounter()

console.log(counter.getCount());