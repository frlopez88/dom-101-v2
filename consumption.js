let drivenMiles=0;

function drive(){

    let gallons= document.getElementById("gallons");
    let consumption=document.getElementById("consumption");

    drivenMiles = drivenMiles + 1;
    gallons.value = parseFloat(gallons.value) - parseFloat(consumption.value)

    let result = document.getElementById("result");

    let message = `The driven miles are ${drivenMiles} and your tank capacity is ${gallons.value}`

    result.textContent = message;
}