
const exchangeRate = 23235;

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }

  console.log(formatCurrency('KRW',10000));



//VND to USD
function vndToUsd(amount) {
    const convertedAmount = (amount / exchangeRate).toFixed(2);
    return convertedAmount;
}

//USD to VND
function usdToVnd(amount) {
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    return convertedAmount;
}


let currencyType = prompt("Are you converting TO USD or VND?");
if (currencyType.toUpperCase() == "USD") {
    amountVnd = prompt("Insert amount in VND to convert to USD");
    let amount = parseInt(amountVnd)
    if ((isNaN(amount)) == false) {
        let result = vndToUsd(amount);
        formattedAmount = formatCurrency('USD',result);
        console.log(formattedAmount);
    } else {
        amountVND = prompt("Please enter a valid number to convert");
        let result = vndToUsd(amount);
        formattedAmount = formatCurrency('USD',result);
        console.log(formattedAmount);
    }
} else {
    amountUsd = prompt("Insert amount in USD to convert to VND");
    let amount = parseInt(amountUsd)
    if ((isNaN(amount)) == false) {
        let result = usdToVnd(amount);
        formattedAmount = formatCurrency('VND',result);
        console.log(formattedAmount);
    } else {
        amountUsd = prompt("Please enter a valid number to convert");
        let result = usdToVnd(amount);
        formattedAmount = formatCurrency('VND',result);
        console.log(formattedAmount);
    }
}




