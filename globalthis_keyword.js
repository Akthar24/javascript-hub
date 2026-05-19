// globalThis is the standarized way to access the global object,No matter where your code runs.
//Before Gloabl this ,
// Browser - window(this)
//node.js - global
//web workers - self  ---> Tis 3 creates a confusion 

// globalThis solves this by giving one univerrsal name 

globalThis.name = "Guru"
console.log(globalThis.name)