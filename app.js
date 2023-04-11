// declaramos una funcion con el mismo nombre "formEuroToDollar"
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    //convertimos el valor a yen
    let valueInYen = (valueInDollar *  1/oneEuroIs.USD) * oneEuroIs.JPY;
    //retornamos el valor
return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    //convertimos el valor en pound(libras)
    let valueInPound = (valueInYen/oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound
}


module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound };