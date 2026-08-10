//String Methods

let string = "          Welcome to Typescript!          "

//1. length - Returns the number of characters in a string.
//Syntax
//stringName.length

console.log(string.length);

//2. charAt(index) - Returns the character at the specified index.
//Syntax
//stringName.charAt(index)

console.log(string.charAt(21));

//3. concat(str1, str2) - Merges all the strings and returns us a new string.
//Syntax
//stringName.concat(str, str1, str2, ...)

console.log(string.concat("Hellow", " PWTS"));
console.log(string);

//4. includes(searchString, startIndex?)
//5. indexOf(searchValue, startIndex?)
//6. lastIndexOf(searchValue, startIndex?)

// What is the difference between slice() and substring() in string?

//7. slice(startIndex?, endIndex?) - Returns a portion of the string.
// stringName.slice()

console.log(string.slice());
console.log(string.slice(2,20));
console.log(string.slice(20,2));

//8. substring(startIndex, endIndex?) - Returns a portion of the string.
// stringName.substring()

console.log(string.substring(2,20));
console.log(string.substring(20,2));

//9. startsWith(string) - It checks if the string is starting with a specified string or character and returns boolean value.

console.log(string.startsWith(" "));

//10. endsWith(string) - It checks if the string is ending with a specific string or character and returs boolean value.

console.log(string.endsWith(" "));

//11. toUpperCase() - It converts the string to uppercase and returns a new string.

console.log(string.toUpperCase());

//12. toLowerCase() - It converts the string to lowercase and returns a new string.

console.log(string.toLowerCase());

//13. trim() - It removes the leading and trailing whitespace from a string and returns a new string.

console.log(string.trim());
console.log(string.length);
console.log(string.trim().length);//length to check the string length.

//14. trimStart() - It removes only the leading whitespace from a string.

console.log(string.trimStart().length);

//15. trimEnd() - It removes only the trailing whitespace from a string.

console.log(string.trimEnd().length);

//16. split(seperator) - It splits the string into an array of substring based on the specified seperator.

let string1 = "Apple Samsung Redmi Redmagic AsusROG"
console.log(string1.split(" "));

let email = "sarthak@vampes.jp"
let domain = email.split("@")
console.log(domain[1].split(".")[0]);

//17. replace(old, new) - Replaces old with new string, it only replaces the first occurances of the value.

console.log(email.replace("a", "i"));
console.log(email.replaceAll("a", "i"));//18. replaceAll - Replaces all the instance.
