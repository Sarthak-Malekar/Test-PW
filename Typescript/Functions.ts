/*function greet(){
    console.log("Yo");
}
greet()

//************************************************************* */
/*function greets(){
    console.log("Yoo");
}
let G = greets()

//************************************************************* */
/*function add(a:number, b:number){
    console.log(a+b);
}

add(10,20)
add(20,40)
*/
//************************************************************** */
function adition(a:number, b:number){
    return a+b
}

let sum = adition(73,84)
console.log(adition(8239,8923));
let sum1 = adition(sum,90)
console.log("bleh is : "+ sum1);

//*************************************************************** */
let message = (name:string, age:number) => console.log(`Your name is ${name} and age is ${age}.`);
    console.log("iuytjh");
message("Vampes", 26)   