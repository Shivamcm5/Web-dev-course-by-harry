console.log("Hello")

var a = 30;
a = a + 2; //this won't show any error because we can change it while using "Var" variable

const a1 = 50;
//a1 = a1 + 4; this will show error because we can't change it like this as "Const" variable doesn't allow us to do it.

console.log(a)//no error
console.log(a1)//Error

// console.log(typeof a, typeof b, typeof c, typeof d)

// var b = 23;
// var c = "shivam";
// var d = "shivam";

let v = 45;

{//block Starts

    let v = 56;
    console.log(v) // 56 will be shown because "let" is a block variable

}// block ends

console.log(v) // 45 will be shown because of same reason as above

let a2 = "Shivam"; // String
let a3 = 22; //number
let a4 = 3.44; //number 
let a5 = true; //boolean
let a6 = undefined; //undefined
let a7 = null; //Due to some Mistake Null is Treated as oject

console.log(a2, a3, a4, a5, a6, a7)
console.log(typeof a2, typeof a3, typeof a4, typeof a5, typeof a6, typeof a7)

let o = {
    "Name": "Shivam",
    "Current role": "HTML and CSS coder",
    "Want to":"Full Stack Developer",
}

console.log(o)