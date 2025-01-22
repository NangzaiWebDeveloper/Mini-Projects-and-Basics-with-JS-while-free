// ------forEach() method------
//forEach() method is same like for loop or while loop;
//for loop or while loop is time consuming;
//forEach() method is not time consuming as like "for" or "while" loop;


let softwares = ["Nangzai", "Hannan", "Anik", "Jamil", "Masud"] //01-03 EX

// EX-01: Basic theory
// console.log(softwares[0])//output: Nangzai


// EX-02: for loop
// for (let i=0; i<softwares.length; i++){
//     // console.log(softwares[3]);//output: Jamil
//     console.log(softwares[i])
// }


// EX-03:  (forEach() method with index)
softwares.forEach((element, index)=>{
    console.log(index+1 + ' : ' +element)
})

