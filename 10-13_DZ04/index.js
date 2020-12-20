// function getEl(Id) {
//     let element = document.getElementById(id);
//     return element;
// }

// function setMyNameToAllInputs() {
//     let newValue = "Дима"
//     firstInputEl.value = newValue;
//     secondInputEl.value = newValue;
//     thirdInputEl.value = newValue;
// }

// function setMyLastameToAllInputs() {
//     let newValue = "Чернявский"
//     firstInputEl.value = newValue;
//     secondInputEl.value = newValue;
//     thirdInputEl.value = newValue;
// }

function findElement(elementId) {
    let element = document.getElementById(elementId);
    return element;
}

function changeValueOfElement(elementId, newValue) {
    let element = findElement(elementId)
    // let element = document.getElementById(elementId);
    element.value = newValue;
}

function setErrorClass(elementId) {
    let element = findElement(elementId)
    element.className = 'error';
}

function getSum(p1, p2) {
    return Number(p1) + Number(p2);
}

function sayHello() {
    window.alert('My Name')
}

function timeOutError() {
    setErrorClass('firstInput');
}

function hideElement(elementId) {
    let element = document.getElementById(elementId);
    element.className = 'hideEl';
}

function timeOuthideElement() {
    hideElement('secondInput');
}

function showElement(elementId) {
    let element = document.getElementById(elementId);
    element.className = 'showEl';
}

function timeOutShowElement() {
    showElement('secondInput');
}

function timer() {
    let element = document.getElementById("firstInput");
    element.value = secondCountStart;
    secondCountStart++;
}

let secondCountStart = 0;

// changeValueOfElement('firstInput', "something");

// changeValueOfElement('secondInput', "going");

// changeValueOfElement('thirdInput', "on");

// setErrorClass('firstInput');
// setErrorClass('secondInput');
// setErrorClass('thirdInput');

// setErrorClass('div-id');
// setErrorClass('textarea-id');

console.log(getSum('68', '232'));
console.log(getSum(100, 200));
console.log(getSum(150, 30));

// setTimeout(sayHello, 2000);
setTimeout(timeOutError, 2000);
setTimeout(timeOuthideElement, 3000);
setTimeout(timeOutShowElement, 3200);

setInterval(timer, 1000);