//Array creation Methods

//1.Array Literal

// let arr=[10,20,30]

//2.new Array()

//let arr = new array(10,20,30)

//Basic Array Methods

let arr=[1,2,3,4]
console.log(arr)

//1.Arraylength()
console.log(arr.length)

//2.Push()
arr.push(5,6)
console.log(arr)

//3.pop()
arr.pop(6)
console.log(arr)

//4.unshift()
arr.unshift(0)
console.log(arr)

//5.shift()
arr.shift(0)
console.log(arr)

//Array searching Methods

//1.indexof()
let arr1 = ["a","b","c"];
console.log(arr1.indexOf("b"))

//2.includes()
console.log(arr1.includes("b"))

//3.find()
let nums = [5,12,8,130]
let result = nums.find(n=>n>10);
console.log(result);

//4.findIndex()
console.log(nums.findIndex(n=>n>10));


//ArrayIterationMethods
//1.forEach()
let arr2 = [1,2,3]
arr.forEach(num=>{
    console.log(num*2)
})