
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    //return the dollar value
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    //return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    //return the dollar value
    return valueInPound;
}




const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };