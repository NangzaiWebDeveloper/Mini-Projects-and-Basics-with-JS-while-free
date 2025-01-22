// ------Substring() method-------
// *substring & slice method are same but not at all

// Syntax: substring(indexStart, indexEnd) //sometimes substring assume that less number is starting & greater number is ending.
// Syntax: slice(start, end)

const text = "JavaScript is a Scripting Language";
console.log(text)


// EX-01: 
// const substringText = text.substring(4)
// console.log(substringText)//output: Script is a Scripting Language


// EX-02: 
// const substringText = text.substring(4, 10)
// console.log(substringText)//output: Script


// EX-03:
// const substringResult = text.substring(-5,10)//in substring - or -5,-6,-7....etc means 0/null.
// console.log(substringResult)// output: JavaScript


// EX-04:
// const substringResult = text.substring(10,-0)//in substring - or -5,-6,-7....etc means 0/null.
// console.log(substringResult)// output: JavaScript


// EX-05: 
// const substringText = text.substring(10,4)//here substring assume that 4 is starting point & 10 is ending point.
// console.log(substringText)//output: Script


//EX-06:
// const num = "JavaScript";
// const substringText = num.substring(0, num.length-2)
// console.log(substringText)//output: JavaScri



// ----Examples of slice() method-----:

// EX-01:
// console.log(text.slice(4))//output: Script is a Scripting Language

// EX-O2:
// console.log(text.slice(4, 10))//output: Script

// EX-03:
// console.log(text.slice(-5,10))//output: blank(...)

// EX-O4:
// console.log(text.slice(10,4))//output: blank(...)