//Variable - storage/container which stores either single or multipe values
//There are 3 ways in which we can declare variables (JS & TS)
/*
    Syntax:
    keyword(var/let/const) variableName = value - JS
    keyword(var/let/const) variableName : datatype(Optional) = value - TS
*/
// var - In Modern JS & TS we don't use var keyword > version 5 - ES 6 (ECMA script 6)
// let - The value of the variable can change at any point of time
// const - To declare a constant variable (It's value cannot be changed throughout)

/*
Scope of variable:
    1. Local Scope variable - When you try to declare a variable inside of the curly brackets {...}
    2. Global Scope variable - When you try to declare a variable outside of the curly brackets ...{}
*/

let Lang1 = "Hey" //Global scope variable

{
    let Lang2 = "Hie" //Local scope variable
    console.log(Lang1)
    console.log(Lang2)
}

// var - It is not considered as a local stored variable even when it is stored in the curly brackets.
// Scope - Functional or Global
// Whenever you declare a variable using var keyword it can be re-declared and can also be re-initialised.
// Hoisting - We can access the variable before it's declaration as well.
// It is not mandatory to assign the variable at the time of execution

var num1 = 10

num1 = 2    //re-initialised

var num1 = 20
var num1 = 30
console.log(num1); 