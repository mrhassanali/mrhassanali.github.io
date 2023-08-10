import React, { useState, useEffect } from "react";
import ContentList from "../plugin/ContentList";
import CodeHighlight from '../plugin/CodeHighlight';
import Footer from "../Footer";
import MoveTop from "../MoveTop";

import TopLoadingBar from "../plugin/TopLoadingBar";
// import Spinner from "../plugin/Spinner";
import InnerHTML from "../plugin/InnerHTML";


const javascriptCode = `document.write("Hello World!"); //Show Output in the Browser
document.alert("Hello World!"); //Show Alert Message When Refresh Browser
alert("Show Alert SMS");       //Show Alert Message When Refresh Browser`;
const jsScript = `<button onclick="window.print()">Click to Print Message</button>`;

const jsconsole = `console.log([1,2,3,4,5]);         //show in console section index of array
console.table([1,2,3,4,5]);       //show the array index in table
console.error([1,2,3,4,5]);       //show the error in the array
console.warn([1,2,3,4,5]);        //show the warning in Console
console.time([1,2,3,4,5]);       //show How much time to start run.
//Place the Code b/w console.time(); and console.timeEnd(); between the Code
console.timeEnd([1,2,3,4,5]);    //show How much time to start to End Run Query b/w.`;

const onPageScript = `<script type="text/javascript"> //JS code goes here </script>`;
const externalScript = `<script src="filename.js"></script>`;
const deferScript = `<script src="filename.js" defer></script>`;
const nonePrimitive = `// Primitive data types

// String
let name = "hassan";
console.log("My string is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    Hassan : 89,
    Faheem : 36,
    Waqas : 34
}
console.log( typeof stMarks);
// function
function findName() {

}
console.log( typeof findName);
//Date
let date = new Date();
console.log( typeof date);
`;
const varVariables = `var h = "hassan";
var h= "ali";
document.write(h);`;
const letVariables = `let h = "hassan";
let h= "ali"; //show error because it has already declare
document.write(h);`;
const constVariables = `const h = "hassan";
h= "ali";
//Does not override value b/c it already assign a constant value.
document.write(h);`;
const hoisting = `a = 10;
console.log(a);
var a;`;
const useStrictMode = `"use strict";
a=10;
console.log(a); //show error b/c they not declear`;
const typeConversion = `                         // Type conversion
//convert Number into String
let myVar = String(34);
 console.log(myVar, (typeof myVar));

//convert true / false into string
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

//Date convert to String
let date = String(new Date());
console.log(date, (typeof date));

//Array convert to String
let arr =  String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

// integer convert to integer to String
let i = 75;
console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');

console.log(number.toFixed(2), (typeof number));

                                    // Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);
`;
const simpleFunction = `                      /* Method 1 */
function nameOfFunction () {
    console.log("Method 1 Creating of Function");
    }
                      /* Method 2 */
let a = function(){
  console.log("Method 2 Creating of Function");
}`;
const arrowFunction = `                      /* Method 1 */
function nameOfFunction () {
    console.log("Method 1 Creating of Function");
    }
                      /* Method 2 */
let a = function(){
  console.log("Method 2 Creating of Function");
}`;
const callBackFunction = `const perOne = (name,callPara)=>{
    console.log(&#96;I am busy right Now.I am talking to &#36;{name}.I will call you back.&#96;);
    callPara(); //Calling the Call Back Function that execute after personOne
}
const perTwo = ()=>{
    console.log(&#96;Hey what's up.How are You?&#96;);
}
perOne("Hassan Ali",perTwo);
`
const localandGlogbal = ` var a = "Global";
function hassan(){
  document.write(a);
}
function ali(){
    var b = "Local";
    document.write(b);
}`;
const ifStatement = `if (condition) {
    // block of code to be executed if the condition is true
    }`;
const ifElseStatement = `if (condition) {
    // block of code to be executed if the condition is true
    } else {
    // block of code to be executed if the condition is false
}`;
const elseIfElse = `if (condition1) {
    // block of code to be executed if condition1 is true
    } else if (condition2) {
    // block of code to be executed if the condition1 is false and condition2 is true
    } else {
    // block of code to be executed if the condition1 is false and condition2 is false
    }`;
const switchStatement = `switch(expression) {
    case x:
    // code block
    break;
    case y:
    // code block
    break;
    default:
    // code block
}`;
const conditionalOperator = `//condition ? true : false ;
let a = 20;
let c = a>10 ? console.log("True"):console.log("false");
//Example 02
let c = a>10 ? "Hello World":"condition False";
console.log(c);`;
const spreadOperator = `// Spread Operator
arr = [1,2,3,4,5,32];

function avg(a,b,c){
    return a+b+c/3;
}
let a = avg(...arr);
console.log(a);

/* Insert Array to other Array */
let arr1 = [1,2,3,7];
let arr2 = [4,5,6];
let insert_Array = [1,2,3,...arr2,7];
console.log(insert_Array);

/*copy of the Array */
let c = ["Hassan","Ali","Khan"];
let copy = [...c];
console.log(copy);

/*Object Copy in Spread Operator
1.Copy the Object
2.In copy object change the value of country PK to Pakistan
3.Print the copy object
*/
let obj = {
    name : "Hassan Ali",
    age : 19,
    country : "PK"
}
// let obj2 = {};
// obj2.name = obj.name;
// obj2.age = obj.age;
// obj2.country = "Pakistan";
let copy_obj = {...obj,country:"Pakistan"};
console.log(copy_obj);`;
const forLoop = `for (initialization condition; termnation condition; increment/decrement) {
    // code block to be executed
}`;
const forInLoop = `for(var key in objectname){
    //Statement
    console.log(objectname[key]);
}`;
const forOffLoop = `var a = [1,2,3,4,5];
for(var x of a){
  console.log(x);
}`;
const whileLoop = `while (condition) {
    // code block to be executed
}`;
const doWhileLoop = `do {
    // run this code in block
    i++;
} while (condition);`;
const tryCatch = `try {
    //Block of code to try
    }
    catch(err) {
    //Block of code to handle errors
}`;
const createArray = `   // <Method 01>
let a = new Array(5);
a = [1,2,3,4,5];
// <Method 02>
let a = new Array("Hassan","Ali","Khan","Balouch")
// <Method 03>
let a = ["Hassan","Ali","Khan"];
//ForEach Loop Print the Array Element
a.forEach(element =>console.log(element));`;
const deleteModifyArray = `// <Method 01>
let a = [1,2,3,4,5];
console.log("Modify Element");
a[0]= 6;
console.log(a);
// <Method 02>
console.log("Delete Element")
delete a[4];
console.log(a);`;
const createMultidimenstionalArray = `var array = [
    //Index     0        1    2     3   4
         0   ["Hassan","20","Male","BS IT"],
         1   ["Ali"   ,"21","Male","BS CS"],
         2   ["khan"  ,"22","Male","BS IT"],
    ];`;
const createMultidimenstionalArrayexam = `var array = [
    ["Hassan", "20", "Male", "BS IT", "BS"],
    ["Ali", "21", "Male", "BS CS", "BS"],
    ["khan", "22", "Male", "BS IT", "BS"],
  ];
  console.log("Total Array Length :" + array.length);
  
  for (var i = 0; i < array.length; i++) {
    console.log("Array Length :" + i + "=" + array[i].length);
    const inner = array[i].length;
    for (var j = 0; j < inner; j++) {
      console.log(array[i][j]);
    }
    //   console.log("n");
  }
  
                  // HTML Table with Multidimensional Array
  document.write('<table border="1" width="100%" cellspacing="0">');
  for (var i = 0; i < array.length; i++) {
    console.log("Array Length :" + i + "=" + array[i].length);
    const inner = array[i].length;
    document.write("<tr>");
    for (var j = 0; j < inner; j++) {
      document.write("<td>");
      document.write(array[i][j]);
      document.write("</td>");
    }
    document.write("<tr>");
  }
  document.write('</table>');`;
const allArrayMethods = `Array.prototype.sort();          &amp;    Array.prototype.reverse();
Array.prototype.concat();        &amp;    Array.prototype.join();
Array.prototype.pop();           &amp;    Array.prototype.push();
Array.prototype.shift();         &amp;    Array.prototype.unshift();
Array.prototype.slice();         &amp;    Array.prototype.splice();
Array.prototype.isArray();       // Check Variable is Array or Not(return true/false)
Array.prototype.indexOf();       &amp;    Array.prototype.lastIndexOf();
Array.prototype.find();          &amp;    Array.prototype.findIndex();
Array.prototype.includes();      // Search value in Array (return true/false)
Array.prototype.some();          &amp;    Array.prototype.every();
Array.prototype.filter();        // Create New Array that value Satisfy condition
Array.prototype.toString();      &amp; Array.prototype.valueOf(); &amp; Array.prototype.fill();
Array.prototype.forEach();       // Print value or Index of Array
Array.prototype.entries();       // Return Keys/value of Array
Array.prototype.keys();          // Return Keys Only
Array.prototype.copyWithin();
Array.prototype.map();`;
const arraySort = `//Method 01
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
//Method 02
const number = [5,4,3,2,1];
number.sort();
console.log(number);`;
const arrayReverse = `const array1 = ['one', 'two', 'three'];
const reversed = array1.reverse();
console.log('reversed:', reversed);`;
const arrayConcat = `const a = ["a","b","c"];
const b = ["d","e","f"];
const c = a.concat(b);
//ForEach Print the concat Loop
c.forEach(element =>
document.write(element+",")
);`;
const arrayJoin = `//Method 01
const name = ["Hassan","Ali","Khan","Balouch"];
let check = name.join(" ");
console.log(check);
//Method 02
const name = ["Hassan","Ali","Khan","Balouch"];
let check = name.join("-");
console.log(check);
//Method 03
const name = ["Hassan","Ali","Khan","Balouch"];
let check = name.join(",");
console.log(check);
//Method 04
const name = ["Hassan"];
let check = name.join(",");
console.log(check);`;
const arrayPop = `const name = ["Hassan","Ali","Khan"];
name.pop();
name.forEach(element=>console.log(element));`;
const arrayPush = `const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);

console.log(animals);`;
const arrayShift = `const array = [1, 2, 3];
const firstElement = array.shift();
console.log(array1);
console.log(firstElement);`;
const arrayUnshift = `const array = [1, 2, 3];
array.unshift(4, 5);
console.log(array);`;
const arraySlice = `const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(0,3));`;
const arraySplice = `const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);`;
const isArrayCode = `Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false`;
const arrayIndexOf = `const name = ["Hassan","Ali","Khan","Balouch","Hassan","Ali"];
let check = name.indexOf("Ali");
console.log(check);`;
const arrayLastIndexOf = `const name = ["Hassan","Ali","Khan","Balouch","Hassan","Ali"];
let check = name.lastIndexOf("Ali");
console.log(check);`;
const arrayFind = `const age = [18,12,23,14,25,46];
let check = age.find(hassan);
function hassan(age){
    return age>18;
}
console.log(check);`;
const arrayFindIndex = `const age = [18,12,23,14,25,46];
let check = age.findIndex(hassan);

function hassan(age){
return age>18;
}
console.log(check);`;
const arrayInclude = `const age = [18,12,23,14,25,46];
let check = age.includes(18); //value found then they return true.
console.log(check);`;
const arraySome = `const a = [1,2,3,4,5,6];
let check = a.some(hassan);
// hassan function return true/false to check condition
function hassan(a){
    return a > 5 ;
}
console.log(check);`;
const arrayEvery = `const a = [1,2,3,4,5,6];
let check = a.every(hassan);
function hassan(a){
    return a >= 1 ;
}
console.log(check); //True b/c all element follow condition`;
const arrayFilter = `const age = [18,12,23,14,25,46];
let check = age.filter(hassan);
function hassan(age){
    return age>18;
}
console.log(check);`;
const arraytoString = `//Method 01
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
//Method 02
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();
console.log(text);`;
const arrayValueOf = `array.valueOf();`;
const arrayfill = `const a = [1,2,3,4,5,6];
let check = a.fill(1);
console.log(check);
                        //Example 02
const a = [1,2,3,4,5,6];
            //fill(value,start_index,end_index);
let check = a.fill("hassan",0,1);
console.log(check);`;
const arrayforEach = `const array = ['a', 'b', 'c'];
array.forEach(element => console.log(element));
                // Example 02
let a = [1,2,3,4,5,6];
a.forEach(function(value){
    console.log(value);
});
                // Example 03
let a = [1,2,3,4,5,6];
a.forEach(function(value,index){
    console.log(index+"=>"+value);
});`;
const arrayEntries = `const array = ['a', 'b', 'c'];
const index = array.entries();
for(const b of index){
 console.log(b);
}`;
const arrayKeys = `const name = ["Hassan","Ali","Khan"];
for(var keys of name){
console.log(keys);
}
    
let array = name.keys();
for(var index of array){
    console.log(index);
}`;
const arrayCopyWithin = `const a = [1,2,3,4,5,6];
const copy = a.copyWithin(0,3,4);
//const copy = a.copyWithin(0,3);
copy.forEach(element =>
console.log(element)
);`;
const arrayMap = `array.map(function(){
    //Statement
}); //Second use
array.map(function(currentValue, index, arr), thisValue);`;
const arrayMapMethods = `                                     //Method 01
const numbers = [1, 2, 3, 4 ,5];
const newArr = numbers.map(myFunction)
function myFunction(num) {
    return num * 10;
}        
                                     //Method 02
const name = [1,2,3,4];
let check = name.map(x=>x*2);
console.log(check);
                                     //Method 03
const name = [1,2,3,4];
let check = name.map(x=>x+1);
console.log(check);
                                     //Method 04
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr);`;
const ObjectCode = `// Method 01
const obj = {
    //Property : value,
    Name : "Hassan Ali",
    Age  : 18
}
// Method 02
const objectName = new object();
objectName.Name = "Hassan Ali";
//You can store multiple value through method 2`;
const ObjectSyntax = `const a = {
    Properties:values,
    Properties:values
}
`;
const ObjectExample = `const obj = {
    Name:"Hassan Ali",
    Age:18,
    email:"hassanalikhan417@gmail.com"
}
console.log(obj);
//Print Object Property
console.log(obj.Name);
`;
const arrayObject = `const obj = {
    Name:"Hassan Ali",
    Age:18,
    Degree:["BS IT","BS English","BS CS"]
// Properties : Array
}
console.log("Array Length = "+obj.Degree.length);
//Print Array first index
console.log(obj.Degree[0]);`;
const functionObject = `const obj = {
    firstName:"Hassan",
    lastName:"Ali",
    Age:18,
    Degree:["BS IT","BS English","BS CS"],
// Creating Function
    salary:function(){
        return 25000;
    },
    fullname : function(){
        return this.firstName + " "+this.lastName;
    }
}
console.log(obj);
//Print Function
console.log(obj.salary());
console.log(obj.fullname());`;
const ObjectwithinObject = `const obj = {
    Name:"Hassan Ali",
    Age:18,
    email:"hassanalikhan417@gmail.com",
    //creating Object
    living:{
        country:"Pakistan",
        city:"Rohilanwali"
    }
}
console.log(obj);
//Print Object within Object
console.log(obj.living.country);
console.log(obj.living.city);`;
const arryOfObject = `var student = [
    {Name : "Hassan",Age: 20,Country:"Pakistan"},
    {Name : "Ali",Age: 20,Country:"Pakistan"},
    {Name : "Khan",Age: 20,Country:"Pakistan"},
];

console.log("Array Length = " +student.length);
//Print Array
console.log(student);
//Print First Object
console.log(student[0]);
//Print Array within First Object and First Value
console.log(student[0].Name);
console.log(student[0].Age);
console.log(student[0].Country);`;
const desctructuring = `let obj = {
    name1 : "Hassan Ali",
    age : 19,
    country : "PK"
}
let {name1,age} = obj;
console.log(name1,age);
        //Example 02 Array Destructring
let user = ["Hassan Ali",20,"PK"];
let [name, age, country] = user;
console.log("Name : "+name);
console.log("Age : "+age);
console.log("Country : "+country);`;
const StringOperation = ` length();                   // Count the Length of Array
String.toLowerCase();       // Convert String to Lower Case
String.toUpperCase();       // Convert String to Capital Letter
String.includes("Search");  // Return True if word find in String 
String.startWith();         // Return true/false if first word/Char of String Match
String.endWith();           // Return true/false if last word/Char of String Match
String.search();            // work same as include() but they return position(index)
String.match();             // Same search word collect and make a array
String.indexOf();           // Return the first index of match value
String.lastIndexOf();       // Return the last index of match value
String.replace();           // Same work as you know in notepad or Microsoft word
String.trim();              // Remove Left-Right white space
String.charAT();            // Fetch only one Character by passing poition of char
String.charCodeAT();        // Return the Ascii code of character
String.fromCharCode();      // Convert Ascii code into character 
String.concat();            // Concat two or more strings
String.split();             // Seprate the String or convert string into array 
String.repeat();            // Repeat the string
String.slice();             // extract part of string and return new string
String.substring();         // Show the specific part of the string
String.toString();          // Convert array,number etc into String
String.valueOf();           // Default:Optional is used to print String As it.
JSON.stringify(object_variable_Parameter);`;
const stringLength = `let s = "Hi Hassan";
console.log(s.length);`;
const stringInclude = `let str = "Hello World";
console.log(str.includes("Hello"));
console.log(str.includes("e"));`;
const stringStart = `let a = "lorem text for string search";
console.log(a.startsWith("lorem"));`;
const stringEnd = `let a = "lorem text for string search";
console.log(a.endsWith("search"));`;
const stringSearch = `let str = "Please locate where 'locate' occurs!";
console.log(str.search("locate")); //return 7
console.log(str.search("Locate")); //return -1`;
const stringMatch = `let str = "JavaScript is a GREAT is Language";
// forwar slash is used for search 
// g mean search globally this word in array.
console.log(str.match(/is/g));`;
const stringIndexOf = `let String = "Hassan Ali khan Ali";
//Return First Occurance index of Search Stringconsole.log(String.indexOf("Ali"));`;
const stringLastIndexOf = `  let String = "Hassan Ali khan Ali";
console.log(String.lastIndexOf("Ali"));`;
const stringReplace = `let s = "Hassan Ali";
// string.replace("Search Value","Replace Value");
document.write(s.replace("Ali","Khan"));
                      // Example 02 
let old_string = "Hello World";
let new_string = "Hi";
// newString.replace(oldString);
// replace old string to new string
console.log(new_string.replace(old_string));
                      // Example 03 
let str = "JavaScript is a GREAT is Language";
// forwar slash is used for search 
// g mean search globally this word in array.
// Replace Globally where they find "is"
console.log(str.replace(/is/g,"are"));`;
const stringTrim = `let s = "    JavaScript   ";
console.log(s);
console.log(s.trim());      // By Default they remove left/Right Both
console.log(s.trimEnd());   // Remove space on the end of string
console.log(s.trimStart()); // Remove space start of the string`;
const stringCharAt = `let s = "Hassan Ali";
console.log(s.charAt(0));`;
const stringCharAtCode = `let s = "Hassan Ali";
console.log(s.charCodeAt(0));`;
const stringfromCharCode = `console.log(String.fromCharCode(65)); // return A
console.log(String.fromCharCode(66)); // return B`;
const stringConcat = `let str = "Hassan";
let str2 = "Ali";
let str3 = "Khan";

console.log(str.concat(str2));
console.log(str.concat(str2,str3));`;
const stringSplit = `let str = "How are you doing today?";
const myArr = str.split(" ");
console.log(myArr);`;
const stringrepeat= `var s = "JavaScript is a GREAT Language";
console.log(s.repeat(5));`;
const stringslice= `let a = "HassanAli";           // index start from 0
console.log(a.slice(0,6));             //Return Hassan
console.log(a.substring(0,6));         //Return Hassan
console.log(a.substr(0,6));            //Return Hassan`;
const tostring= `let a = [1,2,3,4,5];
console.log(a.toString()); //return number as a String`;
const keywordvariable= `let a = [1,2,3,4,5]; //Create a Array
console.log(a.length);  //return the length of array is 6
console.log(a[0]);      //return the number on index 0`;
const jsonString= `const info={
    Name : "Hassan Ali",
    Father_Name : "Riaz-ul-Hassan",
    Course: "IT"
}
console.log(JSON.stringify(info));`;
const convertStringintoObj= `let s = {"Name":"Hassan", "Age":20};
console.log(JSON.parse(JSON.stringify(s)));`;
const convertStringintoObjexamp= `const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
console.log(myJSON);
console.log(typeof(myJSON)); //check type return object
console.log(JSON.parse(myJSON));  //again string array convert into array`;
const numberMethods= ` Number()
parseInt()     // convert value into Integer
parseFloat()   // convert value into Decimal Form
isFinite()     // check value if finite or infinite
isInteger()    // check value is integer or not
toFixed(x)
toPrecision(x)`;
const NumberMethod= `let a = "99";
console.log(Number(a));
// example 02
// return Not a Number
let b = "99 Hi";
console.log(Number(b));`;
const isFiniteMethod= `let n = 100;
console.log(isFinite(n));  // true

let b = Infinity;
console.log(isFinite(b));  //false

let c = "100";
console.log(isFinite(c));  //true`;
const isintegerMethod= `let n = 100;
console.log(Number.isInteger(n));  // true

let c = "100";
console.log(isFinite(c));  //false`;
const fixedMethod= `let n = 10.564565;
// print only one number after decimal
console.log(n.toFixed(1));
// print only two number after decimal
console.log(n.toFixed(2));  `;
const precisionMethod= `let n = 10.564565;
console.log(n.toPrecision(3)); // return 10.6`;
const jsMath= `toString(); //Converts an object to a string
toExponential() //Converts a number to its exponential form.
valueOf();  //Returns the primitive value of a number.
Math.ceil(x)
Math.exp(x);                            //Returns the value of E^x
Math.log(x);                            //Returns the logarithmic value of x
Math.pow(x,y);                          //Returns the value of x to the power y
Math.random();  or Math.random() * max  //generate float number
Math.floor(Math.random()*max);          //return number in integer
Math.sqrt(x);                          //Returns the square root of a number x`;
const domDocument= `document.getElementById("id_name").innerHTML = "Change Text";
document.getElementByTagName("name");    //Find elements by tag name
document.getElementsByClassName("name"); //Find elements by class name
document.getElementsByName("fname");//using name in html input section get value
document;
document.all;
document.title;
document.head;
document.body;
document.links;
document.images;
document.documentURI;
document.domain;
document.scripts;
document.referrer;
document.lastModified;
document.forms;
document.doctype;
document.cookie;`;
const domID= `<button onclick="hassan()">click me</button>
<!--After Click the Button Change HTML Element Document Abc to Hassan Ali-->
<p id="demo">Abc</p>
<script>
//Creating Function
  function hassan(){
    x = document.getElementById("demo").innerHTML = "Hassan Ali";
    }
</script>`;
const domName= `<ul>
<li>Hassan Ali</li>
<li>Khan</li>
<li>Balouch</li>
</ul>

<input type="number" id="nnumber" placeholder="Enter Number" />
<button onclick="hassan()">click me</button>
<p id="demo"></p>
<script>
function hassan() {
  var x = document.getElementsByTagName("LI");
  var n = document.getElementById("nnumber").value;
  document.getElementById("demo").innerHTML = x[n].innerHTML;
}
</script>`;
const domClassName= `<p className="phassan">Hello My Name is:</p>
<p className="phassan">Hassan Ali</p>
<button onclick="hassan()">click me</button>
<p id="demo"></p>
<script>
  function hassan() {
   var x = document.getElementsByClassName("phassan");
   document.getElementById("demo").innerHTML = x.length;
  }
</script>`;
const domFname= `<input type="text" name="nametext" placeholder="Enter the Text"/>
<button onclick="hassan()">click me</button>
<p id="demo"></p>
<script>
  function hassan() {
   var x = document.getElementsByName("nametext")[0].tagName;
   document.getElementById("demo").innerHTML = x;

  }
</script>`;
const document= `let a = document;
console.log(a);`;
const documentAll= `// Method 01
let a = document.all;
console.log(a);
// Method 02
let a = document.all[5];
console.log(a);
// Method 03
let a = document.all[5].innerHTML;
console.log(a);`;
const documentTitle= `var a = document.title;
console.log(a);`;
const documentHead= `var a = document.head;
console.log(a);`;
const documentbody= `var a = document.body;
console.log(a);`;
const documentLinks= `let a = document.links[0];
console.log(a);`;
const documentImages= `let a = document.images[0];
console.log(a);`;
const documentDocumentURI= `let a = document.documentURI;
console.log(a);`;
const documentDomain= `let a = document.domain;
console.log(a);`;
const documentScripts= `let a = document.scripts[0];
console.log(a);`;
const documentReferrer= `let a = document.referrer;
console.log(a);`;
const documentLastModified= `let a = document.lastModified;
console.log(a);`;
const documentForms= `let a = document.forms;
console.log(a);`;
const documentDoctype= `let a = document.doctype;
console.log(a);`;
const documentCookie= `let a = document.cookie;
console.log(a);`;
const fetchLink= `let x = document.links;
let y = [];
for (let i = 0; i < x.length; i++) {
  y = x[i];
  console.log(y.href);
}`;
const editableDiv= `contentEditable = "true";`;
const editableDiv2= `<h1 contentEditable="true">Hello World</h1>`;
const editableDiv3= `<div className="container">
<h1 id="Hello">Hello World</h1>
<button id="clickme">Edit</button>
</div>
<script>
let a = document.getElementById("Hello");
let b = document.getElementById("clickme");
b.addEventListener("click",function(s){
    a.contentEditable = "true";
    a.style.border = "2px solid black";
});
</script>
`;
const AlterBoxJS= `alert("This is Alert Box"); //Second Example
var a = 10, b = 20;
if(a<b){
    document.write("A is Greater then B");
}else{
    alert("A is Less then B");
}`;
const ConfirmBox= `/*Example 01 Start */
var a = confirm("Do You Like Our Website");
alert(a);
/*Example 01 End */
                      /*Example 02 Start */
confirm("Message");
/*Example 02 End */
                      /*Example 03 Start */
var a =confirm("Do You like our Website");
if(a){
      alert("Thanks");
}else{
      alert("Sorry");
}
/*Example 03 End */`;
const promptBox= `
/*Example 01 Start */
prompt("what is Your Name?");   // show the input Message
/*Example 01 End */

/*Example 02 prompt value are assign to var a then var a display the value in alert
box. you can use the value of prompt in different purpose.*/
var a = prompt("What is your Name?");
alert("Your Name is "+a);
document.write(a);
/*Example 02 End */`;
const blurMethod= `blur()`;
const domAttributeChildren= `
01  Element.children             | Return All the children
02  Element.classList            | Show List of Class in Element
03  Element.className            | Add Class Name in Element
04  Element.firstElementChild    | Select First Child Element
05  Element.lastElementChild     | Select Last Child Element
06  Element.nextElementSibling
07  Element.previousElementSibling
                              DOM Get Attribute from Element
09  Element.attributes           | List of All Attributes of Element
09  Element.getAttribute()       | Get Specific Attribute        
10  Element.getAttributeNames()  | Return Attribute in Array
11  Element.getAttributeNode()   | Return complete Attribute
                              Create Attribute & Set Attribute
12  Element.createAttribute()    | Create New Attribute  
13    Element.setAttribute("class", "democlass");   | Set Attribute in the Element
14    Element.setAttributeNode()   | Set Attribute in the Element
15  Element.hasAttribute()       | Return True/false that attribute present
16  Element.hasAttributes()      | Return True if attribute found 
17  Element.querySelector()      | Select First Match Element
18  Element.querySelectorAll()   | Return Array of Element that match
                              Remove Attribute from Element
19  Element.remove()             | Remove Element From Document
20  Element.removeAttribute()    | Remove Attribute from Element
21  Element.removeAttributeNode()| Remove Complete Attribute Node
22  Element.replaceChildren()`;
const elementgetAttribute= `<p id="demo" className="name" style="color:red;"></p>
<script>
var a = document.getElementById('demo').getAttribute('style');
var b = document.getElementById('demo').getAttribute('class');
var c = document.getElementById('demo').getAttribute('id');
console.log(a); console.log(b); console.log(c);
</script>
`;
const elementgetAttributeName= `<ul id="list">
<li>Apple</li>
<li>Banana</li>
<li>Grapes</li>
</ul>
<script>
var a = document.getElementById('list').getAttributeNames();
console.log(a);
</script>`;
const elementgetAttributeNode= `<ul id="list">
<li>Apple</li>
<li>Banana</li>
<li>Grapes</li>
</ul>
<script>
var a = document.getElementById('list').getAttributeNode("id");
console.log(a);
</script>`;
const createAttribute= `<p id="demo">Hi Hassan</p>
<script type="text/javascript">
    let demo = document.getElementById('demo');
    let c = document.createAttribute("style");
    c.value = "color:white;padding:10px;font-family:verdana;";
      // element.setAttributeNode(create_attribute);
    demo.setAttributeNode(c);
    console.log(demo);

    console.log(demo.getAttributeNode('style'));
</script>`;
const hasAttribute= `<ul id="list">
<li>Apple</li>
<li>Banana</li>
<li>Grapes</li>
</ul>
<script>
var a = document.getElementById('list').hasAttribute("id");
console.log(a);
</script>`;
const hasAttribute1= `var a = document.getElementById('list').hasAttributes();
console.log(a);`;
const ElementquerySelector= `document.querySelector('css-selectors')`;
const ElementquerySelectorAll= `document.querySelectorAll('css-selectors', ...)`;
const ElementTagName= `document.getElementsByTagName('element-name')`;
const ElementClassName= `document.getElementsByClassName('class-name')`;
const ElementgetElementById= `document.getElementById('id')`;
const ElementgetElementByIdhtml= `<article> My article 1</article>
<article> My article 2</article>`;
const ElementgetElementByIdjs= `let mytag = document.getElementsByTagName('article');
for (let i = 0; i < mytag.length; i++) {
mytag[i].style.border = '1px solid blue';
}`;
const Elementremove= `<p id="demo">Click the button,and this paragraph will be removed from the DOM.</p>
<button onclick="myFunction()">Remove paragraph</button>
<script>
function myFunction() {
    var myobj = document.getElementById("demo");
    myobj.remove();
}
</script>`;
const ElementremoveAttribute= `<style>
.democlass {
  color: red;
}
</style>
<h1 className="democlass">Hello World</h1>
<button onclick="myFunction()">Try it</button>
<script>
function myFunction() {
  document.getElementsByTagName("H1")[0].removeAttribute("class");
}
</script>`;
const ElementremoveAttributeNode= `<!DOCTYPE html>
<html>
<body>
<style>
main {
  display: flex;
}

div {
  margin-right: 20px;
}

label, button {
  display: block;
}

.buttons {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

select {
  width: 200px;
}
</style>

<main>
  <div>
    <label for="no">No thanks!</label>

    <select id="no" multiple size="10">
      <option>Apples</option>
      <option>Oranges</option>
      <option>Grapes</option>
      <option>Bananas</option>
      <option>Kiwi fruits</option>
      <option>Chocolate cookies</option>
      <option>Peanut cookies</option>
      <option>Chocolate bars</option>
      <option>Ham Sandwiches</option>
      <option>Cheese Sandwiches</option>
      <option>Falafel sandwiches</option>
      <option>Ice cream</option>
      <option>Jelly</option>
      <option>Carrot sticks and houmous</option>
      <option>Margherita pizza</option>
      <option>Pepperoni pizza</option>
      <option>Vegan veggie pizza</option>
    </select>
  </div>

  <div className="buttons">
    <button id="to-yes">Transfer to "Yes" --></button>
    <button id="to-no"><-- Transfer to "No"</button>
  </div>

  <div>
    <label for="yes">Yes please!</label>

    <select id="yes" multiple size="10">

    </select>
  </div>
</main>

<script>
const noSelect = document.getElementById('no');
const yesSelect = document.getElementById('yes');
const noBtn = document.getElementById('to-no');
const yesBtn = document.getElementById('to-yes');

yesBtn.addEventListener('click', () => {
const selectedTransferOptions = document.querySelectorAll('#no option:checked');
const existingYesOptions = document.querySelectorAll('#yes option');
yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener('click', () => {
const selectedTransferOptions = document.querySelectorAll('#yes option:checked');
const existingNoOptions = document.querySelectorAll('#no option');
noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});
</script>
</body>
</html>`;
const replaceChildren= `<!DOCTYPE html>
<html>
<body>
<style>
main {
  display: flex;
}

div {
  margin-right: 20px;
}

label, button {
  display: block;
}

.buttons {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

select {
  width: 200px;
}
</style>

<main>
  <div>
    <label for="no">No thanks!</label>

    <select id="no" multiple size="10">
      <option>Apples</option>
      <option>Oranges</option>
      <option>Grapes</option>
      <option>Bananas</option>
      <option>Kiwi fruits</option>
      <option>Chocolate cookies</option>
      <option>Peanut cookies</option>
      <option>Chocolate bars</option>
      <option>Ham Sandwiches</option>
      <option>Cheese Sandwiches</option>
      <option>Falafel sandwiches</option>
      <option>Ice cream</option>
      <option>Jelly</option>
      <option>Carrot sticks and houmous</option>
      <option>Margherita pizza</option>
      <option>Pepperoni pizza</option>
      <option>Vegan veggie pizza</option>
    </select>
  </div>

  <div className="buttons">
    <button id="to-yes">Transfer to "Yes" --></button>
    <button id="to-no"><-- Transfer to "No"</button>
  </div>

  <div>
    <label for="yes">Yes please!</label>

    <select id="yes" multiple size="10">

    </select>
  </div>
</main>

<script>
const noSelect = document.getElementById('no');
const yesSelect = document.getElementById('yes');
const noBtn = document.getElementById('to-no');
const yesBtn = document.getElementById('to-yes');

yesBtn.addEventListener('click', () => {
const selectedTransferOptions = document.querySelectorAll('#no option:checked');
const existingYesOptions = document.querySelectorAll('#yes option');
yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener('click', () => {
const selectedTransferOptions = document.querySelectorAll('#yes option:checked');
const existingNoOptions = document.querySelectorAll('#no option');
noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});
</script>
</body>
</html>`;
const domHTMLExample1= `<!DOCTYPE html>
<html lang="en">
<!--Head Section is Not Add Because we only Test the Code-->
<body>
<button onclick="hassan()">click me</button>
<p id="demo">Old Text</p>
<script>
  function hassan() {
    document.getElementById("demo").innerHTML = "New Text"
  }
</script>
</body>
</html>`;
const domHTMLExample2= `<!DOCTYPE html>
<html lang="en">
<!--Head Section is Not Add Because we only Test the Code-->
<body>
<button onclick="hassan()">click me</button>
<p id="demo">Old Text</p>
<script>
  function hassan() {
     var element = document.getElementById("demo");
    element.innerHTML = "New Text"
  }
</script>
</body>
</html>`;
const domHTMLExample3= `<!DOCTYPE html>
<html lang="en">
<!--Head Section is Not Add Because we only Test the Code-->
<body>
<button onclick="hassan()">click me</button>
<image id="image01" src="1.jpg" width="320" height="300"/>
<script>
  function hassan() {
    document.getElementById("image01").src = "2.jpg"
  }
</script>
</body>

</html>`;
const elementattribute= `  <!DOCTYPE html>
<html lang="en">
<!--Head Section is Not Add Because we only Test the Code-->
<style>
.democlass {
  color: red;
}
</style>

<body>
<h1 id="demo">Hassan Ali</h1>
<button onclick="hassan()">click me</button>
<script>
  function hassan() {
    // var a = document.getElementsByTagName("H1")[0];
    // a.setAttribute("class", "democlass");
    //Second Method
var a = document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");

  }
</script>
</body>

</html>`;
const elementaddEventListener= `<p id="demo">Hello Click Me</p>
<script type="text/javascript">
document.getElementById('demo').addEventListener('mouseover',function(){
        this.style.border = "2px solid Black";
        this.style.cursor = "Pointer";
        });

document.getElementById('demo').addEventListener('mouseleave',function(){
    this.style.border = "none";
    });
</script>`;
const useCaptureelementaddEventListener= `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
#outer{
    background-color:rgb(138, 241, 138);
    width:460px;
    height: 440px;
    margin:0 auto;
}
#inner{
    background-color:rgb(62, 123, 238);
    width:360px;
    height: 260px;
    margin:auto;
    margin-top:60px;
}
</style>
</head>
<body>
<div id="outer">
<h2>outer</h2>
<div id="inner">
  <h2>Inner</h2>
</div>
</div>
<script src="hassanali.js"></script>
</body>
</html>`;
const useCaptureelementaddEventListenerjs= `let outer = document.querySelector("#inner");
let inner = document.querySelector("#outer");
//first run outer then inner
inner.addEventListener('click',function(){
window.alert("This is inner");
});
outer.querySelector("#outer").addEventListener('click',function(){
window.alert("This is Outer");
});

//first run inner then outer
inner.addEventListener('click',function(){
window.alert("This is inner");
},true);
outer.addEventListener('click',function(){
window.alert("This is Outer");
},true);

//Call Defaults first outer then inner div
inner.addEventListener('click',function(){
window.alert("This is inner");
},false);
outer.addEventListener('click',function(){
window.alert("This is Outer");
},false);`;
const removeEventListenerhtml= `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<p id="demo">Hello Click Me</p>
<script src="hassanali.js"></script>
</body>
</html>`;
const removeEventListenerjs= `let x = document.getElementById('demo');
x.addEventListener('click',abc());
function abc(){
    this.style.backgroundColor = "green";
    this.style.color = "white";
    this.style.fontFamily = "verdana";
}
//Use For Remove the Above Event
x.addEventListener('click',xyz());
function xyz(){
    x.removeEventListener('click',abc());
}`;
const jsEventFuncList= `<h1 id="head">Click to See Event in Console</h1>
<script>
var heading = document.getElementById('head');
heading.addEventListener('click',function(e){
    console.log(e);
    var variable = e;
    console.log(variable.target.innerText);
});
</script>`;
const clickEvents= `element.addEventListener('click', ()=>{
    // Code to be executed when the event is fired
    });
           // Example
    <h1 onclick = "func()">Click to See Event in Console</h1>
    <script>
        let func = ()=>{
            document.body.style.background = "green";
            document.body.style.color = "white";        
        }
    </script>`;
