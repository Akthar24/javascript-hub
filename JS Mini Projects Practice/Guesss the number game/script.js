// const randomnumber = Math.floor(Math.random() *10)+1;
// function checkGuess(){
//     let userguess = document.getElementById("guess").value;
//     let result = document.getElementById("result");
//     if(userguess == randomnumber){
//         result.innerText="Correct Guess!";
//     }
//     else if(userguess > randomnumber){
//         result.innerText="You Guess is Too High!";
//     }
//     else{
//         result.innnerText="Your Guess is Too Low!";
//     }
// }

const randomNumber =
Math.floor(Math.random() * 10) + 1;

function checkGuess() {

    let userGuess =
    document.getElementById("guess").value;

    let result =
    document.getElementById("result");

    if (userGuess == randomNumber) {

        result.innerText = "Correct Guess!";

    } else if (userGuess > randomNumber) {

        result.innerText = "Too High!";

    } else {

        result.innerText = "Too Low!";
    }
}