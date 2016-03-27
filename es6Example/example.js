//ES6 do not use var any more
//const and let

//let is for a for loop
for(let i = 0; i < 10; i++){
console.log ("this run: " + i + "times")
}
//const the same as let exept that once you delcare you can not change
const foo = "test"
//but you can add stuff to it
const blue = []
blue.push("hello", 215)
console.log(blue)
//arrow functions
//thakes the this value from the parent scope
const foo2 = () ==> console.log("hey")

foo2()

const add = (a, b) ==> a+b

const add = (a, b) ==> {
return a+b
}

//they introduce interpolation "" '' ``, this  `` also allow you to inject variables to a string

var name = "rey"

const say hello = (name) ==> console.log(`hello, ${name}`)

