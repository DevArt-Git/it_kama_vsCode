// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getArraySum(arrayNumbers, callBack) {
    console.log(arrayNumbers);

    let sum = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        sum += arrayNumbers[i];
    }
    // alertResult(sum);
    callBack(sum);
}

function alertResult(numberSum) {
    window.alert(`Сумма: ${numberSum}`);
}

function logResult(numberSum) {
    console.log(`Сумма: ${numberSum}`);

}

function getConcreteFunctionByName(name) {

}

getArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], logResult);

