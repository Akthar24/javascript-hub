// const cart = ["item1", "item2", "item3"]; // define cart


// async function placeOrder(cart){
//     try{
//         try{
//             orderID = await createOrder(cart)
//         }
//         catch{
//             console.log("Create order failed",error)
//         }
    
//     const paymentresult = await proceedtopayment(orderID);

//     const summary = await ordersummary(paymentresult);

//     const walletresult = await updatewallet(summary);

//     console.log(walletresult);
//     }
//     catch(err){
//         console.log("Error");
//     }
//     }
// placeOrder(cart)

function waitInQueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwaThere=false){
                resolve("Buy 1/2 KG of Halwa");
            }
            else{
                reject("Halwa Finish");
            }
        },1000);
    });
}
async function buyHalwa(){
    try{
        let result = await waitInQueue();
        console.log(result);
    }
    catch(error){
        console.log("Halwa Over");
    }
}
buyHalwa();
