function sellApples() {

    let applesStock = document.getElementById("applesStock").value;
    let appleStockNumber = parseInt(applesStock.value);
    let applesSold = parseInt(document.getElementById("applesSold").value);

    if (appleStockNumber <= 0) {
        let result = document.getElementById("result");
        result.textContent = `Out of Stock!`
    } else {
        if (applesSold > appleStockNumber) {
            let result = document.getElementById("result");
            result.textContent = `Not enogh apples`;
        }else{
            appleStockNumber = appleStockNumber - applesSold;
            let result = document.getElementById("result");
            result.textContent = `New stock of apples ${appleStockNumber}`;
            applesStock.value = appleStockNumber.toString();
        }
    }

}