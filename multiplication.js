function multiplicationTable() {

    let number = parseInt(document.getElementById("number").value)

    let counter = 1;
    let message = "";
    while (counter <=20){
        let multiplication = number * counter;
        message = message +  `<li>${number} x ${counter} = ${multiplication}</li>`
        counter = counter + 1;
    }

    let result = document.getElementById("result");
    result.innerHTML = message;


}