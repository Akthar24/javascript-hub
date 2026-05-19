//  1.Basic Javascript code 

// var name = "Barvesh Akthar"
// let age = 22
// const city = "Madurai"
// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(city));


// OPERATORS
// 2.Swap two numbers without using a third variable

// let a = 10;
// let b = 20;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);


//  3.Normal Swap Two numbers program

// let a = 10;
// let b = 20;
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

//  4.Find Reminder using %

// let a = 10;
// let b = 3;
// let div = a/b;
// let rem = a%b;
// console.log(div);
// console.log(rem);

//  CONDITIONAL STATEMENTS
//  5.Find the Positive ,Negative and Zero using a Condititonal Statements

// let num = 0;
// if(num > 0){
//     console.log("Positive");
// }
// else if(num < 0){
//     console.log("Negative")
// }
// else{
//     console.log("Zero");
// }


//  6.Check whether the number is Even or Odd

// let num = 3;
// if(num % 2 == 0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }


//  7.To find the greatest Among Three numbers

// let num1 = 700;
// let num2 = 1000;
// let num3 = 300;
// if(num1 > num2 && num1 > num3){
//     console.log(num1+" is the greatest number");
// }
// else if(num2 > num1 && num2 > num3){
//     console.log(num2+" is the greates number");
// }
// else{
//     console.log(num3+" is the greatest number");
// }

//  8.Check the Voting Eligibility

// let age = 19;
// if(age >= 18){
//     console.log("Age "+age+" has Eligible to cast the vote");
// }
// else{
//     console.log("Age "+ age + " does not have the Eligibility to cast the vote");
// }
   

//  9.Grade Calculator using Marks

// let marks = 75;
// switch(true){
//     case marks >= 90:
//         console.log("Grade O");
//         break;
//     case marks >= 80:
//         console.log("Grade A");
//         break;
//     case marks >= 70:
//         console.log("Grade B");
//         break;
//     case marks <= 50:
//         console.log("Grade C");
//         break;
//     case marks <= 35:
//         console.log("RA");
//         break;
//     default:
//         console.log("Passed");
// }


          //OR


// function calculateStudentgrade(marks){
//     let totalmarks = marks.reduce((sum,mark)=>sum+mark,0);
//     let average = totalmarks/marks.length;
//     let grade;
//     if(average>=90){
//         grade = 'A+';
//     }
//     else if(average >= 80){
//         grade = 'A';
//     }
//     else if(average >= 70){
//         grade = 'B';
//     }
//     else if(average >= 60){
//         grade = 'C';
//     }
//     else if(average >= 50){
//         grade = 'D'
//     }
//     else{
//         grade='F'
//     }

//     return{
//         total:totalmarks,
//         average:average,
//         grade:grade,
//         status:average >= 50 ? "Pass" : "Fail"

//     };

// }
// const studentmarks = [85,95,75,85,97];
// const result = calculateStudentgrade(studentmarks);

// console.log(`Total: ${result.total}, Avg: ${result.average}%, Grade: ${result.grade}, Result: ${result.status}`);

//  LOOPS
//  10.Print Numbers from 1 to 10

// let num = 10;
// for(let i=1;i<=num;i++){
//     console.log(i); // To Print the output Vertically
//     process.stdout.write(i + " "); // To Print the output Horizonatally
// }

//  11.Print Even Numbers from 1 to 100

// let num = 100;
// for(let i=1;i<=num;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//  12.Factorial of a Number 

// let num = 5;
// let fact=1;
// for(let i=1;i<=num;i++){
//     fact = fact * i;
// }
// console.log(fact);


//  13.Reverse a Number

// let arr = [4,5,6,7,8];
// for(let i=arr.length-1;i>=0;i--){   
//     console.log(arr[i]);
// }

    //Or(Reverse a number without an Array)

// let num = 12345678;
// let reversed = 0;
// while(num>0){
//     let lastdigit = num % 10; //Get the Last Digit
//     reversed = (reversed*10)+lastdigit; //Add it to reversed number
//     num = Math.floor(num/10); //Remove the Last Digit from the Orginal Number
// }
// console.log(reversed);


//  14.Print Multiplication Table

// let num = 10;
// let num1 = 2;
// let mul;
// for(let i =1;i<=num;i++){
//     mul = i*num1;
//     console.log(mul);
// }

//  15.Find sum of first n numbers

// let num = 10;
// let sum =0;
// for(let i=1;i<=num;i++){
//     sum+=i;
//     console.log(sum);
// }

    // OR(Without Loop)

// let num = 10;
// let sum = (num*(num+1))/2;
// console.log(sum);


// FUNCTIONS

//  16.Create a Function to add two numbers

// function addnumbers(a,b){
//     let sum = a+b;
//     console.log(sum);
// }
// addnumbers(10,20);


//  17.Create a function to find Square of a number

// function square(num){
//     let res = num*num;
//     console.log(res);
// }
// square(5);

//  18.Create a arrow Function for multiplication


// let mul = (a,b)=> {
//     return a*b;
// }
// let res = mul(2,3);
// console.log(res);


//  19.Create a Function wwith default parameter

// function sample(name="Hi"){
//     console.log("Hello "+name);
// }
// sample();

//  20.Create Recursive factorial function


// function factorial(n){
//     if(n==0 || n==1){
//         return 1;
//     }
//     return n*factorial(n-1);
    
// }
// console.log(factorial(5));


//  ARRAYS
//  21. Create a Array of five Elements

