const VND = {
    VND: 1,
    USD: 0.000043,
    KRW: 0.052
};

const USD = {
    VND: 23208,
    USD: 1,
    KRW: 1192
};

const KRW = {
    VND: 19.47,
    USD: 0.00084,
    KRW: 1
};

//

const currencyRates = {
    "USD": 1,
    "VND": .000043,
    "KRW": .00084,
};

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

function convertCurrency(currentCurrency, desiredCurrency, amount) {
    var currentRate = currencyRates[currentCurrency];
    var desiredRate = currencyRates[desiredCurrency];

    var USDAmount = amount * currentRate;
    var convertedAmount = USDAmount / desiredRate;

    return convertedAmount; // I think this is the right algorithm :/
}

/*
function convertCurrencyFromUsd(currentCurrency, desiredCurrency, amount) {
    var currentRate = currencyRates[currentCurrency];
    var desiredRate = currencyRates[desiredCurrency];

    var USDAmount = amount * currentRate;
    var convertedAmount = USDAmount / desiredRate;

    return convertedAmount; // I think this is the right algorithm :/
}

function convertCurrencyFromWon(currentCurrency, desiredCurrency, amount) {
    var currentRate = currencyRates[currentCurrency];
    var desiredRate = currencyRates[desiredCurrency];

    var wonAmount = amount * currentRate;
    var convertedAmount = wonAmount / desiredRate;

    return convertedAmount; // I think this is the right algorithm :/
} */

/*
let amount = Number(prompt("How much money do you want to convert?"));
*/



/*
if (currentCurrency == "USD" && desiredCurrency == "KRW") {
    convertedCurrencyAmount = convertCurrencyFromUsd(currentCurrency, desiredCurrency, amount);
    alert("Converted: " + convertedCurrencyAmount);
} else if (currentCurrency == "USD" && desiredCurrency == "VND") {
    convertedCurrencyAmount = convertCurrencyFromUsd(currentCurrency, desiredCurrency, amount);
    alert("Converted:" + convertedCurrencyAmount)
} else if (currentCurrency == "KRW" && desiredCurrency == "USD") {
    convertedCurrencyAmount = convertCurrencyFromWon(currentCurrency, desiredCurrency, amount);
    alert("Converted:" + convertedCurrencyAmount);
} else if (currentCurrency == "KRW" && desiredCurrency == "VND") {
    convertedCurrencyAmount = convertCurrencyFromWon(currentCurrency, desiredCurrency, amount);
    alert("Converted:" + convertedCurrencyAmount);
} else if (currentCurrency == "VND" && desiredCurrency == "USD") {
    convertedCurrencyAmount = convertCurrencyFromWon(currentCurrency, desiredCurrency, amount);
    alert("Converted:" + convertedCurrencyAmount);
}else if (currentCurrency == "VND" && desiredCurrency == "KRW") {
    convertedCurrencyAmount = convertCurrencyFromWon(currentCurrency, desiredCurrency, amount);
    alert("Converted:" + convertedCurrencyAmount);
} */

/*
if ((isNaN(amount)) == false) {
    let currentCurrency = prompt("What currency are you using? (USD, VND, KRW)");
    let desiredCurrency = prompt("What currency do you want to convert it to? (USD VND KRW)");
    var convertedCurrencyAmount = convertCurrency(currentCurrency, desiredCurrency, amount);
    formattedAmount = formatCurrency(desiredCurrency, convertedCurrencyAmount);
    alert("Converted: " + formattedAmount);
}else{
    do{
        alert("Please input a valid number for conversion.")
        let amount = Number(prompt("How much money do you want to convert?"));
    } while ((isNaN(amount)) || amount < 0);
    
} */

let amount = Number(prompt("How much money do you want to convert?"));
if ((isNaN(amount)) == false) {
    let currentCurrency = prompt("What currency are you using? (USD, VND, KRW)").toUpperCase();
    let desiredCurrency = prompt("What currency do you want to convert it to? (USD VND KRW)").toUpperCase();
    var convertedCurrencyAmount = convertCurrency(currentCurrency, desiredCurrency, amount);
    formattedAmount = formatCurrency(desiredCurrency, convertedCurrencyAmount);
    alert(`Converted ${amount} to ${formattedAmount}`);
} else {
    alert("Please insert a valid amount to convert.")
    let amount = Number(prompt("How much money do you want to convert?"));
    let currentCurrency = prompt("What currency are you using? (USD, VND, KRW)").toUpperCase();
    let desiredCurrency = prompt("What currency do you want to convert it to? (USD VND KRW)").toUpperCase();
    var convertedCurrencyAmount = convertCurrency(currentCurrency, desiredCurrency, amount);
    formattedAmount = formatCurrency(desiredCurrency, convertedCurrencyAmount);
    alert(`Converted" ${amount} to ${formattedAmount} `);
}