const rigtClickEvent= `element.addEventListener('contextmenu', ()=>{
    // Code to be executed when the event is fired
    });
           // Example
    <h1 oncontextmenu = "func()">Click to See Event in Console</h1>
    <script>
        let func = ()=>{
            document.body.style.background = "green";
            document.body.style.color = "white";        
        }
    </script>`;
const dblClickEvents= `element.addEventListener('dblclick', ()=>{
    // Code to be executed when the event is fired
    });
           // Example
    <h1 dblclick = "func()">Click to See Event in Console</h1>
    <script>
        let func = ()=>{
            document.body.style.background = "green";
            document.body.style.color = "white";        
        }
    </script>`;
const mouseEnterEvent= `element.addEventListener('mouseenter', ()=>{
    // Code to be executed when the event is fired
    });
           // Example
    <h1 mouseenter = "func()">Click to See Event in Console</h1>
    <script>
        let func = ()=>{
            document.body.style.background = "green";
            document.body.style.color = "white";        
        }
    </script>`;
const mouseLeeveEvent= `element.addEventListener('mouseleave', ()=>{
    // Code to be executed when the event is fired
    });
           // Example
    <h1 mouseleave = "func()">Click to See Event in Console</h1>
    <script>
        let func = ()=>{
            document.body.style.background = "green";
            document.body.style.color = "white";        
        }
    </script>`;
const mousemoveEvent= `element.addEventListener('mousemove', ()=>{
    // Code to be executed when the event is fired
    });
           // Example
    <h1 mousemove = "func()">Click to See Event in Console</h1>
    <script>
        let func = ()=>{
            document.body.style.background = "green";
            document.body.style.color = "white";        
        }
    </script>`;
const keyboardEvent= `<form action="#" id="form-id">
<div>
    <label for=""><strong>onKeyDown</strong></label> <br>
    <input type="text"  onkeydown= alert(this.value);>
</div>
<div>
    <label for=""><strong>onkeyup</strong></label><br>
    <input type="text"  onkeyup= alert(this.value);>
</div>
<div>
    <label for=""><strong>onkeypress</strong></label><br>
    <input type="text"  onkeypress= alert(this.value);>
</div>
</form>
<!---Example 02 -->
<form action="#" id="form-id">
<div>
    <label for=""><strong>onKeyDown</strong></label> <br>
    <input type="text"  onkeydown= "document.getElementById('form-id').style.background = this.value;">
</div>
<div>
    <label for=""><strong>onkeyup</strong></label><br>
    <input type="text"  onkeyup= "document.getElementById('form-id').style.background = this.value;">
</div>
<div>
    <label for=""><strong>onkeypress</strong></label><br>
    <input type="text"  onkeypress= "document.getElementById('form-id').style.background = this.value;">
</div>
</form>
`;
const keydownEvent= `element.addEventListener('keydown', ()=>{
    // Code to be executed when the event is fired
    });`;
const keypressEvent= `element.addEventListener('keypress', ()=>{
    // Code to be executed when the event is fired
    });`;
const keyupEvent= `element.addEventListener('keyup', ()=>{
    // Code to be executed when the event is fired
    });`;
const onloadEvent= `<element onload="myScript">
window.onload = function(){myScript}; //in Js file to load function when page load
object.addEventListener("load", myScript);`;
const scrollEvent= `//scroll event
window.addEventListener("scroll",()=>{
    console.log("scrolling...");
});`;
const windowpageXandYOffsetEvent= `window.addEventListener("scroll",function (){
    if(window.pageYOffset > 400){
        console.log("over 400px...");
    }else{
        console.log("under 400px...");
    }
});`;
const windowpageXandYOffsetEventEventExamp= `window.addEventListener("scroll",function (){
    if(window.pageYOffset > 400){
        this.document.body.style.background = "black";
        this.document.body.style.color = "white";
    }else{
        
        this.document.body.style.background = "white";
        this.document.body.style.color = "black";
    }
});`;
const showdateTimeEvent1= `<!DOCTYPE html>
<html>
<body>
<button id="myBtn"l>Try it</button>
<p id="demo"l></p>
<script>
document.getElementById("myBtn").onclick = displayDate;
function displayDate() {
document.getElementById("demo").innerHTML = Date();
}
</script>
</body>
</html>`;
const showdateTimeEvent2= `<!DOCTYPE html>
<html>
<style>
.text{
    background-color: blue;
    color: white;
    font-family: cursive;
    font-size: 16px;
    width: 40%;
    height:80px;
}
</style>
<body>
             <!-- Example 01 -->
<button className="text" onclick="this.innerHTML = 'khan'">Try it</button>
            <!-- Example 02 -->
<button className="text" onclick="this.innerHTML = 'OOPS!'">Try it</button>
             <!-- Example 03 -->
<h1 id="changetext" onclick="changeText(this)">Click on Text</h1>
            <!-- Example 04 -->
<button className="text" onclick="this.innerHTML = Date()">Click to See Date</button>
            <!-- Example 05 -->
<button className="text" id="dateTime" onclick="">Click to See Date</button>
<p id="demo"></p>

<script>
function changeText(id){
id.innerHTML = "Text Changed!";
id.style.color = "red";
}

//Example 05
var a = document.getElementById("dateTime").onclick = displayDate;
function displayDate(){
document.getElementById("demo").innerHTML = Date();
}
</script>
</body>
</html>`;
const setTimeoutEvent= `setTimeout(function,milliseconds)`;
const setIntervalEvent= `setInterval(function,milliseconds);`;
const stopEvent= `stop()`;
const domCSS= `<h1 id="p2">Hassan Ali</h1>
<button onclick="hassan()">Click Me</button>

<script>
function hassan(){
var x = document.getElementById("p2");
x.style.color = "red";
x.style.fontFamily = "Arial";
x.style.borderBottom = "2px solid green";
x.style.textAlign = "center";
}
</script>
`;
const domClassNameMethod= `var textChange = document.getElementById('demo');
textChange.className;  // see previous class name name
textChange.className = 'xyz';
console.log(textChange);`;
const domclassListclassremove= `    var textChange = document.querySelector("#demo");
textChange.className = 'xyz abc';
var a = textChange.classList;
console.log(a);
//add new class using classList simply add() method is used
var textChange = document.querySelector("#demo");
textChange.classList.add("Hassan");
console.log(textChange);

var a = document.querySelector("#demo");
a.classList.add("Hassan","khan");
var b = a.classList;
console.log(b);

//Remove the Class by using classList Methods

var a = document.querySelector("#demo");
a.classList.remove("Hassan","Ali");
var b = a.classList;
console.log(b);`;
const dategetMethod= `toDateString();      // Return Day Month Date Year
getDate();           // Return only number date
getFullYear();       // Get only Year
getMonth();          // Get Month in Number
getDay();            // returns the day of the week for the specified date
toLocalDateString()  // Return Date/Month/Year e.g 15/08/2022`;
const datesetMethod= `setDate();
setDate();
setFullYear();`;
const timegetMethod= `getTime();           // Returns the number of milliseconds
getHours();          // Returns A Number, from 0 to 23, representing the hour
getMinutes();        // minutes (from 0 to 59) of the specified date and time.
getSeconds();        // seconds (from 0 to 59) of the specified date and time.
getMilliSeconds();   // Returns the milliseconds (from 0 to 999)
toLocaleTimeString() // Return Local Time e.g Hour:Minutes:Second`;
const timesetMethod= `  setHours();
setMilliseconds();
setMinutes();
setMonth();
setSeconds();`;
const jsdateandtimemethod= `  let now = new Date();  //create Object
document.write(now);
document.write("<br/>");
// return complete date with days name
document.write(now.toDateString());
document.write("<br/>");
//get only Year
document.write(now.getFullYear());
document.write("<br/>");
 //return only month number
document.write(now.getMonth());
document.write("<br/>");
//return only number date
document.write(now.getDate());`;
const jsdateandtimegetmethod= `  let now = new Date();  //create Object
document.write("<br/> Javascript Time Get Methods");
document.write("<br/>");
document.write("Print Hours ="+now.getHours());
document.write("<br/>");
document.write("Print Minutes ="+now.getMinutes());
document.write("<br/>");
document.write("Print Second ="+now.getSeconds());
document.write("<br/>");
document.write("Print MilliSecond ="+now.getMilliseconds());`;
const jsdateandtimesetmethod= `let now = new Date();  //create Object
now.setDate(14);
now.setFullYear(2022);
now.setMonth(4);
document.write(now);`;
const nodecode= `<div id="nodes"><p>1 child Node</p><p>2 child Node</p><p id="nextsibling">3 child Node</p><p id="previoussibling">4 child Node</p><p>5 child Node</p></div>  `;
const baseURIMethod= `var x = document.baseURI;
console.log(x);`;
const childNodesMethod= `var c = document.body.childNodes;
console.log(c);`;
const firstChildMethod= ` let x = document.getElementById("nodes").firstChild;
console.log(x);`;
const lastChildMethod= `let x = document.getElementById("nodes").lastChild;
console.log(x);`;
const nextSiblingMethod= `let x = document.getElementById("nextsibling").nextSibling;
console.log(x); `;
const previousSiblingMethod= `let x = document.getElementById("previoussibling").previousSibling;
console.log(x);`;
const nodeNameMethod= `let x = document.getElementById("nodes").nodeName;
console.log(x);  `;
const nodeTypeMethod= `let x = document.getElementById("nodes").nodeType;
console.log(x);  `;
const nodeValueMethod= `let x = document.getElementById("previoussibling").childNodes[0].nodeValue;
console.log(x);
`;
const ownerDocumentMethod= `let x = document.getElementById("nodes").ownerDocument.nodeType;
console.log(x);`;
const parentElementMethod= `let x = document.getElementById("nodes").parentElement;
console.log(x);`;
const textContentMethod= `<div id="demo">
<p>Hi</p>
<p>hassan</p>
</div>
<script>
  let x = document.getElementById("demo").textContent;
  console.log(x);
</script>`;
const appendChildMethods= `//create element
let element = document.createElement("h1");
//create Text Node
let text = document.createTextNode("This is Heading Text");
// append text in the element
element.appendChild(text);
console.log(element);
// print element in the document last
document.body.appendChild(element);
`;
const cloneNodeMethod= `<ul id="myList1">
<li>Coffee</li>
<li>Tea</li>
</ul>

<ul id="myList2">
<li>Water</li>
<li>Milk</li>
</ul>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
//select last item of list2
var itm = document.getElementById("myList2").lastChild;
var cln = itm.cloneNode(true);
document.getElementById("myList1").appendChild(cln);
}
</script>`;
const containsMethod= `<div id="check">
<p>Lorem ipsum dolor sit amet. </p>
<p id="abc">Lorem ipsum dolor sit amet. </p>
<p>Lorem ipsum dolor sit amet. </p>
</div>
<script>
let parentElement = document.getElementById("check");
let target = document.getElementById("abc");

let find  = parentElement.contains(target); //true b/c id present in child
console.log(find);
</script>`;
const getRootNodeMethod= `<div id="check">
<p>Lorem ipsum dolor sit amet. </p>
<p id="abc">Lorem ipsum dolor sit amet. </p>
<p>Lorem ipsum dolor sit amet. </p>
</div>
<script>
var child = document.querySelector('#abc');
console.log(child.getRootNode());
</script>`;
const hasChildNodesMethod= `<div id="check">
<p>Lorem ipsum dolor sit amet. </p>
<p >Lorem ipsum dolor sit amet. </p>
</div>
<script>
var target = document.getElementById("check");
var find = target.hasChildNodes()
console.log(find);
</script>`;
const isEqualNodeMethod= `<ul id="list1">
<li>Orange</li>
<li>Banana</li>
<li>Apple</li>
</ul>

<ul id="list2">
<li>Guava</li>
<li>Orange</li>
<li>PineApple</li>
</ul>

<script>
let list1 = document.getElementById("list1").firstElementChild;
let list2 = document.getElementById("list2").firstElementChild;
let check = list1.isEqualNode(list2);
console.log(check);
</script>`;
const normalizeMethod= `let create = document.createElement("p");
console.log(create);
create.appendChild(document.createTextNode("First Node"));
create.appendChild(document.createTextNode(" Second Node"));
create.appendChild(document.createTextNode(" Third Node"));
create.appendChild(document.createTextNode(" "));
//merge all node into one
console.log(create.normalize());
console.log();`;
const removeChildMethod= `<ul id="list">
<li>Apple</li>
<li>Banana</li>
<li>Grapes</li>
</ul>
<script>
let target = document.getElementById("list");
let listelement = target.children[0];
target.removeChild(listelement);
</script>`;
const replaceChildMethod= `<ul id="list">
<li>Apple</li>
<li>Banana</li>
<li>Grapes</li>
</ul>
<script>
let x = document.createElement("li");
let y = document.createTextNode("Replace List Text");
x.appendChild(y);
let target = document.getElementById("list");
let oldelement = target.children[0];
target.replaceChild(x, oldelement);
</script>`;
const domcreateMethod= `    //create element
let creatDoc = document.createElement("p");
console.log(creatDoc);
//create Text Node
let createText = document.createTextNode("Text is Here");
console.log(createText);
//create comment
let createCom = document.createComment("This is Commment");
console.log(createCom);`;
const domAppendMethod= `target.appendChild();             
target.insertBefore();
target.insertAdjacentElement();
target.insertAdjacentHTML();
target.insertAdjacentText();

                        //Parameter that pass in InsertAdjacent
beforeBegin
afterBegin
beforeend
afterend`;
const appendChildMethod= `//create element
let element = document.createElement("h1");
//create Text Node
let text = document.createTextNode("This is Heading Text");
// append text in the element
element.appendChild(text);
console.log(element);
// print element in the document last
document.body.appendChild(element);

                    //Second Method Two added the Comment
    let element = document.createElement('h1');
    let text = document.createTextNode('This is Heading Text');
    element.appendChild(text);
    let c = document.createComment("This is the Text");
    element.appendChild(c);
    document.body.appendChild(element);
    `;
