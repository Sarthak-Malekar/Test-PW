let array = [10, 20, 30, 40 , 50, "PW", true, null, undefined, 89.78]

console.log(array[2]);

console.log(array.length);// Gets the length of the array only.
console.log("********************************************************");

// Using the loop to iterate through the elements of an array

//1. Traditional For loop

for (let i=0; i<array.length; i++){
    console.log(array[i]);   
}

//2. For Of loop

for (let ele of array){
    console.log(ele);
}

console.log("**********************Method of an array**********************");

//1. Push(ele1, ele2, ele3, ...) - It adds the elements to the end of an array

console.log(array)

array.push(60, "TS")
console.log(array);

//2. Pop() - It removes the last element from the array and it returns the value

console.log(array);
//array.pop()

let lastElement = array.pop()
console.log(array);
console.log(lastElement);//Returns the removed last element from the array.

console.log("**************************************************************");

//a. What is the difference between push() & unshift() in an array?
//b. What is the difference between pop() & shift() in an array?

//3. unshift(ele, ele1, ele2, ...) - It adds the elements at the beginning of an array.

array.unshift("Java", 67)
console.log(array);

//4. shift() - It removes the first element from the array.

array.shift()
console.log(array);

//5. splice(startIndex, deleteCount, ele, ele1, ele2, ...) - Add/Remove the elements from the array at specified index.
// startIndex - The position where we want to add/delete the element.
// deleteCount - The number of elements to be deleted from the array.
// (ele, ele1, ele2, ...) - The elements that we want add at the startIndex.

let array1 = [10, 20, 30, 40, "TS", "JS", 70, 80]
console.log(array1);

array1.splice(4, 2, 50, 60)//If we don't want to delete any element than give deleteCount as 0
console.log(array1);

array1.splice(0, 0, 0)
console.log(array1);

//6. Slice(startIndex?, endIndex?) - Returns the portion of an array from startIndex to endIndex-1
//startIndex - The position where you want to start the slice.
//endIndex(Exclusive) - The position where you want to end the slice.

console.log(array1.slice(1, 5)) //will return from index 1 to index 5

//7. indexOf(element, startIndex?) - It returns the index of the first occurances of an element in an array,
// or returns -1 if the element is not available.

let arr10 = [10, 20, 30, 40, 50, 60, 10, 70, 10, 20]

let index = arr10.indexOf(10,0)//will return the index where 10 is first occured.
console.log(index);

//Assignment 1: Print all the instances of 10 in arr10
let q = arr10.indexOf(10,0)
let w = arr10.indexOf(10,1)
let e = arr10.indexOf(10,7)
console.log(q,w,e);

//8. lastIndexOf(element, startIndex?) - Returns the index of the last occurances of an element in an array.

console.log(arr10);
console.log(arr10.lastIndexOf(10,7));

//9. includes(element, startIndex?) - Returns 'true' if the element is found in the array, else 'false'.

console.log(arr10.includes(100));
console.log(arr10.includes(50, 4));


//10. join(separator?) - Joins all the elements of an array and returns as a string.

let arr11 = [14, 12, 1999]
console.log(arr11.join("/"));//Separates with the given separator and returns in the form of a string.

//11. toString() - Converts the array into string.
console.log(arr11.toString());
