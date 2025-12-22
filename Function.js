//Function: 

//Function is block  of reusable code that performs a specific Task.Instead of Writing a same code again and again,you can write it once inside a function and call whenever needed.

// function greet(){
//     console.log("Hello,Welcome to Chainsys");
// }
// greet();

//Output: Hello,Welcometo Chainsys

// OR(Using return - return can be used only inside a function)

// function greet(){
//     return"Hello World!"
// }
// console.log(greet());

//Output:Hello world!

//1.Normal Function

// function add(a,b){
//     console.log(a+b);
// }
// add(2,5);                    //Output: 7

        //(OR)

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,5));       //Output: 7

//2.Function with parameter

// function multi(a,b){
//     return a*b
// }
// console.log(multi(2,7));     //Output:14

//3.Function With Return Value

// function square(a){
//     return a*a
// }
// let result = square(5);
// console.log(result);         // Output:25


//4.Anonymous Function(A Function without name is stored in a variable)

// let greet = function(){
//     console.log("Hello!");
// }
// greet();                    //Output: Hello!


//5.Arrow Function

// const sum = (a,b) => a+b;

// console.log(sum(2,5));     //Output:7

         //OR

// const sum = (a,b) =>{
//     return a+b;
// }
// console.log(sum(2,5));     //Output:7

//6.Function Expression(Function Stored inside a variable)

// let sayHi = function(){
//     console.log("Hiiiii!");
// }
// sayHi();                    //Output:Hiiiii!

//7.Callback Function(A Function that is passed as an arguement to another function)
function greet(name,Callback){
        console.log("Hello"+name);
        Callback();
}
function sayBye(){
        console.log("GoodBye!");
}
greet("Barvesh",sayBye);


// //8.Higher Order Function - Takes one or more function as a arguement and returns a function as its result
// const radius=[2,4,6,8];
// function areaOfCircle(r){
//         return Math.PI * r * r;
// }
// function areaOfCircumference(r){
//         return 2 * Math.PI * r;
// }
// function calculate(arr,logic){
//         const output=[];
//         for(let i=0;i<arr.length;i++){
//                 output.push(logic(arr[i]));
//         }
//         return output;
// }
// console.log(calculate(radius,areaOfCircle));

                //[OR]

// function abc(){
//         console.log("Hi,I am Barvesh Akthar");
// }
// function xyz(res){
//         res();
// }
// xyz(abc);

// //9.Recursive function -A Function that calls itself is called Recursive Function
// function fact(n){
//         if(n==0){ //base case - A condition that stops the recursion,Prevents infinite calls
//                 return 1;
//         }
//         return n*fact(n-1); //Recursive case - The part where the function calls itself with a smaller or simpler input
// }
// console.log(fact(5));







