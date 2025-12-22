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

//Output: Error(b is not Defined because b is blocked Scope)