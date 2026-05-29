function Convert(){
    let usertemp = document.getElementById("temperature").value;
    let resultElement = document.getElementById("result");
    const dropdown = document.getElementById("conversionType");
    const selectedvalue = dropdown.value;
            if(selectedvalue=="Celsius"){
                let convertedTemp = (usertemp*9/5)+32;
                resultElement.innerText = `${usertemp}°C is ${convertedTemp.toFixed(2)}°F`;
            }
            else{
                let convertedTemp = (usertemp-32)*5/9;
                resultElement.innerText = `${usertemp}°F is ${convertedTemp.toFixed(2)}°C`;
            }
        }