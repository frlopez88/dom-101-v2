function savingCalculator (){

    let days;
    let goal = document.getElementById("goal");
    let deposit = document.getElementById("deposit");

    let goalTemp =  parseFloat(goal.value);
    let depositTemp = parseFloat(deposit.value);

    days = goalTemp / depositTemp;

    let message = `It would take ${days} days`;

    let result = document.getElementById("result");
    result.textContent = message;

    goal.value ="0";
    deposit.value = "0";

}