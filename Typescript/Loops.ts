// Loops - It will execute a block of code multiple times until the condition is false.

console.log(1)
console.log(2)
console.log(3)

console.log("********************************")

/*for(let i = 1; i<=100; i++)
{
    console.log(i)
}*/
    
/*
1. for loop
    a. for loop - Traditional for loop - when we know how many times we have to run the iteration.
    b. for of loop - Loop through the iterable objects like arrays, strings, ...
    c. for in loop - Loops through the properties of an object - {key:value} {name:sarthak}

2. while loop - When we don't know how many times we have to run the iteration.

3. do while loop - When we need to execute the block of code atleast once before we check the condition.
*/

// For loop
/*for(let i = 1; i<2000; i++)
    console.log(i);
*/

/* 10 to 1
for(let z = 10; z>=1; z--)
    console.log(z);
*/

// For If
/*for(let i=1; i<=20; i++)
{
    if(i==10)
       {continue} //Break to end till there, Continue to skip the one mentioned in the condition and execute further
    console.log(i);   
}
*/
/*
// While Loop
let attempt = 1

while(attempt <= 3)
{
    console.log("Attempt = " + (attempt));
    attempt++
}


// Do While
let attempts = 2
do{
    console.log("Attempts = " + (attempts));
    attempts++
}
while(attempts < 4)
*/
/*
let attempts = 2

do{
    console.log("Attempt = "+ (attempts));
    attempts++ // 4
    
}while(attempts <=3); // 4>=3
*/
/*
for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        console.log(i+" "+j);
        
    }
}
*/

//Printing 1 - 10
let r = 1
while(r<=10)
{
    console.log("R = " + r);
    r++
}

let s=1
do{
    console.log("S = "+s);
    s++
}
while(s<=10)