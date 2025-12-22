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

isHalwaThere=false;
function waitInQueue(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve("Buy 1 Kg of Halwa")
            }
            else{
                reject("HAlwa Finsih")
            }
        },1000);
    });
}

function buyHalwa(){
    waitInQueue().then((message)=>{
        console.log("Go Home");
    })
    .catch((error)=>{
        console.log("error");
    })
    .finally(()=>{
        console.log("Go to Home");
    })
}

buyHalwa();