// let arr = [1,2,3,4,5];

//    // OR

// let arr1 = new Array(5);

//  22.Print the Array elements using loop

// let arr = [1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//  23.Find Largest Number in an Array

// let arr = [1,2,3,4,5];
// let max = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);

//  24.Find Smallest Element in an Array

// let arr = [1,2,3,4,5]
// let small = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]<small){
//         small = arr[i];
//     }
// }
// console.log(small);


//  25.Add a element in an array using push()

// let arr=[1,2,3,4,5]
// arr.push(6);
// console.log(arr);


//  26.Add a element to a array in specific index --> splice()

// let arr=[1,2,3,4,5]
// arr.splice(5,0,6) //--> (Index where you want to insert,Items to delete,Item to add)
// console.log(arr);


//  27.Remove the element using pop()

// let arr=[1,2,3,4,5]
// arr.pop(5); 
// // OR pop(arr[5])
// console.log(arr);


//  28.Reverse an Array

// let arr=[1,2,3,4,5];
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }

// 29.Sort the Array Elements

// let arr=[5,4,7,6,8,2,3,1];
// let result;
// for(let i=0;i<arr.length;i++){
//     result = arr.sort();
// }
// console.log(result);


//  STRINGS
//  30.Count length of String

// let str = "Hello";
// console.log(str.length);

//  31.Convert String to Uppercase

// let str = "Hello";
// console.log(str.toUpperCase());

//  32.Reverse a String 

// let str = "Hello";
// let newstr="";
// for(let i=str.length-1;i>=0;i--){
//     newstr += str[i];
// }
// console.log(newstr);

//  33.Check palindrome String

 
// let str = "madam";
// const len = str.length;
// let isPalindrome = true;
// for(let i=0;i<len/2;i++){
//   if(str[i] != str[len-1-i]){
//     isPalindrome=false;
//     break;
//   }
// }
// if(isPalindrome){
//   console.log("Palindrome");
// }
// else{
//   console.log("Not a Palindrome");
// }


//  34.Check Vowels in a String

// let str = "hllll";
// let vowels = "AEIOUaeiou";
// let hasvowels = false;
// for(let i=0;i<str.length;i++){
//   if(vowels.includes(str[i])){
//     hasvowels=true;
//     break;
//   }
// }
// if(hasvowels){
//   console.log("The string contains Vowels");
// }
// else{
//   console.log("The string does not contains Vowels");
// }


//  35.Count the vowels in the String

// let str = "hello";
// let count = 0;
// let vowels = "AEIOUaeiou";
// for(let i=0;i<str.length;i++){
//   if(vowels.includes(str[i])){
//     count++;
//   }
// }
// console.log(count);


//  OBJECTS
//  36.Create Objects 

// const student = {
//   name:"Barvesh Akthar",
//   age:21
// }
// console.log(student.name);
// console.log(student["age"]);


//  37.Add a Properties to the object Dynamically

// const student = {
//   name:"Barvesh Akthar",
// }
// student.age=21;
// console.log(student)

// 38.Access object values using dot notation and bracket notation

// const student = {
//   name:"Barvesh Akthar",
//   age:21
// }
// console.log(student.name); // Dot Notation
// console.log(student.age);  // Dot Notation
// console.log(student["name"]); // Bracket Notation
// console.log(student["age"]);  // Bracket Notation


//  39.Create Object Method

// const person ={
//   name:"Guru",
//   age:21,
//   greet:function(){
//     console.log("Hi,I am "+this.name);
//   }
// };
// person.greet();

//  40.Use this keyword inside object

// const person ={
//   name:"Barvesh Akthar",
//   greet(){
//     console.log("Hello "+this.name);
//   }
// }
// person.greet();

//  Async/Await
//  41.Create a Simple Promise

// const mypromise = new Promise((resolve,reject) =>{
//         setTimeout(()=>{ 
//           resolve("Promise completed")
//         },2000);
// });
// mypromise.then((data)=>{
//   console.log(data);
// });

//  42.Use Resolve 

// const promise = new Promise((resolve,reject)=>{
//      resolve("Resolve completed");
// });
// promise.then((data)=>{
//   console.log(data);
// });

//  43.Use Reject

// const promise = new Promise((resolve,reject)=>{
//   reject("Rejected");
// });
// promise.catch((error)=>{
//   console.log(error);
// });

//  44.Handle Promise using .then() and .catch()

// function fetchData(success){
//   return new Promise((resolve,reject)=>{
//       if(success){
//         resolve("Data Recieved");
//       }
//       else{
//         reject("Data not Recieved");
//       }
//     });
// }
// fetchData(true)
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch((error)=>{
//     console.log(error);
//   });


//  45.Convert Promise to async/await

// function office(success){
//   return promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      if(success){
//       resolve("Please come to office")
//      }
//      else{
//       reject("Do not come to office");
//      }
// },2000);
// });
// }
// async function permission(){
//   try{
//     const result = await office(false);
//     console.log(result);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// permission();


//  ERROR HANDLING
//  46.Use Try...catch...

// try{
//   let result = 10 / 0;
//   console.log(a);
// }
// catch(error){
//   console.log("Error occured,Divide by Zero Error");
// }


//  47.Create custom error using Throw

function divide(a,b){
  if(b==0){
    throw new Error("Cannot Divide by Zero");
  }
  return a/b;
}
try{
  console.log(divide(10,0));
}
catch(error){
  console.log(error.message);
}