// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     if (!Validate(cart)) {
//       const err = new Error("cart is invalid");
//       reject(err);
//     }
//     const orderId = 12345;
//     if (orderId) {
//       resolve("success");
//     }
//   });
// }

// const { error } = require("node:console")

// const { create } = require("node:domain");

// createOrder(cart)
//   .then((orderId) => {
//     return proceedtopayment(orderId);
//   })
//   .then((showordersummary) => {
//     return ordersummarys(showordersummary);
//   })
//   .then((wallent) => {
//     return updatewallet(wallent);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((orderId) => {
//     console.log(orderId);
//   });

isHalwaThere=true;
function waitInQueue(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve("Buy 1 Kg of Halwa");
            }
            else{
                reject("Halwa Finsih");
            }
        },1000);
    });
}

function buyHalwa(){
    waitInQueue().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Go to Home");
    })
}

buyHalwa();


//Promise.all():
//--Takes an array of promises
//--Runs them in parallel
//--Resolves when all promises succeed
//--Rejects if any promises fails

// const p1=Promise.resolve(10);
// const p2=new Promise(resolve=>setTimeout(()=>resolve(20), 1000));
// const p3=Promise.resolve(30);
// Promise.all([p1,p2,p3])
//     .then(values=>{
//         console.log(values);
//     })
//     .catch(error=>{
//         console.log(error);
//     });