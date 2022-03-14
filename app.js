const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    //return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    //return the dollar value
    return valueInPound;
}




const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };