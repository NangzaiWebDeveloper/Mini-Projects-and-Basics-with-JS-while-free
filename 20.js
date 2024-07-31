let obj = {
    name: "Abuzam Nangzai Singha",
    age: 21,
    dept: "EEE",
    info: function(){
        console.log(this.dept); // this is like object
    }
}
obj.info()