<<<<<<< HEAD
//Features
//1.Block Scoped
//2.Cannot be redeclared in same scope
//3.can be reassigned
//4.Hoisted (but not Initialized)



// let a = 10;{
//     console.log(a);
// }

// Output:10

// let a=10;
// a = 20
// {
//     console.log(a);
// }

// Output:20

// let a = 10;
// {
//    let  a = 20;
//    console.log(a);
   
// }

// Output:20


// let a = 10;
// {
//    let a = 20;
// }
// console.log(a);

// Output:10


// let a = 10;
// {
//    a = 20;
// }
// console.log(a);

//Output:20


// let a = 10;
// {
//    let b = 20;
// }

// console.log(a);
//Output:10

// if(true){
//    let b = 5;
// }
// console.log(b);

=======
//Features
//1.Block Scoped
//2.Cannot be redeclared in same scope
//3.can be reassigned
//4.Hoisted (but not Initialized)



// let a = 10;{
//     console.log(a);
// }

// Output:10

// let a=10;
// a = 20
// {
//     console.log(a);
// }

// Output:20

// let a = 10;
// {
//    let  a = 20;
//    console.log(a);
   
// }

// Output:20


// let a = 10;
// {
//    let a = 20;
// }
// console.log(a);

// Output:10


// let a = 10;
// {
//    a = 20;
// }
// console.log(a);

//Output:20


// let a = 10;
// {
//    let b = 20;
// }

// console.log(a);
//Output:10

// if(true){
//    let b = 5;
// }
// console.log(b);

>>>>>>> 5bb20cdc52143b80ae8d2d73662ea766bf513c7d
//Output: Error(b is not Defined because b is blocked Scope)