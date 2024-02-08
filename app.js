const sum=(number1,number2)=>{
    return number1+number2;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(DollarToYens) {
    // Convert the given valueInEuro to dollars
    let EuroConvertion = (DollarToYens/1.07);
    let YensFromDollar=EuroConvertion*156.5;
    

    return YensFromDollar;
}
const fromYenToPound = function(Yens) {
    
    let EuroConvertion=(Yens/156.5);
    let PoundTotal= EuroConvertion*0.87;
    return PoundTotal;
    
}
module.exports = { sum, fromEuroToDollar,fromYenToPound,fromDollarToYen }