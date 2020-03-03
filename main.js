
const exchangeRate = 23235;

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}


/*
let currencyType = prompt("Would you like to convert to USD or VND?")
if (currencyType.toUpperCase() === "USD") {
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
} else if(currencyType.toUpperCase() === "VND"){
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
}else{
    alert("Please insert a valid currency (VND or USD)");
}
*/


let amountInput = document.getElementById('amount');
let convertButton = document.getElementById('convertButton')
let result = document.getElementById('result');
let vndAmount = 0;





/*For two currencies
function convert() {
    if (userChoice1 == "USD") {
        convertToVnd();
    } else {
        convertToUsd()
    }
}
*/

/*
function convert() {
    
    if (userChoice1 === "VND") {
        if (userChoice2 === "USD") {
            console.log(userChoice2,userChoice1);
            vndToUsd();
        } else {
            vndToKrw();
        }
    }
    else if (userChoice1 === "USD") {
        if (userChoice2 === "KRW") {
            usdToKrw();
        } else {
            usdToVnd();
        }
    } else {
        if (userChoice2 === "USD") {
            krwToUsd();
        } else {
            krwToVnd();
        }
    }
}
*/

var VND = {
    USD: 1 / 23000,
    EUR: 1 / 25800,
    JPY: 4.65 / 1000,
};

var USD = {
    VND: 23000,
    EUR: 0.9,
    JPY: 108,
};

var EUR = {
    USD: 25800 / 23000,
    VND: 25800,
    JPY: 120,
};

var JPY = {
    VND: 1000/4.65,
    EUR: 1 / 120,
    USD: 1 / 108,
};
var currencies = {
    VND,
    USD,
    EUR,
    JPY
};



function getConversionRate(from, to) {
    console.log(from, to);
    return currencies[from][to];
}

function convertAgain() {
    let userChoice1 = document.getElementById('from').value;
    let userChoice2 = document.getElementById('to').value;
    let amount = amountInput.value;
    formattedInitial = formatCurrency(userChoice1,amount);
    conversionRate = getConversionRate(userChoice1, userChoice2);
    console.log(conversionRate);
    convertedAmount = amount * conversionRate;
    formattedAmount = formatCurrency(userChoice2,convertedAmount);
    document.getElementById("result").innerHTML =`${formattedInitial} = ${formattedAmount}`;
}

/* API 
async function callApi() {
    let url = `https://free.currencyconverterapi.com/api/v6/convert?q=${userchoice1}_${userchoice2}&compact=y&apiKey=31afa7038ba9e6066b94`;
    url = {
        USD_VND: 1.02
    }
    

    let result = await fetch(url);
    let json = await result.json();
    updateResults(json);
    let str1 = userChoice1 +'_'+ userChoice2;
    return json[str1];
}

function updateResults(response) {
  console.log(response);
}
*/