const insertBeforeMethod= `let a = document.createElement("h5");
let b = document.createTextNode("Heading Five is used");
a.appendChild(b);
//id get from the html Using id
let target  = document.getElementById('abc');
//child Node prefer location 0 or
target.insertBefore(a,target.childNodes[0]); 

//Example 02 
<ul id="myList">
    <li>Coffee</li>
    <li>Tea</li>
  </ul>
  <button onclick="myFunction()">Try it</button>

  <script>
  function myFunction() {
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    newItem.appendChild(textnode);
    var list = document.getElementById("myList");
    list.insertBefore(newItem, list.childNodes[0]);
  }
  </script>`;
const insertAdjacentElementMethod= `<body>
<div id="abc" style="background-color:rgb(188, 241, 201)">
    <p>Click Me the linkExcepteur sit nulla excepteur nostrud.
        Sunt culpa laborum irure dolore deserunt ad et fugiat ex amet
        labore mollit. Aute dolor proident adipisicing enim incididunt
        ut consectetur laborum consequat ea laborum et ullamco.
    </p>
</div>
<script>
    let a = document.createElement("h1");
    let b = document.createTextNode("Heading Five is used");
    a.appendChild(b);
    let target = document.getElementById('abc');
    //target.insertAdjacentElement("beforeBegin",a);
    target.insertAdjacentElement("afterBegin",a);
    //target.insertAdjacentElement("beforeEnd",a);
    //target.insertAdjacentElement("afterEnd",a);

</script>
</body>`;
const insertAdjacentHTMLMethod= `let target  = document.getElementById('abc');
let newElement = "<h1>This is the Text</h1>";
target.insertAdjacentHTML("afterBegin",newElement);`;
const insertAdjacentTextMethod= `<div id="abc" style="background-color:rgb(188, 241, 201)">
<p>Click Me the linkExcepteur sit nulla excepteur nostrud.
    Sunt culpa laborum irure dolore deserunt ad et fugiat ex amet
    labore mollit. Aute dolor proident adipisicing enim incididunt
    ut consectetur laborum consequat ea laborum et ullamco.
</p>
</div>
<script>
let target  = document.getElementById('abc');
let newText = "New Text";
target.insertAdjacentText("afterBegin",newText);
</script>`;
const jsformEvents = `
onafterprint &amp; onbeforeprint
keydown        // See Above DOM Events 
keypress       // See Above DOM Events 
keyup          // See Above DOM Events
focus()
blur()
input Event    // oninput = "functionName()"
change Event   // onChange= "functionName()"
select Event   // onSelect= "functionName()" - When user Select thing event occur
submit Event   // onSubmit= "functionName()" - Event occur when user submit form
invalid        // onInvalid= "functionName()"- Event Fire when user input invalid`;
const beforeAfterMethod= `<!DOCTYPE html>
<html>
<body onafterprint="myFunction()">
<button onclick="window.print()">Click to Print Message</button>
<script>
function myFunction() {
alert("Your Document is Printed");
}
</script>

</body></html>`;
const onbeforeprintMethod= `<!DOCTYPE html>
<html>
<body onbeforeprint="myFunction()">
<button onclick="window.print()">Click to Print Message</button>
<script>
function myFunction() {
alert("This document is now being printed");
}
</script>

</body></html>`;
const focusBlurMethod= `<form action="#">
<label for="name"><b>Name :</b></label><br>
<input type="text" onfocus="focusFunction(this)" onblur="blurFunction(this)"><br>
<label for="father"><b>Father Name :</b></label><br>
<input type="text" onfocus="focusFunction(this)" onblur="blurFunction(this)"><br>


<label for="father"><b>Country :</b></label><br>
<select name="#" id="#" onfocus="focusFunction(this)" onblur="blurFunction(this)">
    <option value="#" selected disabled>Select Country</option>
    <option value="#">Pakistan</option>
    <option value="#">China</option>
    <option value="#">America</option>
    <option value="#">SiriLanka</option>
</select>
</form>

<script>
function focusFunction(element){
    element.style.background = "lime";
}
function blurFunction(element){
    element.style.background = "";
}
</script>`;
const inputonChangeMethod= `<form action="#">
<label for="name"><b>Name :</b></label><br>
<input type="text" oninput="inputFunction(this)"><br>
</form>

<p id="demo"></p>
<script>
function inputFunction(element){
// element : is parameter received value to input
let x = element.value;
document.getElementById("demo").innerHTML = x;
}`;
const changeEvent= `<form action="#">
<label for="name"><b>Name :</b></label><br>
<input type="text" onchange="changeFunction(this)"><br>
</form>
<p>When you click another thing then they Happen</p>
<strong>Input Value :</strong>
<p id="demo"></p>
<script>
function changeFunction(element){
// element : is parameter received value to input
let x = element.value;
document.getElementById("demo").innerHTML = x;
}
</script>`;
const domWindow = `
Window Height & Width Methods
01 window.innerWidth    &   window.outerWidth
02 window.innterHeight  &   window.outerHeight

                        Window Open & Close Methods
01 window.open(); & window.close();

02 window.moveTo();   & window.moveBy(); 
03 window.resizeTo(); & window.resizeBy();

                        Scroll Methods
01 window.pageXOffset   &   window.pageYOffset
02 window.scrollX       &   window.scrollY
03 window.scrollTo      &   window.scrollBy


01 window.location 
02 window.history
03 window.navigator
04 frameElement & frames

01 screenX              &   window.screenY
02 window.screenTop     &   window.screenLeft
03 parent
04 screen
05 self
07 top`;
const domWidth= `    <body onresize="myFunc()">
<script>
    function myFunc(){
        // clear the console
        console.clear();
    console.log("Inner Width : "+window.innerWidth);
    console.log("Outer Width : "+window.outerWidth);
    }
</script>`;
const domHeight= `    <body onresize="myFunc()">
<script>
    function myFunc(){
        // clear the console
        console.clear();
    console.log("Inner Height : "+window.innerHeight);
    console.log("Outer Height : "+window.outerHeight);
    }
</script>`;
const windowOpenClose= `window.open("https://technicalhassanali.blogspot.com/p/short-codes.html",
"windowName",
"_blank",
"width=500px,Height=400px,top=200px,left=100px"
);`;
const windowClose= `<button onclick="openWin()">Open Window</button>
<button onclick="closeWin()">Close Window</button>
<script>
let myWindow; //create Global Variable
function openWin() {
  myWindow = window.open(
    "https://technicalhassanali.blogspot.com/p/short-codes.html",
    "windowName",
    "_blank",
    "width=500px,Height=400px,top=200px,left=100px"
  );
}
function closeWin() {
  myWindow.close();
}
</script>`;
const windowMoveToMoveBy= `        <button onclick="openWin()">Open Window</button>
<button onclick="moveWin()">Move Window</button>
<script>
    let myWindow; //create Global Variable
function openWin() {
myWindow = window.open("", "", "width=500px,Height=400px");
myWindow.document.write("New Window");
}
function moveWin() {
myWindow.moveTo(100, 100);
}</script>`;
const windowMoveToMoveBy1= `       <button onclick="openWin()">Open Window</button>
<button onclick="moveWin()">Move Window</button>
<script>
    let myWindow; //create Global Variable
function openWin() {
myWindow = window.open("", "", "width=500px,Height=400px,left=100px,top=200px");
myWindow.document.write("New Window");
}
function moveWin() {
myWindow.moveBy(100, 100);
}</script>`;
const windowresizeToresizeBy= `        <button onclick="openWin()">Open Window</button>
<button onclick="resizeWin()">Resize Window</button>
<script>
    let myWindow; //create Global Variable
function openWin() {
myWindow = window.open("", "", "width=500px,Height=400px,left=100px,top=200px");
myWindow.document.write("New Window");
}
function resizeWin() {
myWindow.resizeTo(700, 700);
}</script>`;
const windowresizeToresizeBy1= `        <button onclick="openWin()">Open Window</button>
<button onclick="resizeWin()">Resize Window</button>
<script>
    let myWindow; //create Global Variable
function openWin() {
myWindow = window.open("", "", "width=500px,Height=400px,left=100px,top=200px");
myWindow.document.write("New Window");
}
function resizeWin() {
myWindow.resizeBy(700, 700);
}</script>`;
const windowresizeToresizeBy2= `        <button onclick="openWin()">Open Window</button>
<button onclick="resizeWin()">Resize Window</button>
<script>
    let myWindow; //create Global Variable
function openWin() {
myWindow = window.open("", "", "width=500px,Height=400px,left=100px,top=200px");
myWindow.document.write("New Window");
}
function resizeWin() {
myWindow.resizeTo(700, 700);
}</script>`;
const windowresizeToresizeBy3= `        <button onclick="openWin()">Open Window</button>
<button onclick="resizeWin()">Resize Window</button>
<script>
    let myWindow; //create Global Variable
function openWin() {
myWindow = window.open("", "", "width=500px,Height=400px,left=100px,top=200px");
myWindow.document.write("New Window");
}
function resizeWin() {
myWindow.resizeBy(700, 700);
}</script>`;
const windowscrollX= `  var x = window.scrollX;`;
const windowscrollY= `  var y = window.scrollY;`;
const windowscrollTo= `window.scrollBy(x-coord, y-coord); 
// window.scrollBy(0,20);`;
const windowscrollBy= `window.scrollBy(x-coord, y-coord);   

                    //Example:
                    //First Take the Dummy Text
<button onclick="scrollWin()" style="position:fixed;bottom:50px;">Click to scroll</button>
<script>
    function scrollWin(){
        window.scrollTo(0,0);
    }
</script>`;
const windowscrollByoutput= `
window.scrollBy({
    top: 100,
    left: 100,
    behavior: 'smooth'
  })`;
const windowLocation= `console.log(location); //rport"eturn object
console.log("host :     " + location.host     );
console.log("hostname : " + location.hostname );
console.log("href :     " + location.href     );
console.log("href :     " + location.href     );
console.log("port :     " + location.port     );
console.log("protocol : " + location.protocol );
console.log("search :   " + location.search   );`;
const LocationObjectMethods= `    <button onclick="locationMethod()">Location Methods</button>
<script type="text/javascript">
    function locationMethod(){
    // location.reload(); 
    // location.assign("https://www.google.com/"); 
    location.replace("https://www.google.com/"); 
}`;
const HistoryAPI= `<script>
function goBack()    { window.history.back();   }
function goForward() { window.history.forward();}
</script>
<input type="button" value="Back" onclick="goBack()">
<input type="button" value="Forward" onclick="goForward()">`;
const windownavigator= `let userAgent = navigator.userAgent;
let browser;
if(userAgent.match(/edg/i)){
    browser = "edge";
}else if(userAgent.match(/firefox|fxios/i)){
    browser = "firefox";
}else if(userAgent.match(/opr/i)){
    browser = "opera";
}else if(userAgent.match(/chrome|chromium|crios/i)){
    browser = "chrome";
}else if(userAgent.match(/safari/i)){
    browser = "safari";
}else{
    alert("Other browser");
}
console.log(browser);`;
const windowbody= `window.body.backgroundColor="green";`;
const windowframeElement= `<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Try it</button>
<script>
  function myFunction() {
    var frame = window.frameElement;

    if (frame) {
      frame.src = "https://www.w3schools.com/";
    }
  }
</script>
</body>
</html>`;
const windowframes= `<!DOCTYPE html>
<html>
<body>
    <button onclick="myFunction()">Try it</button>
    <br><br>
    <iframe src="https://technicalhassanali.blogspot.com/"></iframe>
    <iframe src="https://technicalhassanali.blogspot.com/"></iframe>
    <script>
    function myFunction() {
    window.frames[0].location = "https://www.w3schools.com";
    }
</script>
</body>
</html>`;
const checkLocalStorage= `if (typeof(Storage) !== "undefined") {
    console.log("true");
    } else {
    console.log("false");
}`;
const setItemlocalStorage= `window.localStorage.setItem("key","value");
window.localStorage.seetItem("Name","Hassan Ali");
//same as
let a = window.localStorage;
a.setItem("Name","Hassan Ali");`;
const setItemlocalStorage2= `const name = {
    fname : "Hassan Ali",
    lname : "Khan"
};
let a = JSON.stringify(name); // object convert to string
window.localStorage.setItem("Name",a); //set key and value
let get = window.localStorage.getItem("Name");
let convert = JSON.parse(get); //convert string to obj
console.log(convert);
console.log(convert.fname);`;
const getItemlocalStorage= `
window.localStorage.getItem("Key parameter");
window.localStorage.getItem("Name"); //retrieve Name value
//print value in console
let a = window.localstorage;
let b = a.getItem("Name");
console.log(b);`;
const removeItemlocalStorage= `window.localStorage.removeItem("Key parameter");
window.localStorage.removeItem("Name"); //remove only Name key and value
e.g
let a = window.localStorage;
a.setItem(1,"Name");
let b = a.removeItem(1);
console.log(b);`;
const clearlocalStorage= `let a = window.localStorage;
a.clear();`;
const keylocalStorage= `var KeyName = window.localStorage.key(index);
e.g
let a = window.localStorage;
a.setItem(1,"Name");
let b = a.key(1);
console.log(b);`;
const EnableDarkhtml= `<button id="ali">Dark Mode</button>`;
const EnableDarkcss= `.dark{
    background-color:#444;
    color:white;
}`;
const EnableDarkjs= `// 1. get value from localStorage
let darkmode = localStorage.getItem('darkmode');

//2.get button from click
let btn = document.getElementById('ali');

//3.function enable dark mode arrow function
const enabledark = ()=>{
    document.body.classList.add('dark');
    localStorage.setItem('darkmode','enable');
}

//4.diabled dark mode arrow function
const disabledark = ()=>{
    document.body.classList.remove('dark');
    localStorage.removeItem('darkmode');
}

//5.add event listener for click

btn.addEventListener("click",()=>{
    darkmode = localStorage.getItem('darkmode');
   if(darkmode !== 'enable'){
    enabledark();
   }else{
    disabledark();
   }

});

// If the user already visited and enabled darkMode
// start things off with it on
if (darkmode === 'enable') {
    enabledark();
  }`;
const jsJSON= `let obj = {
    Name : "Hassan Ali",
    FatherName : "Riaz-ul-Hassan",
    Age : 25
  }
  console.log(obj);
      //convert object into string Text
  let convertobjstring = JSON.stringify(obj);
      console.log(convertobjstring);
  // replace the value
  let replaceString = convertobjstring.replace('Hassan Ali','Hassan Ali Khan');
      console.log(replaceString);
  //convert string Text to Object
  let convertstringobj = JSON.parse(replaceString);
      console.log(convertstringobj);`;
const createObject= `const student = {
    Name : "Hassan Ali",
    FatherName : "Riaz-ul-Hassan",
    Age : 18
    }
console.log(student.Name);`;
const ClassObjectCreate= `class calculation{ //class create
    sum(){        //method create
        let a = 10;
        let b = 20;
        console.log(a+b);
    }
}
let a = new calculation();  //Object Create
console.log(a.sum());`;
const typeConstructor= `class student{ //class create
    constructor(){        //Default Constructor create
        console.log("Hello this is default constructor")
    }
}
let a = new student();  //Object Create

                                Example 02

class student{ //class create
    constructor(namePara,agePara){
        this.name = namePara;
        this.age = agePara;
    }
    show(){  //parameterized constructor values
        console.log(&#96;&#36;{this.name} &#36;{this.age}&#96;);
    }
}
let a = new student("Hassan","Ali");  //Object Create
a.show();  //call show method

                                Example 03
function construct(first,last,age,eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
}
let obj = new construct('Hassan','Ali',18,'red');
construct.prototype.nationality = "Pakistan";

//creating name function in the prototype
construct.prototype.name = function(){
    return this.firstName + " " + this.lastName;
}
console.log(obj);`;
const gettersetter= `//creating Object Literal
let student = {
    Name : "Hassan Ali",
    FatherName : "Riaz-ul-Hassan",
    Age : 19,

    //creating function
    namefunction : function(){
        return "This is Name function in Object";
    },
    //creating Method
    nameMethod(){
        return this.Name;
    },
    //creating getter Method
    get getname(){
        return this.Name;
    },
    //creating setter Method
    set setname(namepara){
        return this.Name = namepara;
    }
}
//calling name function in Object
console.log(student.namefunction());
//calling name Method in Object
console.log(student.nameMethod());
//get value through getter Method
console.log(student.getname);
//set value in the setter Method
student.setname = "This is setter Method";
console.log(student);`;
const staticKeywordMethod= `class calculation{ //class create
    static sum(){   //create static Methods
        let a = 10;
        let b = 20;
        console.log(a+b);
    }
}
console.log(calculation.sum());`;
const classInheritance= `class A{
    constructor(){
    console.log("Hello World!");
    }
}
//class derivedClass extends SuperClass
class B extends A{

}
let dervied = new B();

                                Example 02
class A{
    constructor(){
    console.log("Hello World!");
    }
}
//class derivedClass extends SuperClass
class B extends A{
    constructor(){
        super(); // to call the base constructor
        console.log("derived");
    }
}
let dervied = new B();`;
const moduleinJS= `File 01 
export let a = "Hassan Ali";
File 02 
import{a} from './nav.js';
console.log(a);
//Add File in HTMl
<script type="module" src="./nav2.js"></script>
`;
const importVariableFunc = `import{name of variable,class,function} from './exportfilename.js'`;
const importVaribleFuncClass = `import {name,hello,user} from './file1.js'`;
const Promises= `    //Method 01 : You can make the promise Object
var prom = new Promise();
    //Method 02 : You can take the function in promise
var prom = new Promise(function(){ //you can use arrow function
});
    //Method 03 : You can pass also parameter resolve : reject
    // resolve  : if promise work then resolve function call
    // reject   : if promise reject then reject function call
var prom = new Promise(function(resolve,reject){
});
`;
const PromisesSyntax= `let condition = true;
var prom = new Promise(function(resolve,reject){
    if(condition){ //if condition true then call resolve
        resolve("Here is Success Run"); //send string parameter to then
    }else{
        reject("Error in Running");   //send string parameter to catch for error
    }
});

let onfulfilment = (result) => {console.log(result);}
let onRejection  = (error)  => {console.log(error);}

//use Call Back Function
prom.then(onfulfilment);  //run onfulfilment function
prom.catch(onRejection);  //run onRejection function`;
const PromisesExample= `let condition = true;  //run the resolve() if false then rejected() run
let prom = new Promise(function(resolve,reject){
if(condition){
    resolve("I am Successfull Run");
}else{
    reject("Please Check Error");
}
});
console.log(prom);
                                    | Example 02 |
function prom(condition) {
    //insert code in the function
 return new Promise(function (resolve, reject) {
    if (condition) {
      resolve("I am Successfull Run");
    } else {
      reject("Please Check Error");
    }
  });
}
console.log(prom(true));

                                    | Example 03 |

function prom(condition) {
  //insert code in the function
  return new Promise(function (resolve, reject) {
    if (condition) {
      resolve("I am Successfull Run");
    } else {
      reject("Please Check Error");
    }
  });
}
//function
let onfulfilment = (result) => {console.log(result);};
let onRejection  = (error)  => {console.log(error);};

//call back function prom(true) is the parameter pass in function
prom(true).then(onfulfilment);
prom(true).catch(onRejection);

                                    | Example 04 |
function prom(condition) {
  //insert code in the function
  return new Promise(function (resolve, reject) {
      //show message for waiting a user for fetch a data
      console.log("Fetching Data Please Wait");
      //setTimeout() run 1 time then show then message
    setTimeout(()=>{
        if (condition) {
            resolve("I am Successfull Run");
          } else {
            reject("Please Check Error");
          }
    },1000);

  });
}

//Function that take then parameter from then and catch to run
let onfulfilment = (result) => {console.log(result);};
let onRejection = (error) => {console.log(error);};
//call back function prom(true) is the parameter pass in function
//prom(false) parameter check in  resolve() and reject() then reject() run
prom(false).then(onfulfilment).catch(onRejection);

//same as
/*
prom(false).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
*/`;
const fetchdataAJAX= `//html header ajax cdn
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

//javaScript
function prom() {
  return new Promise(function (resolve, reject) {
    console.log("Please wait data is fatching...");

    setTimeout(function () {
        //$.get("url",function(data)); return in AJAX
      $.get("https://jsonplaceholder.typicode.com/posts",function(data){
        console.log(data);
        console.log(data[0]);
        console.log(data[0].id);
        console.log(data[0].title);
      });
    }, 1000);
  });
}

let fullfillFunc = (result)=>console.log(result);
let rejectFunc =   (error)=>console.log(error);
prom().then(fullfillFunc).catch(rejectFunc);`;
const promiseAll= `let condition = true;
let a = new Promise((resolve,reject)=>{
    console.log("Fetch Data of Promise 1");
    setTimeout(()=>{
        if(condition){
            resolve("I am successful")
        }else{
            reject("I am not sucessfull");
        }
    },1000);
});
let b = new Promise((resolve,reject)=>{
    console.log("Fetch Data of Promise 2");
    setTimeout(()=>{
        if(condition){
            resolve("I am successful")
        }else{
            reject("I am not sucessfull");
        }
    },2*1000);
});
let c = new Promise((resolve,reject)=>{
    console.log("Fetch Data of Promise 1");
    setTimeout(()=>{
        if(condition){
            resolve("I am successful")
        }else{
            reject("I am not sucessfull");
        }
    },3*1000);
});
//Promise.all() is pass the array parameter of all Promises
Promise.all([a,b,c]).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});
`;
const XMLHttpRequest = `var xhttp = new XMLHttpRequest();`;
const SendaRequest = `// GET  : Local to Server or Server to Local Data Send But less secure
// POST : Local to Server or Server to Local Data Send But secure
// File : FileName with extension that present in server
// True/False : is the Asyncronous
xhttp.open("GET|POST","filePath/name.txt",true|false);
xhttp.open("GET","FileName.txt",true);
xhttp.send(); // Send the Request`;
const JavaScriptXMLHttpRequest= `//1.create Object
var xhttp = new XMLHttpRequest();

//4.Check Response
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        document.getElementById('demo').innerHTML = this.responseText;
    }
}

//2.Initiate Request
xhttp.open('GET','file.txt',true);
//3.Send Request
xhttp.send();`;
const JavaScriptXMLHttpRequestResponseHTML= `    <p id="demo">This is Text</p>
<button onclick="loadData()">Click</button>
<script>
function loadData(){
//1.create Object
var xhttp = new XMLHttpRequest();

//4.Check Response
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        document.getElementById('demo').innerHTML = this.responseText;
    }
}

//2.Initiate Request
xhttp.open('GET','file.txt',true);
//3.Send Request
xhttp.send();
}
</script>`;
const fetchAPIJS= `//Step 01 : Fetch Return Promise
fetch(file/url);
//Step 02 : Fetch Method pass the data as a response in
fetch(file/url).then();
//Step 03 : then take the parameter from fatch method as response
fetch(file/url).then(function(response)){
    return response.data;
// data : text() or JSON() form return in server
}
//Step 04 :
fetch(file/url).then(function(response)){
    return response.data;
}.then(function(result){   //Resolve Promise
    console.log(result);
}).catch(function(error){  //Error Promise
    console.log(error);
});`;
const fetchAPIExample= `function loadDoc(){
    fetch("test/test.txt")
    .then((response)=>response.text()) //response use for handle fetch response
    .then((data) => console.log(data)) //if response status is ok then data print
    .catch((error)=>console.log(error));// if response status error then catch display
  }
  //JSON Data
  function loadDoc(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data) => console.log(data))
    .catch((error)=>console.log(error));
  }`;
const CheckBrowserSupportFetch= `if(window.fetch){
    console.log("Your Browser Support");
  }else{
    console.log("Sorry,Your Browser Not Support");
  }`;
const fetchInsertUpdatDelete= `fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', | "PUT", | "DELETE", | "GET",
    body: data, --> Form Data/JSON Data / Text
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data)).catch((error) => console.log(error));`;
const fakeDataFill= `function loadDoc(){
    const a = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(a),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data)).catch((error) => console.log(error));
  }`;
const FakeDataSendusingForm= `<form action="#" id="myform">
<label for="#">Title</label>     <br><input type="text" id="title" > <br>
<label for="#">Body</label>      <br><input type="text" id="body"  > <br>
<label for="#">User ID</label>   <br><input type="text" id="userId"> <br><br>
<button type="submit" id="submitform" value="Submit">Submit Form Button </button>
</form>

<script>
let submitbtn = document.getElementById("submitform");
submitbtn.addEventListener('click',function(e){
  // Prevent to Refresh Page b/w when we click on button the page should refresh
  e.preventDefault(); //prevent to refresh page
  const a = {
    title:  document.getElementById("title") .value,
    body:   document.getElementById("body")  .value,
    userId: document.getElementById("userId").value,
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(a),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data)).catch((error) => console.log(error));
});
</script>`;
const FakeDataSendusingForm1= `<form action="#" id="myform">
<label for="#">Title</label>     <br><input type="text" id="title" > <br>
<label for="#">Body</label>      <br><input type="text" id="body"  > <br>
<label for="#">User ID</label>   <br><input type="text" id="userId"> <br><br>
<button type="submit" id="submitform" value="Submit">Submit Form Button </button>
</form>

<script>
let submitbtn = document.getElementById("submitform");
submitbtn.addEventListener('click',function(e){
  e.preventDefault(); //prevent to refresh page

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body:  new FormData(document.getElementById(myform)),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data)).catch((error) => console.log(error));
});
</script>`;
const JavaScriptAsync= `async function myFunction() {
    return "Hello";
    }
  
    myFunction().then(
      function(value) {console.log(value);},
      function(error) {console.log(error);}
    );`;
