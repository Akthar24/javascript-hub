//Array creation Methods

//1.Array Literal

// let arr=[10,20,30]

//2.new Array()

//let arr = new array(10,20,30)

//Basic Array Methods

// let arr=[1,2,3,4]
// console.log(arr)

// //1.Arraylength()
// console.log(arr.length)

// //2.Push()
// arr.push(5,6)
// console.log(arr)

// //3.pop()
// arr.pop(6)
// console.log(arr)

// //4.unshift()
// arr.unshift(0)
// console.log(arr)

// //5.shift()
// arr.shift(0)
// console.log(arr)

//Array searching Methods

//1.indexof()
// let arr1 = ["a","b","c"];
// console.log(arr1.indexOf("b"))

//2.includes()
// console.log(arr1.includes("b"))

//3.find()
// let nums = [5,12,8,130]
// let result = nums.find(n=>n>10);
// console.log(result);

//4.findIndex()
// console.log(nums.findIndex(n=>n>10));


// //ArrayIterationMethods
// //1.forEach() - Executes Function for Each Element
// let arr2 = [1,2,3]
// arr2.forEach(num=>{
//     console.log(num*2)
// })

// //2.map() - Creates new array without Modifying
// let arr3= [1,2,3];
// let doubled = arr3.map(num => num*2);
// console.log(doubled);

// //3.filter() - Creates new array with elements that pass the condition
// let arr4=[1,2,3,4,5,6,7,8];
// let result = arr4.filter(num => num%2==0);
// console.log(result);

// //4.reduce() - Reduces array to a Single value
// let arr5=[1,2,3,4];
// let result1 = arr5.reduce((total,num)=>total+num,0);
// console.log(result1);

// //Array Modification Methods
// //1.splice()- Adds/removes elements [array.splice(startIndex,deletecount,item1,item2)]
// let arr6=[1,2,3,4];
// arr6.splice(1,2,10,20);
// console.log(arr6);

// //2.slice()- Returns a new array without changing orginal [array.slice(startIndex,endIndex)]
// let arr7=[1,2,3,4];
// let ress=arr7.slice(1,3);
// console.log(ress);

// //3.concat()-Merges Array
// let a=[1,2];
// let b=[3,4];
// let result = a.concat(b);
// console.log(result);

// //Sorting & Reversing
// //1.sort()



// //2.reverse()
// let arr=[1,2,3];
// arr.reverse();
// console.log(arr);

// //Conversion Methods
// //1.join()
// let arr=[1,2,3];
// console.log(arr.join("-"));

// //2.toString()
// let arr = [1,2,3];
// console.log(arr.toString());

// //Checking Methods
// //1.every()- Check if all elements statisfy condition
// let arr=[10,20,30,40];
// console.log(arr.every(n=>n>5));

// //2.some()- Check if any element statisfy condition

// console.log(arr.some(n=>n>25));