const JavaScriptawait= `async function test(){
    console.log("2 : Message");
await console.log("3 : Message");
    console.log("4 : Message");
}
console.log("1 : Message");
test();
console.log("5 : Message");
_______________________________________________________________________

async function test(){
   let response = await fetch("json/student-record.json");
   let b = await response.json();
   return b;
}
test().then((data)=>{
   console.log(data);
}).catch((error)=>{
  console.log(error);
});
_______________________________________________________________________
async function test(){
  return (await fetch("json/student-record.json")).json();
}
test().then((data)=>{
  console.log(data);
}).catch((error)=>{
 console.log(error);
});
_______________________________________________________________________
async function test(){
   try{
  let response = await (await fetch("json/student-record.json")).json();
   return response;
   }catch(error){
       console.log(error);
   }
}
test().then((data)=>{
   console.log(data);
});
`;
const UploadImagePreviewhtml = `<div>
<label for="">Upload Image : </label>
<input type="file" name="upload_File" id="UploadImage" accept="image">
</div>
<div>   <img id="PreviewImage"> </div>`;
const UploadImagePreviewjs= `    let UploadImage = document.getElementById('UploadImage');
let PreviewImage = document.getElementById('PreviewImage');
UploadImage.addEventListener('change', function (event) {
    //check file is upload or not
    if (event.target.files.length == 0) {
        return;
    } else {
        var url = URL.createObjectURL(event.target.files[0]);
        // console.log(url);
        PreviewImage.setAttribute('src', url);
        PreviewImage.setAttribute('style', 'width:400px;height:400px;');
    }
});`;
const UploadImagePreviewMethod02= `     let UploadImage = document.getElementById('UploadImage');
let PreviewImage = document.getElementById('PreviewImage');
UploadImage.addEventListener('change', function (e) {
let url = URL.createObjectURL(e.target.files[0]);
PreviewImage.setAttribute('src',url);
PreviewImage.setAttribute('style','width:200px;height:200px;');
});`;



const Content = [  
    {
        "name": `Script Tag (<code className="markcode">&lt;script&gt;</code> &amp; 
        <code className="markcode">&lt;/script&gt;</code>)`,
        "link": "#script"
    },
    {
        "name": ` Datatype in JavaScript(<code className="markcode">string</code> &amp; 
        <code className="markcode">boolean</code> &amp;
        <code className="markcode">null</code> &amp;
        <code className="markcode">undefined</code> &amp;
        <code className="markcode">symbol</code>)`,
        "link": "#datatype"
    },
    {
        "name": ` Variables (<code className="markcode">let</code> &amp; 
        <code className="markcode">var</code> &amp;
        <code className="markcode">const</code> )`,
        "link": "#variables"
    },
    {
        "name": "Template String | Template Literals",
        "link": "#literals"
    },
    {
        "name": "Hoisting",
        "link": "#hoisting"
    },
    {
        "name": `Error Handling(<code className="markcode">try</code> &amp; 
        <code className="markcode">catch</code>)`,
        "link": "#errorhandling"
    },
    {
        "name": `JavaScript Type Conversion (<code className="markcode">string()</code> &amp; 
        <code className="markcode">Number()</code> &amp;
        <code className="markcode">parseInt()</code> &amp;
        <code className="markcode">typeOf()</code> &amp;
        <code className="markcode">toFixed</code>)`,
        "link": "#typeconversion"
    },
    {
        "name": "Functions &nbsp; (1) Arrow Function &nbsp; (2) Callback Function",
        "link": "#functions"
    },
    {
        "name": "Local &amp; Global Variables",
        "link": "#local&global"
    },
    {
        "name": ` Conditional Statements(<code className="markcode">if</code> &amp; 
        <code className="markcode">else</code> &amp;
        <code className="markcode">else-if</code> &amp;
        <code className="markcode">switch</code>)`,
        "link": "#callbackfunc"
    },
    {
        "name": `Iterative Statements (Loops)
        (<code className="markcode">for</code> &amp; 
        <code className="markcode">for/in</code> &amp;
        <code className="markcode">for/of</code> &amp;
        <code className="markcode">while</code> &amp;
        <code className="markcode">do while</code> )`,
        "link": "#loops"
    },
    {
        "name": "Array &amp; Types of Array",
        "link": "#array"
    },
    {
        "name": "JavaScript Arrays Programs",
        "link": "#arraymethod"
    },
    {
        "name": "List of All Array Methods",
        "link": "#arraymethod"
    },
    {
        "name": "JavaScript Arrays Programs",
        "link": "#arrayprogram"
    },
    {
        "name": "Object",
        "link": "#object"
    },
    {
        "name": "JavaScript Array of Object",
        "link": "#arrayobject"
    },
    {
        "name": "Destructuring | Array &amp; Object",
        "link": "#destructuring"
    },
    {
        "name": "String Methods",
        "link": "#stringmethods"
    },
    {
        "name": "Number Methods",
        "link": "#numbermethods"
    },
    {
        "name": "Math Method",
        "link": "#jsMath"
    },
    {
        "name": "DOM Document",
        "link": "#domdocument"
    },
    {
        "name": "Fetch All Links in Document",
        "link": "#fetchLinks"
    },
    {
        "name": "Editable Div",
        "link": "#editable"
    },
    {
        "name": "Alter &amp; Confirm &amp; Prompt Box",
        "link": " #alert"
    },
    {
        "name": "DOM Attribute & Children",
        "link": "#domattributes"
    },
    {
        "name": "DOM HTML",
        "link": "#domhtml"
    },
    {
        "name": `addEventListener() Method`,
        "link": " #addEventListener"
    },
    {
        "name": "DOM Events",
        "link": "#domevents"
    },
    {
        "name": ` Timing Events
        (<code className="markcode">setTimeout()</code> &amp; 
        <code className="markcode">clearTimeout()</code> &amp;
        <code className="markcode">setInterval()</code> &amp;
        <code className="markcode">clearInterval()</code> &amp;
        <code className="markcode">stop()</code> )`,
        "link": "#timeEvent"
    },
    {
        "name": "DOM CSS",
        "link": "#domcss"
    },
    {
        "name": "JavaScript Date and Time get + set Method",
        "link": "#dateandtime"
    },
    {
        "name": "Nodes",
        "link": "#nodes"
    },
    {
        "name": "DOM Create Method | Create Element",
        "link": "#createElement"
    },
    {
        "name": "DOM Append Methods",
        "link": "#appendmethod"
    },
    {
        "name": "JavaScript Form Events",
        "link": "#formevents"
    },
    {
        "name": "BOM(Browser Object Model) &amp; DOM Window",
        "link": "#bom"
    },
    {
        "name": "Window Scroll Events",
        "link": "#scroll"
    },
    {
        "name": "Location Object",
        "link": "#location"
    },
    {
        "name": "History Object",
        "link": "#history"
    },
    {
        "name": "Navigator",
        "link": "#navigator"
    },
    {
        "name": "Local Storage & Session Storage in JavaScript",
        "link": "#storage"
    },
    {
        "name": "JavaScript JSON",
        "link": "#JSON"
    },
    {
        "name": "Object Oriented Programming in JavaScript | OOP",
        "link": "#oop"
    },
    {
        "name": "Modules in JavaScript",
        "link": "#modules"
    },
    {
        "name": "Promises",
        "link": "#promises"
    },
    {
        "name": "JavaScript AJAX",
        "link": "#ajax"
    },
    {
        "name": "JavaScript Fetch API",
        "link": "#fetch-api"
    },
    {
        "name": "JavaScript Async & await",
        "link": "#async-await"
    },
    {
        "name": "load Image Preview in JavaScript ",
        "link": "#uploadimg"
    }
]

export default function JavaScript() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }, []);
    return (
        <>
<TopLoadingBar />
{/* {loading ? <Spinner /> : (<div> */}
{(<div>
    <br></br>
    <br></br>
    <br></br> 
    <div className="contentListBox">
        <div className="box-header">
            Content List
        </div>
        <ul className="list">
            {
                Content.map((element, index) => {
                    return (<ContentList key={index} data={element}  />)
                })
            }

        </ul>
    </div>

    <div className="container">
        <div className="heading2">
            <h3>JavaScript</h3>
        </div>
        <p>JavaScript is used in three way</p>
        <ol>
            <li><mark>Use in head Tag</mark></li>
            <li><mark>Use in Body Tag</mark> the <mark>script</mark>Tag.</li>
            <li><mark>Use External File name .js File</mark> </li><br />
        </ol>
        <CodeHighlight code={javascriptCode} language="javascript" />
        <span className="marku">Print Page Code:</span>

        <CodeHighlight code={jsScript} language="javascript" />

        <br />
        <div className="heading2">
            <h3>JavaScript in Google Console</h3>
        </div>
        <br />
        <span className="marku">Shortcut Key: </span>
        <p><code className="markcode">control+shift+i</code> and Rightl click on the Page and click on
            <mark>inspect</mark>. You can See all in the <mark>Console</mark> Section.
        </p>
        <CodeHighlight code={jsconsole} language="javascript" />

        <h1 className="heading1">JavaScript Introduction</h1>
        <div className="heading2" id="script">
            <h3>&lt;script&gt; Tag</h3>
        </div>
        <p><code className="markcode">&lt;script&gt;</code> tag is used to define client side script in define web pages. <br />
            <strong>For Example:</strong>, Through the <code className="markcode">&lt;script&gt;</code> tag, you can add JavaScript to your HTML document.</p>
        <p><strong>Attributes:</strong></p>
        <ol>
            <li>src</li>
            <li>type  <code className="markcode">type=&quot;text/javascript&quot;</code></li>
            <li>async</li>
            <li>defer</li>
        </ol>

        <div className="heading2">
            <h3><code className="markcode">type=&quot;text/javascript&quot;</code> On Page Script</h3>
        </div>
        <p>Adding internal JavaScript to HTML.You can add the <code className="markcode">&lt;script&gt;</code> in the <code className="markcode">&lt;head&gt;</code> Tag or End of the <code className="markcode">&lt;body&gt;</code> tag.</p>
        <CodeHighlight code={onPageScript} language="javascript" />
        <div className="heading2">
            <h3><code className="markcode">defer/async=&quot;true/false&quot;</code>  External JS File </h3>
        </div>
        <p>In the External JavaScript we used the <code className="markcode">src="filename.js"</code> Tag.Adding external JavaScript to HTML</p>
        <CodeHighlight code={externalScript} language="javascript" />

        <p><code className="markcode">defer=&quot;true&quot;</code>
            The Script is run in the last of,when the webpage parse complete.</p>
        <CodeHighlight code={deferScript} language="javascript" />

        <div className="heading2" id="datatype">
            <h3>Data Types in JavaScript</h3>
        </div>
        <p>Two types of JavaScript Data type.</p>
        <ol>
            <li>Primitive Data Type</li>
            <li>Non-Primitive Data Type or Reference Data Type</li>
        </ol>
        <div className="heading2">
            <h3>Primitive Type</h3>
        </div>
        <p>Primitive data types are numbers, Booleans, strings, undefined, null, and symbol.
            Primitive data types are the basic or common data types in JavaScript.
            Following is the table of primitive data types in JavaScript. </p>
        <br />
        <pre className="output">
            string <br></br>
            Number <br></br>
            boolean     true / false <br></br>
            null
            undefined   (if you not assign the value then default show) <br></br>
            symbol      (new come in ES6) <br></br>
        </pre>
        <div className="heading2">
            <h3>Non-Primitive Type or Reference Type</h3>
        </div>
        <p>Reference in JavaScript are datatypes based on primitive.
            Like Objects, Arrays, and Functions. Everything is JavaScript is either
            an Object or Primitive datatype. When we create an object, that value is
            not directly assigned to the variable. Instead, a reference to that value
            is what gets set. Variable knows about the location of the object in memory,
            not the object itself.
            Following is the table of the reference data type.</p>
        <br />
        <pre className="output">
            Arrays <br></br>
            Object Literals <br></br>
            Functions <br></br>
            Dates <br></br>
        </pre>

        <br />
        <p><code className="markcode">NaN </code> mean Not a Number</p>
        <p><code className="markcode">null </code> return Zero 0.</p>
        <p><code className="markcode">true and false </code> return 1 and 0.</p>
        <br />
        <span className="outputh">Example of Primitive Data Type and Reference Data Type</span>
        <CodeHighlight code={nonePrimitive} language="javascript" />


        <div className="heading2" id="variables">
            <h3>JavaScript Variables</h3>
        </div>
        <p>Three types of JavaScript is variables are used.</p>
        <ol>
            <li><code className="markcode">var</code>:<br /> is used when a variable a declare then you can decalare same
                name in the javascript is used <mark>var</mark>.Most of the Programming Langauge not allow to declare
                those variable that have already declare at same name.<br />
            </li>
            <CodeHighlight code={varVariables} language="javascript" />

            <li><code className="markcode">let :</code><br /> is used when a variable declare at once they not declare at
                same name they show error.But in the <mark>var</mark> you can declare variable at same name many
                time.</li>
            <br />
            <CodeHighlight code={letVariables} language="javascript" />


            <li><code className="markcode">const :</code> <br /> is used when the variable is declare with
                <mark>const</mark> data_type then they are not declare at second time. and you can not assign the value
                of variables(simple not value override), the reason is that variable is <mark>const</mark> and constant
                variable when declare there value not change when the value are assign.
            </li>
            <br />
            <CodeHighlight code={constVariables} language="javascript" />


        </ol>

        <div className="heading2" id="literals">
            <h3>Template String | Template Literals </h3>
        </div>

        <img src="../images/templatestring.png" alt="Template String or Template Literals" />


        <h5 className="heading1" id="hoisting">Hoisting</h5>
        <p>In JavaScript, a variable can be declared after it has been used.In other words; a variable can be used
            before it has been declared.</p>
        <CodeHighlight code={hoisting} language="javascript" />



        <h5 className="heading1">"use strict";</h5>
        <p><code className="markcode">"use strict";</code>You can use strict mode in all your programs.
            It helps you to write cleaner code, like preventing you from using undeclared variables.<br />
            In JavaScript You are not declare variable the variable work,then if use the use strict then
            they not work without declare the variable with let,var,const.</p>

        <CodeHighlight code={useStrictMode} language="javascript" />



        <div className="heading2" id="typeconversion">
            <h3> JavaScript Type Conversion &amp; Coercion</h3>
        </div>
        <p>When we convert one data type to another data type, this process is called type conversion. <br />
            In JavaScript, there are two types of type conversion.</p>
        <ul>
            <li>Explicit Conversion</li>
            <li>Implicit Conversion</li>
        </ul>
        <div className="Short-head">
            <h3> Explicit Conversion </h3>
        </div>
        <p>In JavaScript, explicit type conversions are done using the built-in methods like String (), Number(), etc.
        </p>
        <div className="Short-head">
            <h3> Implicit Conversion </h3>
        </div>
        <p>Sometimes JavaScript automatically converts one data type to another. This type of conversion is known as
            implicit conversion.</p>
        <br />
        <p><code className="markcode">String()</code> is used to convert to variable into String. You simply pass the value
            in the parenthesis.</p>
        <p><code className="markcode">Number()</code> is used to convert the String into Number.You simply pass the String
            value into brackets.</p>
        <p><code className="markcode">parseInt()</code> is used to convert the String into Integer.You simply pass the
            String value.</p>
        <p><code className="markcode">parseFloat()</code> is used to convert the Float value.Simply pass the String of Float
            value.</p>
        <p><code className="markcode">typeof()</code> is used check the type of the variable data type.</p>
        <p><code className="markcode">toFixed()</code> is used to define the size how much number are the show after decimal
            mean full stop.</p>
        <p><strong>Example of Above Properties :</strong></p>
        <CodeHighlight code={typeConversion} language="javascript" />



        <h5 className="heading1" id="functions">JavaScript Functions</h5>
        <div className="heading2">
            <h3> JavaScript Simple Functions</h3>
        </div>
        <p>Different Method is used to create the function in JavaScript.Their Syntax is given blow;</p>

        <CodeHighlight code={simpleFunction} language="javascript" />



        <div className="heading2" id="arrowfunc">
            <h3> JavaScript Arrow Function</h3>
        </div>
        <p>JavaScript Arrow Function is publish on the ES6 version of Advance JavaScript.<br />
            In Method 2 You can see that we remove the parenthesis becuse the code in one line.The
            Arrow Function allow this functionality if your code is one line then you can remove the { }
            parenthesis but it is not compulsory it depend on you.<br />
            You can pass the parameter on the () brackets like pass in the simple function.
            Their Syntax is given blow;</p>
        <CodeHighlight code={arrowFunction} language="javascript" />

        <div className="heading2" id="callbackfunc">
            <h3> JavaScript CallBack Function</h3>
        </div>
        <p>Any Function that is passed as an argument is called a callback function.<br />
            A callback is a function that is to be executed after another function has finished executing -Hence
            the name callBack.</p>
        <div className="success size">
            <p><strong>Note:</strong> A callback is a function passed as an argument to another function.</p>
        </div>
        <CodeHighlight code={callBackFunction} language="javascript" />


        <div className="heading2">
            <h3> Why CallBack Function Used?</h3>
        </div>
        <p>JavaScript is an Event Driven Language.This means that instead of waiting for
            a response before moving on,JavaScript will keep executing while listening for other events.
        </p>


        <div className="heading2" id="local&amp;global">
            <h3>Variables in JS</h3>
        </div>
        <p>Two types of variables declare in js:</p>
        
            <ul>
                <li>Local Variable</li>
                <li>Global Variable</li>
            </ul>

        <div className="Short-head">
            <h3> Global Variables</h3>
        </div>
        <p> Global Variable are defiend anywhere in the javascript code.It can be used anywhere in the code.But if you
            define the variable in the function then those variable are not a Global varible.</p>
        <div className="Short-head">
            <h3> Local Variables</h3>
        </div>
        <p>Local Variable are those variables whoes only defined in function and access in Function.
        </p>
        <ul>
            <li>JavaScript variable names are case-sensitive. <br />
                <mark>For Example</mark>, Name and name are two different
                variables.
            </li>
            <li>JavaScript variable names should not start with a <mark>numeral (0-9)</mark>. They must begin with a
                letter or an underscore character. For example, 123 test is an invalid variable name but _123test is a
                valid one.</li>
        </ul>
        <CodeHighlight code={localandGlogbal} language="javascript" />

        <p>You should not use any of the JavaScript reserved keywords as a variable name. These
            keywords are mentioned in blow section. For example, break or boolean variable names are not valid</p>
        <table className="table-design" style={{width:"100%",fontSize:"19px "}}>
            <tbody>
                <tr>
                    <td>abstract</td>
                    <td>else</td>
                    <td>instance of</td>
                    <td>switch</td>
                </tr>
                <tr>
                    <td>boolean</td>
                    <td>enum</td>
                    <td>int</td>
                    <td>synchronized</td>
                </tr>
                <tr>
                    <td>break</td>
                    <td>export</td>
                    <td>interface</td>
                    <td>this</td>
                </tr>
                <tr>
                    <td>byte</td>
                    <td>extends</td>
                    <td>long</td>
                    <td>throw</td>
                </tr>
                <tr>
                    <td>catch</td>
                    <td>final</td>
                    <td>new</td>
                    <td>transient</td>
                </tr>
                <tr>
                    <td>char</td>
                    <td>finally</td>
                    <td>null</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>class</td>
                    <td>float</td>
                    <td>package</td>
                    <td>try</td>
                </tr>
                <tr>
                    <td>const</td>
                    <td>for</td>
                    <td>private</td>
                    <td>typeof</td>
                </tr>
                <tr>
                    <td>continue</td>
                    <td>function</td>
                    <td>protected</td>
                    <td>var</td>
                </tr>
                <tr>
                    <td>debugger</td>
                    <td>goto</td>
                    <td>public</td>
                    <td>void</td>
                </tr>
                <tr>
                    <td>default</td>
                    <td>if</td>
                    <td>return</td>
                    <td>volatile</td>
                </tr>
                <tr>
                    <td>delete</td>
                    <td>implements</td>
                    <td>short</td>
                    <td>while</td>
                </tr>
                <tr>
                    <td>do</td>
                    <td>import</td>
                    <td>static</td>
                    <td>with</td>
                </tr>
                <tr>
                    <td>double</td>
                    <td>in</td>
                    <td>super</td>
                    <td></td>
                </tr>
            </tbody>
        </table>


        <div className="heading2">
            <h3> Conditional Statements</h3>
        </div>
        <p>Conditional statements are used to perform operations based on some conditions.</p>
        <div className="success size">
            <p><strong>Note:</strong> if,else,else-if,switch</p>
        </div>
        <div className="heading2">
            <h3> If Statement</h3>
        </div>
        <p>The block of code to be executed, when the condition specified is true.</p>
        <CodeHighlight code={ifStatement} language="javascript" />

        <div className="heading2">
            <h3> If-else Statement | Control Flow Statement</h3>
        </div>
        <p>If the condition for the if block is false, then the else block will be executed.</p>
        <CodeHighlight code={ifElseStatement} language="javascript" />

        <div className="heading2">
            <h3> Else-if Statement</h3>
        </div>
        <p>A basic if-else ladder</p>
        <CodeHighlight code={elseIfElse} language="javascript" />


        <div className="heading2">
            <h3> Switch Statement</h3>
        </div>
        <p>Switch case statement in JavaScript</p>
        <CodeHighlight code={switchStatement} language="javascript" />

        <div className="heading2">
            <h3> Conditional Operator | ternary operator ?</h3>
        </div>
        <p>It allows us to replace simple if statements with a single line expression. Increases code readability by
            reducing number of lines of code.</p>
        <CodeHighlight code={conditionalOperator} language="javascript" />

        <div className="heading2">
            <h3> Spread Operator | Rest Operator </h3>
        </div>
        <p>Spread Operator is Show as three dot<code className="markcode">...arr</code> and it is used
            for the iterable array. </p>
        <CodeHighlight code={spreadOperator} language="javascript" />

        <h5 className="heading1" id="loops">Iterative Statements (Loops)</h5>
        <p>Iterative statement facilitates programmer to execute any block of code lines repeatedly and can be controlled as per conditions added by the programmer.</p>

        <div className="heading2">
            <h3> For Loop</h3>
        </div>
        <p>For loop syntax in javascript</p>
        <CodeHighlight code={forLoop} language="javascript" />

                    <div className="heading2">
                        <h3>For/in Loops </h3>
                    </div>
                    <p><code className="markcode">for/in</code> loop is used to print the properties of the object.This Loop
                        is run for all object Properties.It is very useful then other loops.</p>
                    <p><code className="markcode">key</code> mean the properties of the object.You can print the properties of the
                        object in console by pass the key only.</p>
                    <CodeHighlight code={forInLoop} language="javascript" />

                    <div className="heading2">
                        <h3> For/of Loops </h3>
                    </div>
                    <p><code className="markcode">for/of</code> is used to print the all item in the array( loops through the values of
                        an iterable object).</p>
                    <CodeHighlight code={forOffLoop} language="javascript" />

                    <div className="heading2">
                        <h3> While Loop</h3>
                    </div>
                    <p>Runs the code till the specified condition is true</p>
                    <CodeHighlight code={whileLoop} language="javascript" />


                    <div className="heading2">
                        <h3> Do While Loop</h3>
                    </div>
                    <p>A do while loop is executed at least once despite the condition being true or false</p>
                    <CodeHighlight code={doWhileLoop} language="javascript" />

                    <h5 className="heading1" id="errorhandling"> JavaScript Errors Handling</h5>
                    <p>Errors are thrown by the compiler or interpreter whenever they find any fault in the code, and it can be of
                        any type like syntax error, run-time error, logical error, etc. JS provides some functions to handle the
                        errors.</p>
                    <div className="heading2">
                        <h3>try and catch</h3>
                    </div>
                    <p>Try the code block and execute catch when err is thrown</p>
                    <CodeHighlight code={tryCatch} language="javascript" />

                    <div className="heading2" id="array">
                        <h3>Array</h3>
                    </div>
                    <p>Arrays are used when there is a need to use many variables of the same type.</p>
                    <p><strong>Types of Array</strong></p>
                    <ul>
                        <li>Single Dimensional</li>
                        <li>Multidimensional Array</li>
                    </ul>
                    <div className="heading2">
                        <h3> How to Create Array?</h3>
                    </div>
                    <p>JavaScript Array Creating Methods:</p>
                    <CodeHighlight code={createArray} language="javascript" />

                    <div className="heading2">
                        <h3> How to Delete &amp; Modify Array?</h3>
                    </div>
                    <p>In javaScript when you give the other value in index then value should be updated on the
                        Array and if you can delete the element in the array then simply type delete and pass the index of the
                        array.</p>
                    <CodeHighlight code={deleteModifyArray} language="javascript" />

                    <div className="heading2">
                        <h3> Create Multidimensional Array</h3>
                    </div>
                    <p>A multidimensional array is an array that contains another array. <br />
                        <strong>For Example :</strong> An Array contain another array within it.
                        <button type="button"><a href="https://www.youtube.com/watch?v=9wKRqGk55qg" target="_blank" title="">See Video</a></button>
                    </p>
                    <CodeHighlight code={createMultidimenstionalArray} language="javascript" />
                    <br />
                    <h5 className="outputh">Example :</h5>

                    <CodeHighlight code={createMultidimenstionalArrayexam} language="javascript" />


                    <div className="heading2" id="arraymethod">
                        <h3>List of All Array Methods</h3>
                    </div>
                    <CodeHighlight code={<InnerHTML string={allArrayMethods}/>} language="javascript" />


                    <div className="heading2">
                        <h3> Array.prototype.sort();</h3>
                    </div>
                    <ul>
                        <li><code className="markcode">sort() </code> method sorts an array alphabetically.</li>
                        <li><code className="markcode">sort() </code> method sorts the elements of an array in place and returns the sorted array.</li>
                        <li>Default sort order is Ascending.</li>
                        <li>The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.</li>
                    </ul>
                    <h5 className="outputh">Example :</h5>
                    <CodeHighlight code={arraySort} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output">Method 01 : Array ["Dec", "Feb", "Jan", "March"] <br></br>
                        Method 02 :[1, 2, 3, 4, 5]</pre>
                    <br />

                    <div className="heading2">
                        <h3> Array.prototype.reverse();</h3>
                    </div>
                    <p>The <code className="markcode">reverse()</code> method is used to reverse the array.</p>
                    <CodeHighlight code={arrayReverse} language="javascript" />


                    <div className="heading2">
                        <h3> Array.prototype.concat();</h3>
                    </div>
                    <p>The <code className="markcode">concat()</code> method is used to merge two or more arrays. This
                        method does not change the existing arrays, but instead returns a new array.</p>
                    <pre className="syntax">    concat()<br></br>
                        concat(value0)<br></br>
                        concat(value0, value1)<br></br>
                        concat(value0, value1, ... , valueN)<br></br> </pre>
                    <CodeHighlight code={arrayConcat} language="javascript" />


                    <div className="heading2">
                        <h3> Array.prototype.join();</h3>
                    </div>
                    <p>The <code className="markcode">isArray()</code> method creates and returns a new string by
                        concatenating all of the elements in an array (or an array-like object), separated by commas or a specified
                        separator string. If the array has only one item, then that item will be returned without using the
                        separator.</p>

                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax">join()<br></br>
                        join(separator) <br></br>
                    </pre><br />

                    <CodeHighlight code={arrayJoin} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output">
                        Method 01 : Hassan Ali Khan Balouch <br></br>
                        Method 02 : Hassan-Ali-Khan-Balouch <br></br>
                        Method 03 : Hassan,Ali,Khan,Balouch <br></br>
                        Method 04 : Hassan</pre>
                    <br />


                    <div className="heading2">
                        <h3>Array.prototype.pop();</h3>
                    </div>

                    <ul>
                        <li><code className="markcode">pop()</code> method removes the last element from an array.</li>
                        <li>This method changes the length of the array, b/c end value is remove.</li>
                    </ul>

                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax"> array.pop();</pre><br />

                    <CodeHighlight code={arrayPop} language="javascript" />

                    <div className="heading2">
                        <h3> Array.prototype.push();</h3>
                    </div>
                    <ul>
                        <li><code className="markcode">push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</li>
                        <li>They add the new value in the last of the array.</li>
                    </ul>
                    <CodeHighlight code={arrayPush} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output">Array ["pigs", "goats", "sheep", "cows"];</pre>
                    <br />


                    <div className="heading2">
                        <h3> Array.prototype.shift();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">shift()</code> method removes/delete the first element from an array and returns that removed element.</li>
                        <li>This method changes the length of the array.</li>
                    </ul>
                    <CodeHighlight code={arrayShift} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output"> Array [2, 3]
                        1</pre>

                    <div className="heading2">
                        <h3>Array.prototype.unshift();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">unshift()</code> method adds one or more elements to the beginning of an array and returns the new length of the array.</li>
                        <li>This method is working same as the push(), but they add value in the first in array and push add value in the last of array.</li>
                        <li>You can add multiple values in array at same time,by add the comma between new value.</li>
                    </ul>
                    <h5 className="outputh">Syntax :</h5>
                    <pre className="output"> unshift(element0) <br></br>
                        unshift(element0, element1) <br></br>
                        unshift(element0, element1, ... , elementN) <br></br>
                    </pre>
                    <CodeHighlight code={arrayUnshift} language="javascript" />
                    <h5 className="outputh">Output :</h5>
                    <pre className="output">  [4, 5, 1, 2, 3]</pre>
                    <br />

                    <div className="heading2">
                        <h3> Array.prototype.slice();</h3>
                    </div>
                    <ul>
                        <li><code className="markcode">slice()</code> method returns selected elements in an array, and return the new array.</li>
                        <li><code className="markcode">slice()</code> method does not change the original array.</li>
                        <li>It take two parameter,first <b>start_index</b>,and second <b>end_index</b>.</li>
                        <li>Start index with 0 and end number it cann't print in the value.</li>
                        <li>end_no value is Optional.if you not give then they select all other element of array,from you given start index.</li>
                        <li>If you give negative value then they start index from right-to-left,and index no start with -1,rather then 0.</li>
                    </ul>
                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax"> array.slice(start_no,end_no);</pre><br />
                    <h5 className="outputh">Output :</h5>
                    <CodeHighlight code={arraySlice} language="javascript" />



                    <div className="heading2">
                        <h3> Array.prototype.splice();</h3>
                    </div>
                    <p>The <code className="markcode">splice()</code> method changes the contents of an array by
                        removing or replacing existing elements and/or adding new elements in place. To access part of an array
                        without modifying it.</p>
                    <ul>
                        <li><strong>Start:</strong> where you start to add the new value.</li>
                        <li><strong>deleteCount:</strong> parameter is <b>Optional</b>.if you set value is <b>0</b> then given element of array is move to next location.</li>
                    </ul>
                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax">
                        splice(start) <br></br>
                        splice(start, deleteCount) <br></br>
                        splice(start, deleteCount, item1) <br></br>
                        splice(start, deleteCount, new_value, item2, itemN) <br></br>
                    </pre><br />

                    <CodeHighlight code={arraySplice} language="javascript" />

                    <div className="heading2">
                        <h3> Array.prototype.isArray( )</h3>
                    </div>
                    <p>The <code className="markcode">isArray()</code> method determines whether the passed value is an Array .</p>

                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax">Array.isArray(Pass the Array)</pre>
                    <CodeHighlight code={isArrayCode} language="javascript" />

                    <div className="heading2">
                        <h3> Array.prototype.indexOf();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">indexOf()</code>method returns the first index at which a given element can be found in the array</li>
                        <li>If Search value not found then they return -1.</li>
                        <li>Second Parameter is Optional or you can pass the index where they start searching the value.</li>
                        <li>Start Index of searching is 0.</li>
                    </ul>

                    <h5 className="outputh">Syntax :</h5>
                    <p>item is the add the search item to find the search item and start is the add the start index where start from searching.</p>
                    <pre className="syntax"> array.indexOf(item, start)</pre>
                    <CodeHighlight code={arrayIndexOf} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output"> 1</pre> <br />


                    <div className="heading2">
                        <h3> Array.prototype.lastIndexOf( )</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">lastIndexOf()</code> method returns the last index at which a given element can be found in the array</li>
                        <li>Return -1 if it is not present.</li>
                        <li>The array is searched backwards, starting at from Index. means in right side first occurance they return.</li>
                        <li>They working same as IndexOf().</li>
                    </ul>
                    <p>, or  </p>

                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax">Array.lastIndexOf();</pre><br />
                    <p></p>
                    <CodeHighlight code={arrayLastIndexOf} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output"> 5</pre>
                    <br />

                    <div className="heading2">
                        <h3> Array.prototype.find();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">find()</code> method <b>returns the value</b> of the first element in the provided array that satisfies the provided testing function.</li>
                        <li>It cann't return all the number is follow the condition, and stop after find the first number whoes follow the conditions.</li>
                    </ul>
                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax"> array.find();</pre>
                    <CodeHighlight code={arrayFind} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output">23</pre>
                    <br />

                    <div className="heading2">
                        <h3> Array.prototype.findIndex();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">findIndex()</code> method <b>returns the index</b> of the first element in the array that satisfies the provided testing function.</li>
                        <li>Otherwise, it returns -1, indicating that no element passed the test.</li>
                        <li>They work same as find() but find() return the value, and findIndex() return the index of value those who satisfied condition first.</li>
                    </ul>
                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax"> array.findIndex();</pre><br />
                    <p>In blow example you can see the age array. findIndex() check the array find the number
                        location of the find the index of the number.</p>
                    <CodeHighlight code={arrayFindIndex} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output"> 2</pre>
                    <br />

                    <div className="heading2">
                        <h3> Array.prototype.includes();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">includes()</code>method determines whether an array contain the value that search and returning true or false.</li>
                        <li>They working perfact with alpha numeric,alphabatic,number.</li>
                        <li>They search all type of value from array.</li>
                    </ul>

                    <h5 className="outputh">Syntax :</h5>
                    <p><b>Search Value</b> is the search element enter and start is the Start from searching the element.</p>
                    <pre className="syntax"> includes(Search Value)
                        array.includes(Search Value, Start Index-Optional);</pre><br />
                    <CodeHighlight code={arrayInclude} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output"> true</pre>
                    <br />


                    <div className="heading2">
                        <h3> Array.prototype.some();</h3>
                    </div>
                    <ul>
                        <li><code className="markcode">some()</code> method is <b>return true of one of the element/value of array satisfy condition</b>.</li>
                        <li>some() method used to check the every value of array that satisfied or not.</li>
                        <li>It returns true, if the array finds an element that satisfied the condition/function, otherwise false.</li>
                        <li>It doesn't modify the array.</li>
                        <li>In this method you need a function to test the condition.</li>
                    </ul>
                    <p>In blow example you can see that it will be true when one value is follow their condition.But in every() method all the element of array follow the condition then true.</p>
                    <CodeHighlight code={arraySome} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output"> true</pre>
                    <br />

                    <div className="heading2">
                        <h3> Array.prototype.every();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">every()</code> method <b>returns true if all elements in an array pass a test</b> (provided as a function).</li>
                        <li>It is used the check the values is greater then or smaller then
                            available in array mean e.g the age of student check in the array is greater then 18 or less then in array
                            and fetch the data.</li>
                        <li><code className="markcode">every()</code> does not execute the function for empty array elements.</li>
                        <li><code className="markcode">every()</code> does not change the original array.</li>
                        <li><code className="markcode">every()</code> return true if the all element in array pass the condition otherwise false.</li>
                    </ul><br />
                    <h5 className="outputh">Syntax :</h5><br />
                    <pre className="syntax"> array.every(function(currentValue, index, arr), thisValue);</pre>
                    <CodeHighlight code={arrayEvery} language="javascript" />


                    <div className="heading2">
                        <h3> Array.prototype.filter();</h3>
                    </div>
                    <ul>
                        <li><code className="markcode">filter()</code> method is used to check the condition.Then condition is apply on the all element of array.</li>
                        <li>Those Element of array that satisfiy the condition,they store in the new array.</li>
                        <li>But <code className="markcode">every()</code>  method is used to check the condition and return true or false if all the value are correct to the condition.</li>
                        <li><code className="markcode">filter()</code> does not execute the function for empty array elements.</li>
                        <li><code className="markcode">filter()</code> does not change the original array.</li>
                    </ul>

                    <div className="success size">
                        <p><i className="fas fa-check-circle" aria-hidden="true"></i><code className="markcode">filter()</code> method creates an array filled with all array element that pass a test. <br />
                        </p>
                    </div>

                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax">    array.filter(Function Name)</pre>
                    <CodeHighlight code={arrayFilter} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output">  [ 23, 25, 46 ]</pre>
                    <br />
                    <div className="heading2">
                        <h3> Array.prototype.toString();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">toString()</code> method converts an array into a String and returns the result.</li>
                        <li> Returns a string representing the specified array and its elements.</li>
                    </ul>
                    <CodeHighlight code={arraytoString} language="javascript" />


                    <div className="heading2">
                        <h3>Array.prototype.valueOf();</h3>
                    </div>
                    <p><code className="markcode">valueOf()</code> method is return the array. They Print Same Array Element Only.</p>
                    <ul>
                        <li>The valueOf() method does not change the original array.</li>
                    </ul>
                    <CodeHighlight code={arrayValueOf} language="javascript" />
                    <br />

                    <div className="heading2">
                        <h3> Array.prototype.fill();</h3>
                    </div>

                    <ul>
                        <li><p>The <code className="markcode">fill()</code>method <b>changes all elements in an array</b> to a static value.(mean replace all value with new)</p></li>
                        <li>Start index (default 0) to an end index (default array.length).</li>
                        <li>It returns the modified array.</li>
                    </ul>
                    <p>
                        In<code className="markcode">copywithin()</code>, we copy the part of the array and target to overwrite the
                        array.But in <code className="markcode">fill()</code> method we have pass the value then give the start index of
                        end index where the value is replace.</p>

                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax">array.fill(value, start, end)</pre><br />
                    <p>In blow example you can see the value hassan is passed then replace the value on index 0 and
                        stop the before index 1. if we have pass the index 0 to 3 then the 3 value will be change to hassan.</p>
                    <CodeHighlight code={arrayfill} language="javascript" />

                    <br />


                    <div className="heading2">
                        <h3> Array.prototype.forEach();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">forEach()</code> method executes a provided function once for each array element.This Method is used for print the all element in the array once.</li>
                        <li>You can print the index of the Array by passing the second parameter(index).</li>
                        <li>forEach() method is pass the parameter that contain the value of the array or index of the array and those value should be print in the array.</li>
                        <li>First parameter is used for value of array and second parameter is used for the index no. of array.</li>
                    </ul>
                    <CodeHighlight code={arrayforEach} language="javascript" />

                    <div className="heading2">
                        <h3> Array.prototype.entries();</h3>
                    </div>
                    <p>The <code className="markcode">entries()</code>method <b>returns</b> a new Array Iterator object that contains the <b>key/value</b> pairs for each index in the array.</p>

                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax"> array.entries()</pre>
                    <CodeHighlight code={arrayEntries} language="javascript" />

                    <div className="heading2">
                        <h3> Array.prototype.keys();</h3>
                    </div>
                    <ul>
                        <li><code className="markcode">keys()</code> method is return the array index but Iterator Object that contains the keys for each index in the array.</li>
                        <li>keys() does not change the original array.</li>
                        <li>By using for/of loop we can only print the values/element of array.</li>
                        <li>But using for/of loop with keys we can print the index of array.</li>
                    </ul>
                    <CodeHighlight code={arrayKeys} language="javascript" />
                    <br />


                    <div className="heading2">
                        <h3> Array.prototype.copyWithin();</h3>
                    </div>
                    <p>The <code className="markcode">copyWithin()</code> The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.<br />
                        The <code className="markcode">copyWithin()</code> method copies array elements to another position in an array, overwriting the existing values. <br />
                        The <code className="markcode">copyWithin()</code> does not add items to the array.<code className="markcode">copyWithin()</code> overwrites the original array.</p>

                    <h5 className="outputh">Syntax :</h5>
                    <pre className="syntax"> copyWithin(target)
                        copyWithin(target, start)
                        copyWithin(target, start, end);</pre>
                    <p>In Blow Example the <code className="markcode">copyWithin()</code> we copy first we added the
                        target index 0 mean copy array target the index 0 then we start of coping array index is 3 then end of the
                        copying array is 4 mean that the array copy stop at index 4.After copy the array then overwrite the existing
                        target index.<br />
                        You can see in the comment they target index is 0 and start copy 3 to last index then target overwrite start
                        index 0 to copy elements.</p>
                    <CodeHighlight code={arrayCopyWithin} language="javascript" />

                    <div className="heading2">
                        <h3> Array.prototype.map();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">map()</code> method is used to multiply,add,subtract etc perform operation on the array all element/values.</li>
                        <li>They not change original array, but return result in new array.</li>
                        <li><code className="markcode">map()</code> method is pass the argument to function that contain the element/value of array.</li>
                    </ul>
                    <h5 className="outputh">Syntax :</h5>
                    <CodeHighlight code={arrayMap} language="javascript" />
                    <CodeHighlight code={arrayMapMethods} language="javascript" />



                    <h5 className="heading1" id="object">How to Create Object?</h5>
                    <div className="heading2">
                        <h3>What is Object? </h3>
                    </div>
                    <p>Object is real world things that has existance.</p>
                    <ul>
                        <li>Object contain the Properties and Methods/Attribute/values.</li>
                        <li>In array we used the default index no. but in Object the index name is the property name.</li>
                        <li>Property is sperated with comma &quot;,&quot;</li>
                        <li>You can add <b>array</b> in the Object. Just add the variables/Properties Name and its values is array.</li>
                        <li>You can also create the function in Object.</li>
                        <li></li>
                    </ul>

                    <CodeHighlight code={ObjectCode} language="javascript" />

                    <p><strong>Syntax:</strong></p>
                    <CodeHighlight code={ObjectSyntax} language="javascript" />


                    <p><strong>Example:</strong></p>
                    <CodeHighlight code={ObjectExample} language="javascript" />

                    <div className="heading2">
                        <h3> Array in Object </h3>
                    </div>
                    <CodeHighlight code={arrayObject} language="javascript" />

                    <div className="heading2">
                        <h3>Function in Object</h3>
                    </div>
                    <CodeHighlight code={functionObject} language="javascript" />

                    <div className="heading2">
                        <h3>Object Within Object </h3>
                    </div>
                    <p>You can create Object within the Object.</p>
                    <CodeHighlight code={ObjectwithinObject} language="javascript" />


                    <div className="heading2" id="arrayobject">
                        <h3>JavaScript Array of Objects </h3>
                    </div>
                    <p>In Array of Objects,we can create object within the array.</p>

                    <CodeHighlight code={arryOfObject} language="javascript" />



                    <div className="heading2" id="destructuring">
                        <h3> Destructuring </h3>
                    </div>
                    <ul>
                        <li>In Destructuring we can extract the value from array , object , and store into variables.</li>
                    </ul>
                    <CodeHighlight code={desctructuring} language="javascript" />

                    <h1 className="heading1">String Operations</h1>
                    <p>The string is a sequence of characters that is used for storing and managing text data.</p>
                    <div className="heading2" id="stringmethods">
                        <h3>List of All String Operation in JavaScript</h3>
                    </div>
                    <CodeHighlight code={StringOperation} language="javascript" />

                    <div className="heading2">
                        <h3>length</h3>
                    </div>

                    <p><code className="markcode">String.length();</code> method is used to calculate the length of the string.</p>
                    <ul><li>It also calculate the space in the string.</li></ul>

                    <CodeHighlight code={stringLength} language="javascript" />


                    <div className="heading2">
                        <h3>String.include(); </h3>
                    </div>
                    <ul>
                        <li><code className="markcode">String.include();</code> method is used to search words or character in the string.</li>
                        <li>It return true/false if value match.</li>
                        <li>It is case sensitive.(if your search value is lowerCase and String is Upper then they return false).</li>
                    </ul>
                    <CodeHighlight code={stringInclude} language="javascript" />

                    <div className="heading2">
                        <h3>String.startWith(); &amp; String.endWith(); </h3>
                    </div>
                    <ul>
                        <li><code className="markcode">String.startWith()</code> method is used to <b>match the string first word/character</b> with the search value.If value match then they return true otherwise false.</li>
                        <li>It is case sensitive.(if your search value is lowerCase and String is Upper then they return false).</li>

                        <CodeHighlight code={stringStart} language="javascript" />

                        <li><code className="markcode">String.endWith()</code> method is used to <b>match the string end word/character</b> with the search value.if value match then they return true otherwise false.</li>
                        <li>It is case sensitive.(if your search value is lowerCase and String is Upper then they return false).</li>

                        <CodeHighlight code={stringEnd} language="javascript" />
                    </ul>

                    <div className="heading2">
                        <h3>String.search();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">search()</code> method searches a string for a specified value and returns the position(index) of the match value.</li>
                        <li>They work same as the include() but they only index no.</li>
                        <li>If they not find value then they return -1.</li>
                        <li>It is case sensitive.(if your search value is lowerCase and String is Upper then they return false).</li>
                    </ul>

                    <CodeHighlight code={stringSearch} language="javascript" />


                    <div className="heading2">
                        <h3>string.match();</h3>
                    </div>

                    <ul>
                        <li><code className="markcode">string.match()</code> method is used to match the value with the string.</li>
                        <li>if the value is match then they return the array.</li>
                        <li>They search same name word again and again,and they collect all match word,return the array.</li>
                    </ul>
                    <p>Searches a string for a match against a regular expression.</p>

                    <CodeHighlight code={stringMatch} language="javascript" />

                    <div className="heading2">
                        <h3>String.indexOf();</h3>
                    </div>
                    <br />
                    <div className="alert-message alert-success short-b">Both <mark className="markcode">indexOf()</mark>, and <mark className="markcode">lastIndexOf()</mark> return -1 if the text is not found.<br />Both methods accept a second parameter as the starting position for the search. <br />
                        <b>The index counter starts from zero.</b></div>
                    <br />

                    <p>The indexOf() method returns the index of (the position of) the first occurrence of a
                        specified text in a string otherwise return -1.</p>
                    <CodeHighlight code={stringIndexOf} language="javascript" />

                    <div className="heading2">
                        <h3>String.lastIndexOf();</h3>
                    </div>
                    <p>The lastIndexOf() method returns the index of the last occurrence of a specified text in
                        a string.</p>
                    <CodeHighlight code={stringLastIndexOf} language="javascript" />

                    <h5 className="outputh">Output :</h5>
                    <pre className="output"> Return 16 because Last Index are preference</pre><br />

                    <div className="heading2">
                        <h3>String.replace();</h3>
                    </div>
                    <ul>
                        <li>Search the Word then Replace the word with new word.</li>
                        <li>It catch first occurance of the specified value.</li>
                        <li>It same work as we replace the word in notepad or Microsoft word.</li>
                        <li>By Default they replace first match value.</li>
                        <li>But by using <b>Regular Expression</b>(example 3 blow) replace all match value with new value.</li>
                        <li>In Example 3 they match "is" with all string and replace value.</li>
                    </ul>
                    <CodeHighlight code={stringReplace} language="javascript" />


                    <div className="heading2">
                        <h3>String.trim();</h3>
                    </div>
                    <ul>
                        <li>The <code className="markcode">String.trim();</code> method is used to remove the extra space from left or Right in the String.</li>
                        <li>It is mostly used in the input:box in the form.By mistake the user add the space left-right then we used the trim() method.</li>
                    </ul>
                    <CodeHighlight code={stringTrim} language="javascript" />

                    <div className="heading2">
                        <h3>String.charAT(); </h3>
                    </div>
                    <ul>
                        <li><code className="markcode">String.charAT();</code> method is used to select the only one character by passing their index no./Position.</li>
                        <li>Start Index countring in String is 0</li>
                    </ul>
                    <CodeHighlight code={stringCharAt} language="javascript" />

                    <div className="heading2">
                        <h3>String.charCodeAT(); </h3>
                    </div>
                    <ul>
                        <li><code className="markcode">String.charCodeAT();</code> method is return the ascii code of the character.</li>
                        <li>They accept position/index of character in string then return the Ascii code of character.</li>
                        <li>The Ascii code of capital &amp; smaller letter is different.</li>
                    </ul>
                    <CodeHighlight code={stringCharAtCode} language="javascript" />


                    <div className="heading2">
                        <h3>String.fromCharCode(); </h3>
                    </div>
                    <ul>
                        <li><code className="markcode">String.fromCharCode();</code> method is used to convert the ascii code into the Ascii value.</li>
                    </ul>
                    <CodeHighlight code={stringfromCharCode} language="javascript" />

                    <div className="heading2">
                        <h3>String.concat(); </h3>
                    </div>
                    <ul>
                        <li><code className="markcode">String.concat();</code> method is used to concat one,two or more string to each other.</li>
                    </ul>
                    <CodeHighlight code={stringConcat} language="javascript" />

                    <div className="heading2">
                        <h3>String.split();</h3>
                    </div>
                    <p>method is used to convert the string text into the array.</p>
                    <pre className="output">string.split(" "); <br></br>
                        string.split(" ",3);      <span className="comment"> //add limit how much word convert to array.</span> <br></br>
                        string.split();           <span className="comment"> //Omit the separator parameter</span> <br></br>
                        string.split("o");        <span className="comment"> // Use a letter as a separator</span> <br></br>
                        string.split("\n");       <span className="comment"> //Line split</span></pre>

                    <CodeHighlight code={stringSplit} language="javascript" />



                    <div className="heading2">
    <h3>String.repeat(); </h3>
</div>
<ul>
    <li><code className="markcode">String.repeat();</code> method is used to repeat the string.</li>
    <li>You can pass the number, how much time they repeat string.</li>
</ul>
<CodeHighlight code={stringrepeat} language="javascript" />

<div className="heading2">
    <h3>string.slice(start_no,end_no);</h3>
</div>

<p><code className="markcode">slice(start,end)</code></p>
        <ul>
            <li>slice() extracts parts of a string and returns the extracted parts in a new string.</li>
            <li> slice() is used to show the specific part of the string.</li>
            <li> Start index with 0 and String display with start number and end number not print of index value.</li>
            <li> It also count spaces </li>
            <li>The start and end parameters specifies the part of the string to extract.</li>
        </ul>

<p><code className="markcode">substring(start_no,end_no);</code></p>
<ul>
    <li>substring() is used to show the specific part of the string.</li>
    <li>Start with index with 0 of string, and String display with start number and end number not print of index value.</li>
</ul>

<p><code className="markcode">string.substr(start,length);</code></p>
<ul>
    <li>To show the specific part of the string.</li>
    <li>Start With index no 0 of string.</li>
    <li>Length count the total character you should print,it also include end character.</li>
</ul>
<CodeHighlight code={stringslice} language="javascript" /> 
        
         
<div className="heading2">
    <h3>toString();</h3>
</div>
<p>The toString() method returns a number as a string.<br/>
They Should convert the integer,float,boolean,arrays,object in the form of String.</p>
<CodeHighlight code={tostring} language="javascript" />

<div className="heading2">
<h3>Keyword variable_name = [data_set];</h3>
</div>
<p>JavaScript arrays are used to store multiple values in a single variable.You can use the
Keyword like let,var,const in creating a array. But Remember when you create the array you choose the best
keyword.</p>
<CodeHighlight code={keywordvariable} language="javascript" />


<div className="heading2">
    <h3>JSON.stringify(object_variable_Parameter);</h3>
</div>

<p><code className="markcode">JSON.stringify(parameter);</code> is used to conver the object into
    the String Collection.</p>
<span className="marku">Example use Object:</span>
       
<CodeHighlight code={jsonString} language="javascript" />
<br/>
<div className="heading2">
    <h3>Convert String into Object</h3>
</div>

<p><code className="markcode">JSON.parse(string name);</code> is used to conver the string into
    the Object.</p>
<CodeHighlight code={convertStringintoObj} language="javascript" />

&nbsp;<span className="marku">Example use Array:</span>
<p>It also used to convert array into string and again string array into array.</p>
<CodeHighlight code={convertStringintoObjexamp} language="javascript" />

&nbsp;<h5 className="outputh">Output :</h5>
<pre className="output"> &nbsp;["John","Peter","Sally","Jane"]
&nbsp;String </pre>


<h5 className="heading1" id="numbermethods">Number Methods</h5>

<CodeHighlight code={numberMethods} language="javascript" lineNumbers="line-numbers"/>

 <div className="heading2">
    <h3>Number() </h3>
</div>
<ul>
    <li><code className="markcode">Number()</code> method is used to check the value is number or not.</li>
    <li>It also used to convert number string into Number Form.</li>
</ul>
<CodeHighlight code={NumberMethod} language="javascript" />


<div className="heading2">
    <h3>isFinite() </h3>
</div>
<ul>
    <li><code className="markcode">isFinite()</code> is used to check the value is countable or infinite and they return true/false.</li>
    <li><code className="markcode">isFinite()</code> : The function those contain <b>is</b> in the start they return only true/false, and they used for the check condition.</li>
</ul>
<CodeHighlight code={isFiniteMethod} language="javascript" />

<div className="heading2">
    <h3>isInteger() </h3>
</div>
<ul>
    <li>It is used to check the given variable/value is Interger or not and they return true/false.</li>
    <li><code className="markcode">isInteger()</code> : The function those contain <b>is</b> in the start they return only true/false, and they used for the check condition.</li>
</ul>
<CodeHighlight code={isintegerMethod} language="javascript" />

<div className="heading2">
    <h3>toFixed() </h3>
</div>
<ul>
    <li><code className="markcode">toFixed()</code> is used to define the size how much number are the show after decimal mean full stop</li>
    <li>It accept number parameter and used as how much number should print after the "." decimal.</li>
</ul>
<CodeHighlight code={fixedMethod} language="javascript" />

<div className="heading2">
    <h3> toPrecision() </h3>
</div>
<ul>
    <li><code className="markcode"> toPrecision()</code> is used if the value .5 is greater then they round.</li>
    <li>They accept one parameter that is used to how much total integer should be print.</li>
</ul>
<CodeHighlight code={precisionMethod} language="javascript" />
 
      <h5 className="heading1" id="jsMath"> JavaScript Math</h5>

        <div className="heading2">
            <h3>Math Methods</h3>
        </div>
<CodeHighlight code={jsMath} language="javascript" lineNumbers="line-numbers"/>

        <h1 className="heading1" id="domdocument">DOM Document</h1>
        <div className="heading2">
            <h3>List of All DOM Documents</h3>
        </div>
        <p><code className="markcode">getElementById</code> is used to get the Element by using <code
                className="markcode">id="name"</code> and change the inner content of the HTML document through id. <span
                className="ccode">document.getElementById("id_name").innerHTML</span>property is useful for getting or
            replacing the content of HTML elements.</p>

            <CodeHighlight code={domDocument} language="javascript" lineNumbers="line-numbers"/>

        <div className="heading2">
            <h3> document.getElementById("id")</h3>
        </div>
<CodeHighlight code={domID} language="javascript" />

        <div className="heading2">
            <h3>document.getElementByTagName("name")</h3>
        </div>
        <p>The <code className="markcode">document.getElementByTagName("name")</code> method is used to get the Element by
            using TagName. </p>
<CodeHighlight code={domName} language="javascript" />

        <div className="heading2">
            <h3>document.getElementsByClassName("name")</h3>
        </div>
        <p>The <code className="markcode">getElementsByClassName("name")</code> method is used to Access the
            element by using class Name.</p>
<CodeHighlight code={domClassName} language="javascript" />

        <div className="heading2">
            <h3>document.getElementsByName(&quot;name = 'fname'&quot;)</h3>
        </div>
        <p>The <code className="markcode">getElementsByName(&quot;name = 'fname'&quot;)</code> method is
            used to get the element by using name attribute. Mostly this method is used in the input elements.</p>

            <CodeHighlight code={domFname} language="javascript" />

        <div className="heading2">
            <h3> document</h3>
        </div>
        <p>The <code className="markcode">document;</code>method is used to list of all documents </p>

        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;document;
</pre><br />
<CodeHighlight code={document} language="javascript" />

        <div className="heading2">
            <h3>document.all;</h3>
        </div>
        <p>The <code className="markcode">document.all;</code> method is used to list of all tag with index no show in the
            console. This method is used to access the specific element or the complete documents elements. <br />In
            Method 02 you can pass the index number then only those element be Accessed whoes are
            present on this index number.<br /> In Method 03 the innerHTML should be pass the access the inner Text of
            Elements.</p>
            <CodeHighlight code={documentAll} language="javascript" />

        <div className="heading2">
            <h3> document.title;</h3>
        </div>
        <p>The <code className="markcode">document.title;</code> is return the element of title text.</p>

        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;var a = document.title;</pre><br />
<CodeHighlight code={documentTitle} language="javascript" />

        <div className="heading2">
            <h3> document.head;</h3>
        </div>
        <p>The <code className="markcode">document.head;</code> is return the all head element title,meta tag etc. those are
            include on your document head tag are return.</p>

        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;var a = document.head;</pre><br />
<CodeHighlight code={documentHead} language="javascript" />



        <div className="heading2">
            <h3> document.body;</h3>
        </div>
        <p>The <code className="markcode">document.body;</code> is return all elements in the body.</p>
        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;var a = document.body;</pre><br />
<CodeHighlight code={documentbody} language="javascript" />




        <div className="heading2">
            <h3> document.links;</h3>
        </div>
        <p>The <code className="markcode">document.links;</code> return the list of a links present in the documents.</p>
        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;var a = document.links;</pre><br />
<CodeHighlight code={documentLinks} language="javascript" />

        <div className="heading2">
            <h3> document.images;</h3>
        </div>
        <p>The <code className="markcode">document.images;</code> return the all images present in the
            documents. </p>

        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;var a = document.images;</pre><br />
<CodeHighlight code={documentImages} language="javascript" />


   <div className="heading2">
            <h3> document.documentURI;</h3>
        </div>
        <p>The <code className="markcode">document.documentURI;</code> return the url of the documents. </p>

        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;let a = document.documentURI;</pre><br />
<CodeHighlight code={documentDocumentURI} language="javascript" />

        <div className="heading2">
            <h3> document.domain;</h3>
        </div>
        <p>The <code className="markcode">document.domain;</code> method is used to return the domain of
            current document mean website your are visiting.</p>
        <h5 className="outputh"> &nbsp;Syntax :</h5>
        <pre className="syntax">let a = document.domain;</pre><br />
<CodeHighlight code={documentDomain} language="javascript" />


        <div className="heading2">
            <h3> document.scripts;</h3>
        </div>
        <p>The <code className="markcode">document.scripts;</code> is used to return the javaScript Scripts
            in the documents.By passing the index no mean script only that found on the index.</p>

        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;let a = document.documentURI;</pre><br />
<CodeHighlight code={documentScripts} language="javascript" />

        <div className="heading2">
            <h3> document.referrer;</h3>
        </div>
        <p>The <code className="markcode">document.referrer;</code> Returns the URI of the referrer (the
            linking document)</p>

        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;let a = document.referrer;</pre><br />
<CodeHighlight code={documentReferrer} language="javascript" />


        <div className="heading2">
            <h3> document.lastModified;</h3>
        </div>
        <p>The <code className="markcode">document.lastModified;</code> Returns the date and time the
            document was updated.</p>
        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;let a = document.lastModified;</pre><br />
<CodeHighlight code={documentLastModified} language="javascript" />

        <div className="heading2">
            <h3> document.forms;</h3>
        </div>
        <p>The <code className="markcode">document.forms;</code> return all form elements.</p>
        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;let a = document.forms;</pre><br />
<CodeHighlight code={documentForms} language="javascript" />

        <div className="heading2">
            <h3> document.doctype;</h3>
        </div>
        <p>The <code className="markcode">document.doctype;</code> return the document types is html or
            other.</p>

        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> &nbsp;let a = document.doctype;</pre><br />
<CodeHighlight code={documentDoctype} language="javascript" />

        <div className="heading2">
            <h3> document.cookie;</h3>
        </div>
        <p>The <code className="markcode">document.cookie;</code> return the document cookies.</p>

        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax">let a = document.cookie;</pre><br />
<CodeHighlight code={documentCookie} language="javascript" />

        <div className="heading2" id="fetchLinks">
            <h3>Fetch Link in the Document </h3>
        </div>
<CodeHighlight code={fetchLink} language="javascript" />



<h5 className="heading1" id="editable">Editable Div</h5>
<ul>
    <li>The contentEditable property sets or returns whether the content of an element is editable or not.</li>
 
<CodeHighlight code={editableDiv} language="javascript" />    
<li>You can also used by add the contentEditable attribute in html element.</li>
<CodeHighlight code={editableDiv2} language="javascript" />
    <li>You can also use the <code className="markcode">isContentEditable</code>property to find out if the content of an element is editable or not.</li>
</ul>
<pre className="output">
  HTMLElementObject.contentEditable = true|false;
  HTMLElementObject.isContentEditable
</pre>
<CodeHighlight code={editableDiv3} language="javascript" />

        <div className="heading2" id="alert">
            <h3>Alert Box in JavaScript</h3>
        </div>
        <p><code className="markcode">alert(); </code> is used to show the Alert Message on the Top.</p>
        <CodeHighlight code={AlterBoxJS} language="javascript" />        <br />

        <div className="heading2">
            <h3>Confirm Box in JavaScript</h3>
        </div>
        <p><code className="markcode">confirm();</code> The main use of confirm(); and alert(); is the
            confirm(); is used two option show cancel and ok. But in the alert(); message show the only message and Ok
            button.</p>
<CodeHighlight code={ConfirmBox} language="javascript" />

        <br />
        <div className="heading2">
            <h3>Prompt Box in JavaScript</h3>
        </div>
        <p><mark className="markcode">prompt("message");</mark> is used a prompt is show on the top and
            the user give there feedback through input.</p>
<CodeHighlight code={promptBox} language="javascript" />

        <div className="heading2">
            <h3> blur Methods</h3>
        </div>
        <p>The blur() method removes focus from the current window.</p>
<CodeHighlight code={blurMethod} language="javascript" />

        <div className="heading1" id="domattributes">
            <h3> DOM Attribute &amp; Children</h3>
        </div>
        <p><strong>What is Attribute?</strong></p>
        <p>In the html page the element is div,p,img etc tag is the element and attribute is class,id,style,name is the attribute of element.</p>
        <div className="heading2">
            <h3> List of All GET &amp; SET Value Methods</h3>
        </div> <br/>
            <CodeHighlight code={domAttributeChildren} language="javascript" lineNumbers="line-numbers"/>


        <div className="heading2">
            <h3>Element.getAttribute()</h3>
        </div>
        <p>This Method is used to get the name of Attribute of style,id,class.If the given attribute does not exist, the
            value returned will either be null or "" (the empty string); </p>

            <CodeHighlight code={elementgetAttribute} language="javascript" />


        <div className="heading2">
            <h3>Element.getAttributeNames() </h3>
        </div>
        <p>
            Returns the attribute names of the element as an Array of strings.(e.g id,class,style) <br/>
            If the element has no attributes it returns an empty array. </p>

            <CodeHighlight code={elementgetAttributeName} language="javascript" />


        <div className="heading2">
            <h3>Element.getAttributeNode() </h3>
        </div>
        <p>This Method is return complete attribute.(e.g id=&quot;list&quot;) <br/>
            In Blow example you can see that the id complete show in output.</p>

            <CodeHighlight code={elementgetAttributeNode} language="javascript" />


        <div className="heading2">
            <h3>Element.createAttribute() | Element.setAttributeNode()</h3>
        </div>
        <p>This method is used to create the attribute like class, id name then add the value like class name , id name.
        </p>
<CodeHighlight code={createAttribute} language="javascript" />


        <div className="heading2">
            <h3>Element.hasAttribute() </h3>
        </div>
        <p><code className="markcode">Element.hasAttribute()</code> method returns a Boolean(true/false) value indicating whether the
            specified element/id/class/ has the specified attribute or not.</p>

            <CodeHighlight code={hasAttribute} language="javascript" />



        <div className="heading2">
            <h3>Element.hasAttributes() </h3>
        </div>
        <p><code className="markcode">Element.hasAttributes()</code>method returns true if the specified node has any
            attributes, otherwise false.</p>

            <CodeHighlight code={hasAttribute1} language="javascript" />


        <div className="heading2">
            <h3>Query/Get Elements</h3>
        </div>
        <p>The browser creates a DOM (Document Object Model) whenever a web page is loaded, and with the help of HTML
            DOM, one can access and modify all the elements of the HTML document.</p>

        <div className="heading2">
            <h3>querySelector</h3>
        </div>
        <p>Selector to select first matching element</p>

        <CodeHighlight code={ElementquerySelector} language="javascript" />
        <div className="heading2">
            <h3>querySelectorAll</h3>
        </div>
        <p>A selector to select all matching elements</p>
        <CodeHighlight code={ElementquerySelectorAll} language="javascript" />

        <div className="heading2">
            <h3>getElementsByTagName</h3>
        </div>
        <p>Select elements by tag name</p>
<CodeHighlight code={ElementTagName} language="javascript" />

        <div className="heading2">
            <h3>getElementsByClassName</h3>
        </div>
        <p>Select elements by class name</p>
<CodeHighlight code={ElementClassName} language="javascript" />

        <div className="heading2">
            <h3>Get Element by Id</h3>
        </div>
        <p>Select an element by its id</p>
<CodeHighlight code={ElementgetElementById} language="javascript" />
<CodeHighlight code={ElementgetElementByIdhtml} language="javascript" />

        <p>We can modify every tag in the document with a for and forEach loop. In this example, we are using for loop
        </p>
<CodeHighlight code={ElementgetElementByIdjs} language="javascript" />

        <div className="heading2">
            <h3> Element.remove() </h3>
        </div>
        <p><code className="markcode">Element.remove()</code>method removes the specified element from the DOM.</p>

        <CodeHighlight code={Elementremove} language="javascript" />

        <div className="heading2">
            <h3>Element.removeAttribute() </h3>
        </div>
        <p><code className="markcode">Element.removeAttribute()</code> method removes the specified attribute from an
            element.</p>
<CodeHighlight code={ElementremoveAttribute} language="javascript" />

        <div className="heading2">
            <h3>Element.removeAttributeNode()</h3>
        </div>
        <p><code className="markcode">Element.removeAttributeNode()</code>method removes the specified attribute from an
            element, and returns the removed attribute, as an Attr Node object. </p>

            <CodeHighlight code={ElementremoveAttributeNode} language="javascript" />


        <div className="heading2">
            <h3>Element.replaceChildren()</h3>
        </div>
        <p><code className="markcode">Element.replaceChildren()</code>method replaces the existing children of a Node with a
            specified new set of children. These can be DOMString or Node objects. </p>

            <CodeHighlight code={replaceChildren} language="javascript" />


        <h1 className="heading1" id="domhtml">DOM HTML</h1>
        <br/>
        <div className="alert-message alert-success short-b">
            Syntax use the JavaScript Change HTML<br />
            document.getElementById(id).innerHTML = new HTML
        </div>
        <br />
        <div className="heading2">
            <h3> DOM HTML innerHTML</h3>
        </div>
        <p>JavaScript DOM HTML is used to change the HTML.</p>
        

        <table className="table-design" style={{"width":"100%","fontSize":"20px"}}>
   <tbody>
   <tr>
                <th scope="col">#</th>
                <th scope="col">Property</th>
                <th scope="col">Description</th>
            </tr>
            <tr>
                <th>1</th>
                <td>element.innerHTML = new html content</td>
                <td>Change the inner HTML of an element</td>
            </tr>
            <tr>
                <th>2</th>
                <td>element.attribute = new value</td>
                <td>Change the attribute value of an HTML element</td>
            </tr>
            <tr>
                <th>3</th>
                <td>element.style.property = new style</td>
                <td>Change the style of an HTML element</td>
            </tr>
            <tr>
                <th>4</th>
                <td>element.setAttribute(attribute, value)</td>
                <td>Change the attribute value of an HTML element</td>
            </tr>
   </tbody>
        </table>
        <br />

        <CodeHighlight code={domHTMLExample1} language="javascript" />
        <ul>
            <li>The HTML document above contains a <mark className="ccode">&lt;p&gt;</mark> element with id="demo"</li>
            <li>We use the HTML DOM to get the element with id="demo"</li>
            <li>A JavaScript changes the content (innerHTML) of that element to "New text!"</li>
        </ul>

        <span className="marku">Example 02:</span>
<CodeHighlight code={domHTMLExample2} language="javascript" />


        <span className="marku">Example 03:</span>

        <p>In Example 02 we Add the Picture in web page and in javascript we get the id of image and
            change the image with other image.</p>
<CodeHighlight code={domHTMLExample3} language="javascript" />

        <hr />
        <div className="heading2">
            <h3> element.attribute = new value</h3>
        </div>
        <p>The setAttribute() method adds the specified attribute to an element, and gives it the
            specified value.If the specified attribute already exists, only the value is set/changed.</p>
       
<CodeHighlight code={elementattribute} language="javascript" />

        <div className="heading2" id="addEventListener">
            <h3> addEventListener() Method</h3>
        </div>

        <p><code className="markcode">addEventListener()</code> method is same as the Events occurs on the
            click. But by using the addEventListener() in JavasScript External file the code Readablily is better.The
            main purpose of this method is the event occur when the user click or mouse over in the element.In <code
                className="markcode">addEventListener()</code> Event Parameter you can use only click not use world "on"
            with Events.</p>
        <h5 className="outputh">Syntax :</h5>
        <pre className="syntax"> target.addEventListener(type, listener);
 target.addEventListener(type, listener, options);
 target.addEventListener(type, listener, useCapture);
 target.addEventListener(type, listener, useCapture, wantsUntrusted); // wantsUntrusted is Firefox only
</pre>
<br/>
        <h5 className="outputh">HTML + JavaScript:</h5>
<CodeHighlight code={elementaddEventListener} language="javascript" />

        <div className="heading2">
            <h3> use Capture Parameter in addEventListener()</h3>
        </div>
        <p>By Using the Capture when we have two, and i have two events. first when we click the inner
            div then inner div first occur then outer div occur. In Caputure parameter we pass only <code
                className="markcode">true/False</code> as a parameter.</p>
        <h5 className="outputh">HTML FILE:</h5>
<CodeHighlight code={useCaptureelementaddEventListener} language="javascript" />
        <h5 className="outputh">JavaScript File :</h5>
<CodeHighlight code={useCaptureelementaddEventListenerjs} language="javascript" />

        <div className="heading2">
            <h3> EventTarget.removeEventListener()</h3>
        </div>
        <p><code className="markcode">removeEventListener()</code> method is used to remove the <code
                className="markcode">addEventListener()</code> method from the coding.</p>

        <h5 className="outputh">HTML FILE:</h5>
<CodeHighlight code={removeEventListenerhtml} language="javascript" />
        <h5 className="outputh">JavaScript File :</h5>
<CodeHighlight code={removeEventListenerjs} language="javascript" />

<h1 className="heading1" id="domevents">DOM Events</h1><br/>
<div className="alert-message alert-success short-b">A JavaScript can be executed when an event occurs, like when a
    user clicks on an HTML element.<br />
    <b>Syntax:</b> onclick=JavaScript
</div>

<p>Types of Events in JavaScript;</p>
<ol>
    <li>Mouse Events</li>
    <li>Keyboard Events</li>
    <li>Window Events</li>
    <li>Scroll Events</li>
</ol>

<pre className="output">
<br/><strong> 1 - </strong> Click         onclick
<br/><strong> 2 - </strong> Double Click  ondblclick
<br/><strong> 3 - </strong> Right Click   oncontextmenu
<br/><strong> 4 - </strong> Mouse Hover   onmouseenter
<br/><strong> 5 - </strong> Mouse Out     onmouseout
<br/><strong> 6 - </strong> Mouse Down    onmousedown
<br/><strong> 7 - </strong> Mouse Up      onmouseup
           -            <br/><strong>Keyboard Events</strong>
<br/><strong> 1 - </strong> Key Press     onKeypress
<br/><strong> 2 - </strong> Key Up        onKeyup
<br/><strong> 3 - </strong> Key Down      onKeydown
           -           <br/><strong>Window Events</strong>
<br/><strong> 1 - </strong> window.open() & window.close()  // Already Mention in DOM Window
<br/><strong> 2 - </strong> Load        onload
<br/><strong> 3 - </strong> Unload      onunload
<br/><strong> 4 - </strong> Resize      onresize
                       <br/><strong>Scroll Events</strong>
<br/><strong> 1 - </strong> Scroll      onscroll
<br/><strong> 2 - </strong> PageXoffset
</pre>


 <div className="heading2" >
     <h3>Mouse Events </h3>
  </div>


<br />
    <pre className="output">
 <strong>1 -</strong>   Click         onclick
 <strong>2 -</strong>   Double Click  ondblclick
 <strong>3 -</strong>   Right Click   oncontextmenu
 <strong>4 -</strong>   Mouse Hover   onmouseenter
 <strong>5 -</strong>   Mouse Out     onmouseout
 <strong>6 -</strong>   Mouse Down    onmousedown
 <strong>7 -</strong>   Mouse Up      onmouseup
</pre>

<p>Event is used in the inline HTML. When a user click on the button,text,images,videos the
event is occur. we have used the mostly event in the <code className="markcode">addEventListener()</code> in the
external javascript b/c the code repeat in the inline HTML and not seet the best code in javascript code is
present in HTML file.When using the addEventListener() method, the JavaScript is separated from the HTML
markup, for better readability and allows you to add event listeners even when you do not control the HTML
markup. </p>
        <br/>

<div className="Short-head">
    <h3>JavaScript Event Function List </h3>
</div>
<CodeHighlight code={jsEventFuncList} language="javascript" />


<div className="heading2">
    <h3 align="center">Mouse Events</h3>
</div>
<p>Any change in the state of an object is referred to as an Event. With the help of JS, you can handle events,
    i.e., how any specific HTML tag will work when the user does something.</p>

<div className="heading2">
    <h3>Click</h3>
</div>
<p>Fired when an element is clicked</p>
<CodeHighlight code={clickEvents} language="javascript" />

        <div className="heading2">
            <h3>Right Click | oncontextmenu</h3>
        </div>
        <p>Fired when an element is right-clicked</p>
<CodeHighlight code={rigtClickEvent} language="javascript" />

        <div className="heading2">
            <h3>dblclick</h3>
        </div>
        <p>Fired when an element is double-clicked</p>
<CodeHighlight code={dblClickEvents} language="javascript" />

        <div className="heading2">
            <h3>mouseenter</h3>
        </div>
        <p>Fired when an element is entered by the mouse arrow</p>
<CodeHighlight code={mouseEnterEvent} language="javascript" />

        <div className="heading2">
            <h3>mouseleave</h3>
        </div>
        <p>Fired when an element is exited by the mouse arrow</p>
<CodeHighlight code={mouseLeeveEvent} language="javascript" />

        <div className="heading2">
            <h3>mousemove</h3>
        </div>
        <p>Fired when the mouse is moved inside the element</p>
<CodeHighlight code={mousemoveEvent} language="javascript" />

<h1 className="heading1">Keyboard Events</h1>
    <pre className="output">
        <ol type="1">
<li> Key Press     onKeypress</li>
<li> Key Up        onKeyup</li>
<li> Key Down      onKeydown</li>
        </ol>
</pre>
<button type="button"><a href="https://www.youtube.com/watch?v=_-UBpRUepwc" target="_blank" title="">See Video Tutorial</a></button>
<p><strong>Example:</strong></p>
<p><code className="markcode">this.value</code> print the enter value;</p>
<p><code className="markcode">onkeydown = "document.getElementById('form-id').style.background = this.value;"</code> get the form id and change the background color when user enter the color name in the box.</p>

<CodeHighlight code={keyboardEvent} language="javascript" />


        <div className="heading2">
            <h3>keydown</h3>
        </div>
        <p>Fired when the user is pressing a key on the keyboard.keydown is first run the script then take the input from the box.</p>
        <CodeHighlight code={keydownEvent} language="javascript" />

        <h2>&nbsp;</h2>
        <div className="heading2">
            <h3>keypress</h3>
        </div>
        <p>Fired when the user presses the key on the keyboard</p>
<CodeHighlight code={keypressEvent} language="javascript" />

        <div className="heading2">
            <h3>Keyup</h3>
        </div>
        <p>Fired when the user releases a key on the keyboard</p>
<CodeHighlight code={keyupEvent} language="javascript" />

<h1 className="heading1">Window Events</h1>
    <pre className="output">
        <ol type="1">
        <li> window.open() & window.close()  // Already Mention in DOM Window </li>
        <li> Load        onload </li>
        <li> Unload      onunload </li>
        <li> Resize      onresize </li>
        <li> Scroll      onscroll </li>
        </ol>
</pre>

<div className="heading2">
    <h3><code className="markcode">onload</code> Events </h3>
</div>
<p>onload event is occure when an Object/Page is loaded.</p>
<CodeHighlight code={onloadEvent} language="javascript" />

<div className="heading2" id="scrollevent">
<h3> Scroll Events
    <span>
        <a href="#scroll"><i className="fas fa-link" style={{"color":"white"}} aria-hidden="true"></i></a>
    </span>
</h3>
</div>

<h5 className="outputh">Output :</h5>
<pre className="output">
    <strong>1 : </strong>Scroll Event  scroll
    <strong>2 : </strong>window.pageXOffset   &   window.pageYOffset
</pre>
<p>Fist take the text in the html web page then then scroll and blow page work.</p>
<CodeHighlight code={scrollEvent} language="javascript" />

<div className="Short-head">
   <h3>window.pageXOffset   &   window.pageYOffset </h3>
</div>
<p><code className="markcode">window.pageXOffset</code> show the vertically scrolling size in px of document.</p>
<p><code className="markcode">window.pageYOffset</code> show the horizontal top/bottom size of the scrolling in px.</p>

<CodeHighlight code={windowpageXandYOffsetEvent} language="javascript" />
<p><strong>Example:</strong></p>
<p>First you take the html file and add the code in the html file then add blow javaScript code. It show when you move the above 400px the background color change into the black and text color change into white.Then again if you move up and under the 400px ,their color will make normal background - white and text color - black.</p>

<CodeHighlight code={windowpageXandYOffsetEventEventExamp} language="javascript" />


        <div className="heading2">
            <h3> Show Date and Time</h3>
        </div>
<CodeHighlight code={showdateTimeEvent1} language="javascript" />


        <div className="heading2">
            <h3> Show Date and Time</h3>
        </div>
<CodeHighlight code={showdateTimeEvent2} language="javascript" />

<h1 className="heading1" id="timeEvent">JavaScript Timing Events</h1>
<div className="heading2">
    <h3> List of All Time Events</h3>
</div>
<p>The window Object Allows execution of code at specified time intervals. These time intervals are called
            <strong>timing Events</strong>.</p>
        <pre className="output">
 <strong>01</strong> setTimeout()    &amp; clearTimeout()
 <strong>02</strong> setInterval()   &amp; clearInterval()
 <strong>03</strong> stop()
   1 second = 1000 millisecond
   1 second = 1000ms
</pre>

<div className="heading2">
    <h3>setTimeout()  &amp; clearTimeout() </h3>
</div>

<ul>
    <li><code className="markcode">setTimeout()</code>Executes a Function,after waiting a specified number of milliseconds.</li>
    <p><strong>Syntax :</strong></p>
    <CodeHighlight code={setTimeoutEvent} language="javascript" />
        <li><code className="markcode">clearInterval()</code> is used to clear or stop the running setInterval() by pass the setInterval variable name as a parameter.</li>
</ul>

<div className="heading2">
    <h3>setInterval()  &amp; clearInterval() </h3>
</div>

<ul>
    <li><code className="markcode">setInterval(function,milliseconds)</code> Same as setTimeout(), but repeats the execution of the function continously.</li>
    <CodeHighlight code={setIntervalEvent} language="javascript" />
        <li><code className="markcode">clearTimeout()</code> is used to Stop the setTimeout Method.</li>
</ul>


<div className="heading2">
    <h3> stop</h3>
</div>
<p>Stops the further resource loading</p>
    <CodeHighlight code={stopEvent} language="javascript" />
        


<h1 className="heading1"  id="domcss">DOM CSS</h1>

        <br/>
        <div className="alert-message alert-success short-b">Three Method is used in Style in JavaScript;<br />
            <b>First :</b> document.getElementById(id).style.property = new style;<br />
            <b>Second :</b> Add the Class By using this step;<br />document.getElementById(id).className = "Add
            Name";<br />
            <b>Third :</b> type <code className="markcode">classList</code> show the All class in Strings
        </div>

        <div className="heading2">
            <h3> document.getElementById(id).style.property = new style;</h3>
        </div>
    <CodeHighlight code={domCSS} language="javascript" />
        

        <div className="heading2">
            <h3> Element.className();</h3>
        </div>
        <p>demo id is the simple paragraph is id.</p>
    <CodeHighlight code={domClassNameMethod} language="javascript" />
        


        <div className="heading2">
            <h3>Element.classList.add(); or Element.classList.remove();</h3>
        </div>
        <p><code className="markcode">add()</code> Method is used to add the class by passing String
            parameter in this methods.
            <code className="markcode">remove()</code> method in classList is used to remove the class.
        </p>
    <CodeHighlight code={domclassListclassremove} language="javascript" />
        

<h1 className="heading1" id="dateandtime">JavaScript Date and Time get + set Method</h1>
<p>By using javascript get method you can get the date and set method you can set the date according to your neeed.</p>
<ul>
    <li>You can get Date and Time By Using create a Object <code className="markcode">let now = new Date();</code></li>
    <li></li>
</ul>

<div className="Short-head">
    <h3> Date get Method</h3>
</div>
    <CodeHighlight code={dategetMethod} language="javascript" />
        

<div className="Short-head">
    <h3> Date set Method</h3>
</div>
    <CodeHighlight code={datesetMethod} language="javascript" />
        

        <div className="Short-head">
            <h3> Time get Method</h3>
        </div>
    <CodeHighlight code={timegetMethod} language="javascript" />
        

        <div className="Short-head">
            <h3> Time set Method</h3>
        </div>
    <CodeHighlight code={timesetMethod} language="javascript" />
        

        <div className="heading2">
            <h3> JavaScript Date get Method</h3>
        </div>
    <CodeHighlight code={jsdateandtimemethod} language="javascript" />
        

        <div className="heading2">
            <h3> JavaScript time get Method</h3>
        </div>
    <CodeHighlight code={jsdateandtimegetmethod} language="javascript" />
        
        <div className="heading2">
            <h3> JavaScript time Set Method</h3>
        </div>
    <CodeHighlight code={jsdateandtimesetmethod} language="javascript" />
        

        <h5 className="heading1" id="nodes">Nodes</h5>

        <div className="heading2">
            <h3>List of All Nodes</h3>
        </div> <br/>
        <pre className="output">
                              <strong>Properties</strong>
                              <ol type="1">
    <li> Node.baseURI  </li>
    <li> Node.childNodes  </li>
    <li> Node.firstChild  </li>
    <li> Node.lastChild  </li>
    <li> Node.nextSibling  </li>
    <li> Node.previousSibling  </li>
    <li> Node.nodeName  </li>
    <li> Node.nodeType  </li>
    <li> Node.nodeValue  </li>
    <li> Node.ownerDocument  </li>
    <li> Node.parentElement  </li>
    <li> Node.parentNode  </li>
    <li> Node.textContent  </li>
                             <strong>Methods</strong>
    <li> Node.appendChild()  </li>
    <li> Node.cloneNode()  </li>
    <li> Node.contains()  </li>
    <li> Node.getRootNode()  </li>
    <li> Node.hasChildNodes()  </li>
    <li> Node.isDefaultNamespace()  // Nor  </li>
    <li> Node.isEqualNode()  </li>
    <li> Node.normalize()  </li>
    <li> Node.removeChild()  </li>
    <li>Node.replaceChild() </li>
    </ol>
    </pre>
        <br/>

        <span className="outputh">Code Using In Blow:</span>
        <p>The code in one line b/c if we add enter space then they would create empty text which is not useable or
            dummy.</p>
    <CodeHighlight code={nodecode} language="javascript" />
        

        <div className="heading2">
            <h3>Node.baseURI </h3>
        </div>
        <ul>
            <li><code className="markcode"> Node.baseURI :</code> is return the string of url of current document.</li>
            <li>Return the base Uniform Resource Identifier (URI) of the document.</li>
            <li>This property returns a string value that represents the base URI of the page.</li>
        </ul>
    <CodeHighlight code={baseURIMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.childNodes </h3>
        </div>
         <ul>
            <li>The <code className="markcode"> Node.childNodes:</code> property returns a collection of a node's child nodes.</li>
            <li>Return a Nodelist of child nodes.</li>
        </ul>
    <CodeHighlight code={childNodesMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.firstChild </h3>
        </div>
        <ul>
            <li><code className="markcode"> Node.firstChild :</code> is return the first node mean first children of Node.</li>
            <li>But Remember if the nodes has space then it return the empty text.</li>
        </ul>
    <CodeHighlight code={firstChildMethod} language="javascript" />
        

        <div className="heading2">
            <h3> Node.lastChild </h3>
        </div>

        <ul>
            <li><code className="markcode"> Node.lastChild       :</code> is return the last node mean last children of Node.</li>
            <li>But Remember it is same as firstChild or childNode if you space the b/ w tag then they show empty text.</li>
        </ul>
    <CodeHighlight code={lastChildMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.nextSibling </h3>
        </div>
        <p><code className="markcode"> Node.nextSibling     :</code> return the next node from the present section.</p>

        <CodeHighlight code={nextSiblingMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.previousSibling </h3>
        </div>
        <p><code className="markcode"> Node.previousSibling :</code> return the previous node if the node has present in
            previous section.</p>

            <CodeHighlight code={previousSiblingMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.nodeName </h3>
        </div>

        <ul>
            <li>The <code className="markcode"> Node.nodeName :</code> read-only property return the name of the current node(e.g div,span) as a String.</li>
            <li>If the node is paragraph then name is P.</li>
            <li>But Some Problem in the nodeName, when we check the nodeName then they show extra text as a node the reason
            is that when we press the enter by element then they count a empty space as a text.</li>
        </ul>

        <CodeHighlight code={nodeNameMethod} language="javascript" />
        

        <div className="heading2">
            <h3> Node.nodeType </h3>
        </div>
        <p><code className="markcode"> Node.nodeType :</code> property that represent the type of the node.</p>
        <ul>
            <li>If the <b>node is an element node</b>, the nodeType property will return 1.</li>
            <li>If the <b>node is an attribute node</b>, the nodeType property will return 2.</li>
            <li>If the <b>node is a text node</b>, the nodeType property will return 3.</li>
            <li>If the <b>node is a comment node</b>, the nodeType property will return 8.</li>
            <li>This property is read-only.</li>
        </ul>
        <CodeHighlight code={nodeTypeMethod} language="javascript" />
        

        <div className="heading2">
            <h3> Node.nodeValue </h3>
        </div>
        <p><code className="markcode"> Node.nodeValue       :</code>returns or sets the value of current node.</p>

        <CodeHighlight code={nodeValueMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.ownerDocument </h3>
        </div>
        <p><code className="markcode"> Node.ownerDocument   :</code> is used to the Represents the entire document (the
            root-node of the DOM tree). <br/>
            In Blow Example you can see that the entire document in nodeType is 9 b/c it return the document and the
            document node type is 9. </p>

            <CodeHighlight code={ownerDocumentMethod} language="javascript" />
        

        <div className="heading2">
            <h3> Node.parentElement </h3>
        </div>
        <ul>
            <li><code className="markcode"> Node.parentElement :</code>The parentNode property returns the parent node of the specified node.</li>
            <li>Node.parentElement read-only property Returns the DOM node's parent Element, or null if the node either has no parent.</li>
            <li>They return null if the parent node not find. But parentNode() Return something like if node not then they return #document.</li>
        </ul>
    <CodeHighlight code={parentElementMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.parentNode </h3>
        </div>
        <p><code className="markcode"> Node.parentNode:</code> is used to return the parent Node.</p>
        <ul>
            <li>Working same as the parentElement(). But they return something when they have no parent like parent #document but the parentElement() return null if the no parent.</li>
        </ul>
    <CodeHighlight code={textContentMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.textContent </h3>
        </div>
        <ul>
            <li><code className="markcode"> Node.textContent     :</code>The textContent property sets or returns the text content of the specified node, and all its child.</li>
            <li>When you set the textContent property, all child nodes are removed and replaced by only one new text node.</li>
        </ul>
    <CodeHighlight code={appendChildMethods} language="javascript" />

<h5 className="heading1">Methods</h5>

<div className="heading2">
    <h3> 1.appendChild()</h3>
</div>
<ul>
    <li><code className="markcode">appendChild()</code> we have create the first element and then textNode or create comment . Then text/comment can add in the element we used the appendChild() method.</li>
    <li>The <code className="markcode">appendChild()</code>method appends a node (element) as the last child of an element.</li>
    <li>It is also used to append in the body.</li>
</ul>
    <CodeHighlight code={cloneNodeMethod} language="javascript" />
        
        <div className="heading2">
            <h3>Node.cloneNode() </h3>
        </div>
        <p><code className="markcode">Node.cloneNode()</code>method returns a duplicate of the node on which this method was
            called.</p>
    <CodeHighlight code={containsMethod} language="javascript" />
        

<div className="heading2">
    <h3>Node.contains() </h3>
</div>
<ul>
    <li><code className="markcode">Node.contains()</code>Basically it is used to search then id in the child, grandchild,great-grandchild, and so on.</li>
    <li>if the id present then it will boolean value true other wise false.</li>
    <li>But Remember you can search using Parent id.</li>
</ul>
    <CodeHighlight code={getRootNodeMethod} language="javascript" />
        

        <div className="heading2">
            <h3> Node.getRootNode() </h3>
        </div>
        <p><code className="markcode">Node.getRootNode() </code>The getRootNode() method of the Node interface returns the
            context object's root, which optionally includes the shadow root if it is available.</p>

            <CodeHighlight code={hasChildNodesMethod} language="javascript" />
        


        <div className="heading2">
            <h3>Node.hasChildNodes()</h3>
        </div>
        <p><code className="markcode">Node.hasChildNodes()</code> method returns a boolean value indicating whether the
            given Node has child nodes or not.</p>
        <p><strong>Note:</strong>Whitespace inside a node is considered as text nodes, so if you leave any white space
            or line feeds inside an element, that element still has child nodes.</p>

            <CodeHighlight code={hasChildNodesMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.isEqualNode() </h3>
        </div>
        <ul>
            <li><code className="markcode">Node.isEqualNode()</code> method tests whether two nodes are equal.</li>
            <li>They only return true/false.</li>
            <li>Two nodes are equal when they have</li>
            <ul>
                <li>Same <strong>nodeType  </strong> </li>
                <li>Same <strong>nodeName  </strong> </li>
                <li>Same <strong>nodeValue </strong> </li>
                <li>Same <strong>childNodes </strong> </li>
                <li>Same <strong>attributes </strong> </li>
                <li>Same <strong>attributes value </strong> </li>
            </ul>
        </ul>
    <CodeHighlight code={isEqualNodeMethod} language="javascript" />
        

<div className="heading2">
    <h3>Node.normalize() </h3>
</div>
<ul>
    <li>The <code className="markcode">Node.normalize()</code> method removes empty text nodes(if any TextNode is empty they remove it), and joins adjacent text nodes.</li>
    <li>The <code className="markcode">Node.normalize()</code> method is used to merge different TextNode into one node then append in create Element.</li>
</ul>
    <CodeHighlight code={normalizeMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.removeChild() </h3>
        </div>
        <p><code className="markcode">Node.removeChild()</code> method removes a child node from the DOM and returns the
            removed node.</p>
    <CodeHighlight code={removeChildMethod} language="javascript" />
        

        <div className="heading2">
            <h3>Node.replaceChild() </h3>
        </div>
        <p><code className="markcode">Node.replaceChild()</code>method replaces a child node within the given (parent) node.
            <br/>
            In Blow Example we take unorder list then create a element append it and then change the existing list by
            using replaceChild() methods.</p>
        <span className="outputh">Syntax :</span>
        <br/>
        <pre className="output">  Node.replaceChild(newElement,oldElement);</pre>

        <CodeHighlight code={replaceChildMethod} language="javascript" />
        

<h5 className="heading1" id="createElement">DOM Create Method</h5>
<br/>
    <h5 className="outputh">Three types of Create Methods in DOM :</h5>
<pre className="output"> <strong>1</strong> createElement()
 <strong>2</strong> createTextNode()
 <strong>3</strong> createComment()</pre>

<img src="../images/domcreate.png" alt="DOM Create Method"/>
        <p>Create a new elements in the DOM.</p>
        <p><code className="markcode">document.createElement()</code> Create New Element.</p>
        <p><code className="markcode">document.createTextNode()</code> Create Text Node.</p>
        <p><code className="markcode">document.createComment()</code> Create a Comment.</p>

        <CodeHighlight code={domcreateMethod} language="javascript" />
        <CodeHighlight code={replaceChildMethod} language="javascript" />
        


<p><code className="markcode">className:</code> The className property sets or returns the class name of an element </p>
<p><code className="markcode">innerText:</code> The innerText property sets or returns the text content of the specified node. </p>
<p><code className="markcode">innerHTML:</code> The innerHTML property sets or returns the HTML content of an element. </p>

<h1 className="heading1" id="appendmethod">DOM Append Methods</h1>
<div className="heading2">
    <h3> List of All Append Methods in JavaScript</h3>
</div>
<br/>
  <code className="markcode">let target = document.getElementById(&quot;demo&quot;);</code>
  <CodeHighlight code={domAppendMethod} language="javascript" />

        <img src="../images/append2.png" alt="append child" width="100%"/>
<div className="heading2">
    <h3> 1.appendChild()</h3>
</div>
<ul>
    <li><code className="markcode">appendChild()</code> we have create the first element and then textNode or create comment . Then text/comment can add in the element we used the appendChild() method.</li>
    <li>The <code className="markcode">appendChild()</code>method appends a node (element) as the last child of an element.</li>
    <li>It is also used to append in the body.</li>
</ul>
    <CodeHighlight code={appendChildMethod} language="javascript" />
        

<div className="heading2">
    <h3> 2.insertBefore()</h3>
</div>
<ul>
    <li>By Default append Element should be place in the last.</li>
    <li><code className="markcode">insertBefore()</code> method is used when wo change the location last to first position then we use insertBefore();.</li>
    <li>That means insertBefore() is used the insert new Element in the first location or your prefered location.</li>
    <li>But in <code className="markcode">appendChild()</code> new element is store after the existing element.</li>
    <li><code className="markcode">Node.insertBefore() </code> method inserts a node as a child, right before an existing child, which you specify.</li>
</ul>
    <CodeHighlight code={insertBeforeMethod} language="javascript" />
        

        <img src="../images/append3.png" alt="" width="100%"/>
        <img src="../images/append4.png" alt="" width="100%"/>

        <div className="heading2">
            <h3> 3.insertAdjacentElement()</h3>
        </div>
        <ul>
            <li><code className="markcode">insertAdjacentElement()</code> method is used to append the new create element in the existing element 
                <code className="markcode">beforeBegin</code>, 
                <code className="markcode">afterBegin</code>,
                <code className="markcode">beforeEnd</code>,
                <code className="markcode">afterEnd</code> is used.
            </li>
            <li>They only used to insert the element.</li>
        </ul>
    <CodeHighlight code={insertAdjacentElementMethod} language="javascript" />
        


        <div className="heading2">
            <h3> 4.insertAdjacentHTML()</h3>
        </div>
        <ul>
            <li>The  <code className="markcode">insertAdjacentHTML()</code>  method <b>inserts HTML code</b> into a specified position.</li>
        </ul><br></br>

               <table className="table-design" style={{"width":"100%","fontSize":"20px"}}>
<thead>
    <tr>
        <th>Value</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
<tr>
    <td>&nbsp;&nbsp;&nbsp;afterbegin</td>
    <td>After the beginning of the element (first child)</td>
</tr>
<tr>
    <td>&nbsp;&nbsp;&nbsp;afterend</td>
    <td>After the element</td>
</tr>
<tr>
    <td>&nbsp;&nbsp;&nbsp;beforebegin</td>
    <td>Before the element</td>
</tr>
<tr>
    <td>&nbsp;&nbsp;&nbsp;beforeend</td>
    <td>Before the end of the element (last child)</td>
</tr>
</tbody>
</table>
        <br/>
            <h5 className="outputh">Syntax:</h5>
            <pre className="output">  node.insertAdjacentHTML(position, text);</pre>
        <br/>
    <CodeHighlight code={insertAdjacentHTMLMethod} language="javascript" />
        

        <div className="heading2">
            <h3> 4.insertAdjacentText()</h3>
        </div>
        <ul>
            <li>The <code className="markcode">insertAdjacentText()</code> method <b>inserts a a text</b> into a specified position.</li>
        </ul><br/>
        <table className="table-design" style={{ width: "100%", fontSize: "20px" }}>
      <tbody>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;afterbegin</td>
          <td>After the beginning of the element (first child)</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;afterend</td>
          <td>After the element</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;beforebegin</td>
          <td>Before the element</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;beforeend</td>
          <td>Before the end of the element (last child)</td>
        </tr>
      </tbody>
    </table>
    <CodeHighlight code={insertAdjacentTextMethod} language="javascript" />
        

<h5 className="heading1" id="formevents">Form Events</h5>
<div className="heading2">
    <h3>JavaScript Form Events </h3>
</div>
    <CodeHighlight code={jsformEvents} language="javascript" />


<div className="heading2">
    <h3> onafterprint &amp; onbeforeprint</h3>
</div>
<h5 className="outputh">onafterprint</h5>
<p>This event is use to show the message before print the document.</p>
    <CodeHighlight code={beforeAfterMethod} language="javascript" />
        

<h5 className="outputh">onbeforeprint</h5>
<p>This event is used to show the message after print the document.</p>
    <CodeHighlight code={onbeforeprintMethod} language="javascript" />
        

<div className="heading2">
    <h3>focus() &amp; blur() </h3>
</div>
<ul>
    <li>The <code className="markcode">focus()</code> event occurs when you click on an input field and the field gets focused.</li>
    <li>The<code className="markcode">blur()</code>event occurs when you click away from an input field and the field loses focus.</li>
</ul>
    <CodeHighlight code={focusBlurMethod} language="javascript" />
        

<div className="heading2">
    <h3>input : oninput = "functionName()" </h3>
</div>

<ul>
    <li><code className="markcode">oninput</code> event occurs immediately after the value of an element has changed.</li>
    <li>When we change the value add/enter/remove then the oninput triggerd.</li>
    <li>onchange occurs when the element loses focus.</li>
</ul>
    <CodeHighlight code={inputonChangeMethod} language="javascript" />
        

<div className="heading2">
    <h3>Change Event : onChange = "FunctionName()";</h3>
</div>

<ul>
    <li><code className="markcode">Change Event</code> is occur when we loss the focus on the value.</li>
    <li>It is not triggered like input Event.</li>
    <li>It is work when you click in the another element or document.</li>
</ul>
    <CodeHighlight code={changeEvent} language="javascript" />
        

<div className="heading2">
    <h3>Submit Event : onSubmit = "functionName()"</h3>
</div>

<ul>
    <li><code className="markcode">Submit Event</code> is used in the form <code className="markcode">&lt;form onSubmit = &quot;functionName()&quot;&gt;</code> tag.</li>
    <li>It is occur when user submit the form.</li>
</ul>


<h5 className="heading1" id="bom">BOM</h5>
<div className="heading2">
    <h3>What is BOM? </h3>
</div>
<p>BOM is stand for Browser Object Model.</p>

<ul>
    <li>BOM the Browser mean the chrome,edge,opera,internet explorer,firefox browser layout.</li>
    <li>When we perform any action in the browser we used the <b>Window Object</b>.</li>
</ul>
<p><strong>By Using BOM &quot;Window&quot; Object,Benefit is</strong></p>
<ul>
    <li>Get Width & Height of Browser Window </li>
    <li>Open & Close Browser Window </li>
    <li>Move & Resize Browser Window </li>
    <li>Scroll to Browser Window </li>
    <li>Get URL, Hostname, Protocol of Browser Window </li>
    <li>Get History of Browser Window </li>
</ul>
<h5 className="heading1">DOM Window</h5>
        <p>The window object represents an open window in a browser.</p>

        <CodeHighlight code={domWindow} language="javascript" />
        

<div className="heading2">
    <h3>window.innerWidth; &amp; window.outerWidth;</h3>
</div>
<ul>
    <li><code className="markcode">window.innerWidth</code> Returns the interior width of the window in pixels.</li>
    <li>This includes the width of the vertical scroll bar, if one is present.</li>
    <li>window.innerWidth is used to measure the innerwidth of the x-axis.</li>
    <li><code className="markcode">onresize = "functionName()"</code> event is run when the size of the browser change.</li>
</ul>

<ul>
    <li><code className="markcode">window.outerWidth</code> Returns the width of the outside of the browser window.</li>
    <li>It represents the width of the whole browser window including sidebar (if expanded), window chrome and window resizing borders/handles.</li>    
    <li><code className="markcode">onresize = "functionName()"</code> event is run when the Height of the browser change.</li>
</ul>
        <p>To change the size of a window, see <code className="markcode">window.resizeBy()</code> and <code className="markcode">window.resizeTo()</code>.</p>

        <span className="outputh"></span>
    <CodeHighlight code={domWidth} language="javascript" />
        

<div className="heading2">
    <h3>window.innterHeight & window.outerHeight </h3>
</div>
<ul>
    <li><code className="markcode">window.innterHeight</code> The read-only innerHeight property of the Window interface returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.</li>
    <li><code className="markcode">window.outerHeight</code>The Window.outerHeight read-only
property returns the height in pixels of the whole browser window,
including any sidebar, window chrome, and window-resizing borders/handles.</li>
    <li><code className="markcode">onresize = "functionName()"</code> event is run when the Height of the browser change.</li>
</ul>
    <CodeHighlight code={domHeight} language="javascript" />
        

        <div className="heading2">
            <h3>window.open() &amp; window.close()</h3>
        </div>
        <ul>
            <li><code className="markcode">window.open()</code> is used to open the new window,open in existing window.</li>
        </ul>
        <span className="outputh">Syntax:</span>

<pre className="output">
    window.open(URL, name, specs, replace);
<strong className="red-color"> URL   </strong> : Link Where You Move
<strong className="red-color"> Name  </strong> : Any Name or _blank,_parent,_self,_top
<strong className="red-color"> specs </strong> : Width,Height,Left,Top
</pre>
    <CodeHighlight code={windowOpenClose} language="javascript" />
        

<p><code className="markcode">window.close()</code> is used to close the open window.</p>
<span className="outputh">Syntax:</span>
<pre className="output">  window.close();</pre>
    <CodeHighlight code={windowClose} language="javascript" />
        

<div className="heading2">
    <h3>window.moveTo(); &amp; window.moveBy(); </h3>
</div>

<ul>
    <li><code className="markcode">window.moveTo()</code> is used to move the open window in x-axis(left) &amp; y-axis(Top).</li>
    <ul>
        <li>moveTo() is move the new open window and count the left or right through by default from 0.</li>
        <li>They work only the new document not for url.</li>
        <li>left and right parameter is not insert.</li>
    </ul>
</ul>
    <CodeHighlight code={windowMoveToMoveBy} language="javascript" />
        
<ul>
    <li><code className="markcode">window.moveBy()</code>is used to move the open window in x-axis(left) &amp; y-axis(Top).</li>
        <ul>
        <li>But moveBy() is move the new open window and count the left or right through by where they present.</li>
    </ul>
</ul>
    <CodeHighlight code={windowMoveToMoveBy1} language="javascript" />
        


<div className="heading2">
    <h3>window.resizeTo() &amp; window.resizeBy() </h3>
</div>

<ul>
    <li><code className="markcode">window.resizeTo()</code> method is used to change the width and height of new open window. window.resizeTo() resizes a window to a new width and height. <br/> They only change the width and height of document.</li>
</ul>
    <CodeHighlight code={windowresizeToresizeBy} language="javascript" />
        
<ul>
    <li><code className="markcode">window.resizeBy()</code> method is used to resize the document. But they add the width or height with existing value.(means if the width already document is 100 then resize width is 150 they make the total document width is 250.</li>
</ul>
    <CodeHighlight code={windowresizeToresizeBy1} language="javascript" />
        


<div className="heading2">
    <h3>window.resizeTo() &amp; window.resizeBy() </h3>
</div>

<ul>
    <li><code className="markcode">window.resizeTo()</code> method is used to change the width and height of new open window. window.resizeTo() resizes a window to a new width and height. <br/> They only change the width and height of document.</li>
</ul>
    <CodeHighlight code={windowresizeToresizeBy2} language="javascript" />
        
<ul>
    <li><code className="markcode">window.resizeBy()</code> method is used to resize the document. But they add the width or height with existing value.(means if the width already document is 100 then resize width is 150 they make the total document width is 250.</li>
</ul>
    <CodeHighlight code={windowresizeToresizeBy3} language="javascript" />
        

<h5 className="heading1" id="scroll">Scroll Events</h5>

<pre className="output"> <strong>01</strong> window.pageXOffset   &amp;   window.pageYOffset
 <strong>02</strong> window.scrollX       &amp;   window.scrollY
 <strong>03</strong> window.scrollTo      &amp;   window.scrollBy</pre>

<div className="heading2">
<h3> window.pageXOffset & window.pageYOffset
    <span>
        <a href="#scrollevent"><i className="fas fa-link" aria-hidden="true"></i></a>
    </span>
</h3>
</div><br/>

           
<div className="heading2">
    <h3> window.scrollX &amp; window.scrollY </h3>
</div>

<p><code className="markcode">window.scrollX </code>The read-only scrollX property of the Window interface returns
    the number of pixels that
    the document is currently scrolled horizontally. This value is subpixel precise in modern
    browsers, meaning that it isn't necessarily a whole number.
    You can get the number of pixels the document is scrolled vertically from the scrollY property.
</p>
<CodeHighlight code={windowscrollX} language="javascript" />    
<p><code className="markcode">window.scrollY</code></p>
<CodeHighlight code={windowscrollY} language="javascript" />
        
<div className="heading2">
    <h3>window.scrollTo &amp; window.scrollBy </h3>
</div>
<br/>
<div className="success size">
<p> The main differance b/w scrollTo() and scrollBy() is the scrollTo() is count the x-axis and y-axis size to the above or blow from zero. <br/>
But the scrollBy() is count the scroll value where they stay.<strong></strong></p>
</div>
<ul>
    <li><code className="markcode">scrollBy()</code> method is used to scroll the element in x-axis and y-axis.</li>
    <li>You can also give value in the &quot;<b>-</b>&quot;.</li>
    <li>By Default value is Positive.</li>
</ul>
<span className="outputh"></span>
    <CodeHighlight code={windowscrollTo} language="javascript" />
<ul>
    <li><code className="markcode">window.scrollBy</code>method scrolls the document in the window by the given amount.</li>
</ul>
    <CodeHighlight code={windowscrollBy} language="javascript" />
    <CodeHighlight code={windowscrollByoutput} language="javascript" />


<h5 className="heading1" id="location">Window Location</h5>
<div className="heading2">
    <h3>Location Object </h3>
</div>

<ul>
    <li>The <code className="markcode">location</code> Object contains information about the current URL,hash,host,hostname,href,origin,pathname,port,protocol,search.</li>
</ul>
<p>Write the blow command you can see all the parameter.</p>
    <CodeHighlight code={windowLocation} language="javascript" />
        

<div className="heading2">
    <h3>Location Object Methods</h3>
</div><br></br>
<table className="table-design" style={{ width: "100%", fontSize: "20px" }}>
      <tbody>
        <tr>
          <th style={{ width: "20%" }}>Method</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>&nbsp;assign()</td>
          <td>Loads a new document</td>
        </tr>
        <tr>
          <td>&nbsp;reload()</td>
          <td>Reloads the current document</td>
        </tr>
        <tr>
          <td>&nbsp;replace()</td>
          <td>Replaces the current document with a new one and clears back history. You cannot go back</td>
        </tr>
      </tbody>
    </table>
    <CodeHighlight code={LocationObjectMethods} language="javascript" />
        
<h5 className="heading1" id="history">History Object</h5>

<div className="heading2">
    <h3> window.history; | History API</h3>
</div>
<p>is used in to find the history and go forward and backword to the page.</p>
<span className="outputh">Syntax:</span>
<pre className="output">
    history.back()         - same as clicking back in the browser
    history.forward()      - same as clicking forward in the browser
    window.history.go(1)   - Go to next one page
    window.history.go(-1)  - Go to previous one page
</pre>
<p>In blow example you can see that we take two function one function work with history back and other function work with history forward to page.
</p>
    <CodeHighlight code={HistoryAPI} language="javascript" />
        
<div className="heading2" id="navigator">
    <h3> window.navigator; | Web API</h3>
</div>
<p>The navigator object contains information about the browser. <br/>
    <button><a href='https://www.tutorialrepublic.com/javascript-tutorial/javascript-window-navigator.php' target="_blank">See More Details</a></button></p>
<span className="outputh">Detect Browser in JavaScript </span>
    <CodeHighlight code={windownavigator} language="javascript" />
 
        <div className="Short-head">
            <h3> window.body </h3>
        </div>
        <p>is used to get the body of the document.</p>
        <span className="outputh">Syntax:</span>
    <CodeHighlight code={windowbody} language="javascript" />
        
        <div className="Short-head">
            <h3> window.frameElement </h3>
        </div>
        <p>The frameElement property is used when the user click on the button then iframe element show it.</p>
        <span className="outputh">Syntax:</span>
    <CodeHighlight code={windowframeElement} language="javascript" />
        

        <div className="Short-head">
            <h3> window.frames </h3>
        </div>
        <p>The frames property is used to change the iframe link given the location of iframe element.
            It work with index No start with 0. </p>
        <p><code className="markcode">window.frames</code> return you the array
            like object and you can pass the index no to acess to specific value.</p>
        <span className="outputh">Syntax:</span>
        <pre className="output"> window.frames[0].location;</pre>
    <CodeHighlight code={windowframes} language="javascript" />
        

<h5 className="heading1" id="storage">Local Storage &amp; Session Storage in JavaScript</h5>

<div className="heading2">
    <h3> What is the difference between sessionStorage and localStorage?</h3>
</div>
<p>The main difference between <code className="markcode">sessionStorage</code> &amp; <code
        className="markcode">localStorage</code> is that the sessionStorage data is earase after the page close or
    page refresh.But
    the localStorage data is still present.In Most of the browser support localStorage.In localStorage data is
    saved in the browser console press <code className="markcode">F12</code> then go to <code
        className="markcode">Application</code>
    Section see the option on left side localStorage or sessionStorage.</p>
<p>&nbsp;</p>
<div className="heading2">
    <h3> Check Browser Support localStorage or Not ?</h3>
</div>
    <CodeHighlight code={checkLocalStorage} language="javascript" />
        

        <div className="heading2">
            <h3>localStorage</h3>
        </div>
        <p>localStorage is a property that allows JavaScript sites and apps
            to save key-value pairs in a web browser with no expiration date.
            This means the data stored in the browser will persist even after
            the browser window is closed.
        </p>

        <p>To use <code className="markcode">localStorage</code> in your web applications,
            there are five methods to choose from:</p>

        <p><code className="markcode">setItem()    :</code>Add key and value to localStorage </p>
        <p><code className="markcode">getItem()    :</code>This is how you get items from localStorage </p>
        <p><code className="markcode">removeItem() :</code>Remove an item by key from localStorage </p>
        <p><code className="markcode">clear()      :</code>Clear all localStorage </p>
        <p><code className="markcode">key()        :</code>Passed a number to retrieve the key of a localStorage</p>
        <p>&nbsp;</p>

        <div className="Short-head">
            <h3>setItem()</h3>
        </div>
        <p><code className="markcode">setItem()</code> is used to set the key-value in the localStorage.It take two
            parameter
            <u>parameter1</u> is the name of the key and <u>parameter2</u> is the value of the key you can store it.
        </p>
    <CodeHighlight code={setItemlocalStorage} language="javascript" />
        
        <br/>
        <p><strong>How to Store the Object in localStorage &amp; retrieve the string then string should be convert into
                Object?</strong></p>
    <CodeHighlight code={setItemlocalStorage2} language="javascript" />
        
  
        <div className="Short-head">
            <h3>getItem()</h3>
        </div>
        <p>This method is used to value get from localStorage by giving the key parameter.getItem() only accept the
            index/key parameter.</p>
    <CodeHighlight code={getItemlocalStorage} language="javascript" />
        
        <div className="Short-head">
            <h3>removeItem() </h3>
        </div>
        <p>removeItem() is used to remove the only specific item from localStorage where
            you have pass the key in this methods.If you pass the key as a string in localStorage
            then removeItem(string) &amp; if you remove the integer index value then you not
            pass the string just write the name of key.</p>
    <CodeHighlight code={removeItemlocalStorage} language="javascript" />
        

        <div className="Short-head">
            <h3>clear() </h3>
        </div>
        <p>This method is used to clear the all key and value from localStorage.</p>
    <CodeHighlight code={clearlocalStorage} language="javascript" />
        

        <div className="Short-head">
            <h3>key() </h3>
        </div>
        <p>The key() method comes in handy in situations where you need to loop through keys and allows you to pass a
            number or index to localStorage to retrieve the name of the key.</p>
    <CodeHighlight code={keylocalStorage} language="javascript" />
        

        <div className="heading2">
            <h3>Enable Dark Mode in JavaScript Using localStorage </h3>
        </div> <br/>
        <span className="outputh">HTML FILE:</span>
        <CodeHighlight code={EnableDarkhtml} language="javascript" />

        <span className="outputh">CSS FILE:</span>
    <CodeHighlight code={EnableDarkcss} language="javascript" />

        <span className="outputh">JavaScript FILE:</span>
    <CodeHighlight code={EnableDarkjs} language="javascript" />
        
        <h5 className="heading1" id="JSON">JavaScript JSON</h5>
        <p> JSON is a format for storing and transporting data.<br/>
            JSON is often used when data is sent from a server to a web page.</p>
        <div className="success size">
            <p><strong>JSON</strong> stands for JavaScript Object Notation.<br/>
                <strong>JSON</strong> is a lightweight data interchange format.<br/>
                <strong>JSON</strong> is language independent *<br/>
                <strong>JSON</strong> is "self-describing" and easy to understand.
            </p>
        </div>
        <p><code className="markcode">JSON.stringify</code> to convert the object into a JSON or JavaScript string.</p>
        <p><code className="markcode">JSON.parse()</code> to convert the string or JSON into a JavaScript object.</p>

        <CodeHighlight code={jsJSON} language="javascript" />

        <h5 className="heading1" id="oop">Object Oriented Programming in JavaScript | OOP
        </h5>

        <div className="heading2">
            <h3> How to create an Object in JavaScript?</h3>
        </div>
    <CodeHighlight code={createObject} language="javascript" />
        

        <div className="heading2">
            <h3> JavaScript Class and Object Create</h3>
        </div>
        <p>You can create the multiple Methods in the one class</p>
    <CodeHighlight code={ClassObjectCreate} language="javascript" />
        
        <p><strong> Types of Methods </strong></p>
        <ul>
            <li>Constructor</li>
            <li>Prototype</li>
            <li>Static</li>
        </ul>


        <p className="marku">Constructor</p>
        <p><code className="markcode">Constructor() </code> is basically used when we create the Constructor
            it should be automatically call when you create the object or pass the value in the object. <br/>
            If you create the Constructor then just use <code className="markcode">Constructor</code> method name.</p>
        <div className="success size">
            <p><i className="fas fa-check-circle"></i> Note : JavaScript A class cannot have more than one constructor()
                method.</p>
        </div>
        <ul>
            <li>No Return Type</li>
            <li>All classes have constructor by Default: if you don't create a class constructor yourself.
                JavaScript create one for you.However,then you are not able to set initial values for object
                Attributes</li>
        </ul>
        <div className="heading2">
            <h3> Types of Constructor</h3>
        </div>
        <p>Two Types of Constructor<br/>
            <strong> 01 . Parameterized Constructor </strong>those constructor whoes pass the parameter.<br/>
            <strong> 02 . Default Constructor </strong> those constrcutor whoes no pass parameter it should default
            call if any error in the parameterized constructor.
        </p>
        <p><code className="markcode">new keyword</code> is used to create the object.</p>

        <CodeHighlight code={typeConstructor} language="javascript" />
        
        <div className="heading2">
            <h3> Getter and Setter Method,Functions in Object Literals,Prototype</h3>
        </div>
        <p><code className="markcode">Prototype </code> is the method that we have to need call. </p>
        <p><code className="markcode">get </code> is keyword is used for get value from object mean used for getter. </p>
        <p><code className="markcode">set </code> is keyword is used for set the value in the object mean used for setter.
        </p>
    <CodeHighlight code={gettersetter} language="javascript" />
        

        <p className="marku">Static Keyword in Methods</p>
        <p><code className="markcode">Static </code> method is used to create the methods those who has no need
            to create the Object, It should be <u>call</u> without creating Objects.<br/> If you create the static
            methods then simply add the <code className="markcode">static</code> keyword with the methods then those method become
            static.</p>
    <CodeHighlight code={staticKeywordMethod} language="javascript" />
        
        <div className="heading2">
            <h3> Class Inheritance in JavaScript</h3>
        </div>
        <p><code className="markcode">extends</code> Keywords in use to inherit class</p>
        <p><code className="markcode">super();</code> keyword is used to call the Base|Parent class properties in
            Base|Derived class.</p>
    <CodeHighlight code={classInheritance} language="javascript" />
        


        <div className="heading2" id="modules">
            <h3> Modules in JavaScript </h3>
        </div>
        <ul>
            <li>Modules is the technique which is develop in ES6 Version.</li>
            <li>In Which we have two files of JavaScript If we use one file function variable , Classes to other JavaScript file then we Import or Export the file.</li>
            <li>Benefit is code Reuse.</li>
        </ul>
        <img src="../images/module.png" alt="module"/>

        <ul>
            <li><b>Transfer variables,function,class </b> by writing before export like <code className="markcode">export let a = 10;</code></li>
            <li><b>import variables,function,class</b> use</li>
            
        <CodeHighlight code={importVariableFunc} language="javascript" />

            <li><b>Module</b> is working on the Live Server or Local Xampp Only.</li>
            <li>you can import the class,function,varibales in the single like like.</li>
        <CodeHighlight code={importVaribleFuncClass} language="javascript" />
        </ul><br/>
        <img src="../images/createmodule.png" alt="create module" align="center"/>

        <ul>
            <li>First Run Xampp Server then make a folder and add two files of Js.</li>
            <li>Then Files2.js export variables.</li>
            <li>File1.js is the import these variables by name.</li>
            <li>In HTML you add the <code className="markcode">script</code> type="module" and file pathname is file1.js</li>
        </ul><br/>
        <img src="../images/modulecode.png" alt="module code" style={{"objectFit": "cover","width":"100%"}}/>

        <CodeHighlight code={moduleinJS} language="javascript" />
        


<h1 className="heading1" id="promises"> Promises </h1>

<div className="heading2">
    <h3>Promise </h3>
</div>
<pre className="output">
 promise() =&gt; resolve()  =&gt; then()    // if Promise fulfiled <br></br>
 promise() =&gt; reject()   =&gt; catch()   // if promise is rejected <br></br>
</pre>
    <CodeHighlight code={Promises} language="javascript" />
        

        <p><strong className="outputh">Syntax : </strong></p>

        <ul>
            <li>In blow example you can see how the resolve/reject work.</li>
            <li>If your condition is true then you can call the <code className="markcode">resolve()</code> method.</li>
            <li>If the condition is false then you use the <code className="markcode">reject()</code> method.</li>
        </ul>
    <CodeHighlight code={PromisesSyntax} language="javascript" />
        
        <div className="Short-head">
            <h3>Examples</h3>
        </div>
        <p><strong>Example 02 Note:</strong></p>
        <ul>
            <li>In this example 02 we can make a function name "prom".</li>
            <li><code className="markcode">prom()</code> function take a parameter as the condition.</li>
            <li>function return if the condition is true then return <code className="markcode">resolve()</code> method</li>
            <li>if condition is false then function return the <code className="markcode">reject()</code> methods.</li>
        </ul>
        <p><strong>Example 04 Note:</strong></p>
        <ul>
            <li>First we create the function name "prom()" and its take a parameter.</li>
            <li>In return section we return the promise that resolve or reject.</li>
            <li>In setTimeout() we make the condition .if the condition is true then they show resolve part.</li>
        </ul>
    <CodeHighlight code={PromisesExample} language="javascript" />
        


<div className="heading2" id="AJAX">
    <h3>Fetch Data in Promise Using AJAX </h3>
</div>

<ul>
    <li>First we add the CDN of AJAX/JQuery in html file Header.</li>
    <li><code className="markcode">$.get("url",function(data);</code> is used to fetch the data from server in AJAX/JQuery.</li>
</ul>
    <CodeHighlight code={fetchdataAJAX} language="javascript" />
        

        <div className="heading2">
            <h3>Promise.all() </h3>
        </div>
        <ul>
            <li><code className="markcode">Promise.all()</code> is used when you have multiple promise that run then you can use the Promise.all() method.</li>
            <li>But Remember if the one promise is false then the catch message will be
            display.</li>
        </ul>
        <img src="../images/promiseall.png" alt="Promise All"/>
        <CodeHighlight code={promiseAll} language="javascript" />
            

<h5 className="heading1" id="ajax">JavaScript AJAX</h5>
<ul>
    <li><strong>AJAX</strong> = Asynchronous JavaScript And XML.</li>
    <li>AJAX is a technique for creating fast and dynamic web pages.</li>
    <li>By using AJAX we can change the data of specific part of web page.</li>
    <li>AJAX is not a programming language.</li>
    <li>AJAX just uses a combination of:</li>
    <ul>
        <li>A browser built-in <code className="markcode">XMLHttpRequest</code> object (to request data from a web server)</li>
        <li>JavaScript and HTML DOM (to display or use the data)</li>
    </ul>
</ul>
<div className="success size">
<p><strong> Note: </strong>AJAX applications might use foramt to transport data;<br/>
Text File<br/>
XML Data<br/>
JSON Data</p>
</div>
<div className="heading2">
    <h3> XMLHttpRequest (XHR) Object </h3>
</div>
<p>The <code className="markcode">XMLHttpRequest</code> object can be used to exchange data with a  web server behind the scenes.This means that it is possible to update parts of a web page, without reloading the whole page.</p>

<CodeHighlight code={XMLHttpRequest} language="javascript" />
        
<div className="heading2">
    <h3>readyState</h3>
</div>
<p>In the <code className="markcode">readyState</code> has 5 steps.</p>

<div className="notecard note">
    <p><strong>0</strong> Request Not Initialized</p>
    <p><strong>1</strong> Server Connection Eastablished b/w local &amp; server</p>
    <p><strong>2</strong> Request Received</p>
    <p><strong>3</strong> Processing Request</p>
    <p><strong>4</strong> Request Finished and Response is Ready</p>
</div>

        <p> When the Request finished and Server Response is Ready then it <b>return two thing;</b> </p>
<ol>
    <li><code className="markcode"> status </code></li>
    <li>If we <u>Request</u> the <b>Text</b> then server Response we received <code className="markcode">responseText</code></li>
    <li>If we <u>Request</u> the <b>XML</b> then server Response we received <code className="markcode">responseXML</code></li>
</ol>
<div className="heading2">
    <h3>Status</h3>
</div>
<p>It is return code that the response come from server is proper or not.</p>
<p> http status code : <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank"><i className="fas fa-link"></i></a></p>
 <pre className="output">
 200 : Ok
 403 : Forbidden
 404 : Page Not Found
</pre>

<div className="heading2">
    <h3> Send a Request </h3>
</div>
<ul>
    <li>To send/receive a request to a server, you can use</li>
    <ul>
        <li><code className="markcode">open()</code></li>
        <li><code className="markcode">send()</code></li>
    </ul>
    <li>open() method accept three parameter.</li>
</ul>
    <CodeHighlight code={SendaRequest} language="javascript" />
        

        <div className="heading2">
            <h3> Code Of Load File USING JavaScript XMLHttpRequest() AJAX </h3>
        </div>
<div className="success size">
<p><strong>onreadystatechange :</strong> property specifies a function to be executed every time the status of the XMLHttpRequest object changes.</p>
<p><strong>readyState :</strong> When readyState property is 4 and the status property is 200, the response is ready</p>
<p><strong>responseText :</strong>property returns the server response as a text string.</p>
<p className="red-color">Use Live Server like XAMPP OR WAMPP is used.</p>
</div>
    <CodeHighlight code={JavaScriptXMLHttpRequest} language="javascript" />

<p><strong>Response in using HTML</strong></p>
    <CodeHighlight code={JavaScriptXMLHttpRequestResponseHTML} language="javascript" />

<h5 className="heading1" id="fetch-api">JavaScript Fetch API</h5>
<div className="heading2">
    <h3> Fetch API </h3>
</div>
<ul>
    <li>The Fetch API interface allows web browser to make HTTP requests to web servers.</li>
    <li>😀 No Need of the XMLHttpRequest anymore.</li>
    <li>By using Fetch API you can do insert,update,Delete,Read Data from Server.</li>
    <li>Fetch Method is Faster the XMLHTTPRequest.</li>
</ul>
    <div className="success size">
        <p><i className="fas fa-check-circle"></i> Fetch() Method Work on Live Server.</p>
    </div>
        <ul>
        <li><code className="markcode">text()</code> is used for text File.</li>
        <li><code className="markcode">JSON()</code> is used for JSON File.</li>
        <li><code className="markcode">blob(), formData() and arrayBuffer() </code> to handle the respective type of data.
        </li>
    </ul>
    <CodeHighlight code={fetchAPIJS} language="javascript" />
        

        <div className="heading2">
            <h3>Example of Fetch API</h3>
        </div>
    <CodeHighlight code={fetchAPIExample} language="javascript" />
        

<div className="heading2">
    <h3> Check Browser Support Fetch() or Not </h3>
</div>
    <CodeHighlight code={CheckBrowserSupportFetch} language="javascript" />
        

<div className="heading2">
<h3>Fetch() - insert,update,Delete Data
    <span>
        <a href="https://jsonplaceholder.typicode.com/guide/" target="_blank">
            <i className="fas fa-link" aria-hidden="true"></i>
        </a>
    </span>
</h3>
</div>
<ul>
    <li><code className="markcode">method: 'POST'</code> is used to send Data on Server.</li>
    <li><code className="markcode">method: 'PUT'</code> is used to update Data on Server.</li>
    <li><code className="markcode">method: 'Delete'</code> is used to Delete the Data on Server.</li>
    <li><code className="markcode">method: 'GET'</code> is used to Read the Data on Server.</li>
    <li><code className="markcode">body:</code> is used for data you are sent to the server.</li>
    <li><code className="markcode">header:</code> is used that we send the data to server what formate we used.</li>
    <ul>
    <li><code className="markcode">'Content-Type': 'application/json; charset=UTF-8',</code> is used for the data basically JSON Data but it depend on body:data,</li>
    <li><code className="markcode">'Content-Type': 'application/x-www-form-urlencoded',</code> is used for the body data is form data.</li>
    </ul>
</ul>
    <CodeHighlight code={fetchInsertUpdatDelete} language="javascript" />
         <div className="heading2">
            <h3> Fake Data Fill in Fetch() </h3>
        </div>
    <CodeHighlight code={fakeDataFill} language="javascript" />
        
        <div className="heading2">
            <h3> Fake Data Send using Form </h3>
        </div>
    <CodeHighlight code={FakeDataSendusingForm} language="javascript" />
    
        <div className="heading2">
            <h3> Fake Data Send using Form But Not use Object</h3>
        </div>
    <CodeHighlight code={FakeDataSendusingForm1} language="javascript" />
        
<div className="heading1" id="async-await">
<h5>JavaScript Async &amp; await</h5>
</div>
<div className="heading2">
    <h3> Async </h3>
</div>
<ul>
    <li>When we used the <code className="markcode">async</code> before function start then the function is return promise.</li>
    <li>In Promise we create the object then use promise.</li>
    <li>But the Async is easy to use you can just write the first <code className="markcode">Async</code> to function then function work as a promise.</li>
    <li>If the promise resolve then <code className="markcode">then()</code> function run.</li>
    <li>If the promise reject then <code className="markcode">catch()</code> function run.</li>
</ul>
    <CodeHighlight code={JavaScriptAsync} language="javascript" />
        

<div className="heading2">
    <h3> await </h3>
</div>
<ul>
    <li>The <code className="markcode">await</code> keyword can only be used inside an <code className="markcode">async</code> function.</li>
    <li><code className="markcode">await</code>await makes a function wait for a Promise.</li>
    <li>If you use the async keyword before a function definition, you can then use await within the function.</li>
    <li> When the await is used in function, after the await function code not run and outer code is run. When the promise is ok then next code will be run.</li>
    <li>If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown.</li>
</ul>
<div className="success size">
    <p><i className="fas fa-check-circle"></i> await is used to fetch the data from server for wait</p>
</div>
    <CodeHighlight code={JavaScriptawait} language="javascript" />
        
<div className="heading2" id="uploadimg">
    <h3>Upload Image Preview in JavaScript </h3>
</div>

<p><strong className="outputh">HTML File :</strong></p>
 <CodeHighlight code={UploadImagePreviewhtml} language="javascript" />
<p><strong className="outputh">Method 01 : JavaScript</strong></p>
<CodeHighlight code={UploadImagePreviewjs} language="javascript" />    
<p><strong className="outputh">Method 02 :</strong></p>
<CodeHighlight code={UploadImagePreviewMethod02} language="javascript" />
        
                </div>
                <Footer />
                <MoveTop />
            </div>
            )
        }
        </>
    );
}