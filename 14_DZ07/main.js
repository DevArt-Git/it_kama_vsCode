let input = document.querySelector('input');
let button = document.querySelector('button');
let span = document.querySelector('.textForChangeSpan');
let inputReplace = document.createElement('input');
let buttonInDiv = document.createElement('button');
let changeValuesButton = document.querySelector('#change-values-btn');
let inputElements = document.querySelectorAll('input.input-one-to-ten')

function changeStarsInput() {
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function changeSpanOnInput() {
    buttonInDiv.className = 'blueButtonInDiv'
    inputReplace.className = 'alert';
    buttonInDiv.innerHTML = 'Сохранить';
    inputReplace.value = span.innerHTML;
    span.replaceWith(inputReplace);
    inputReplace.after(buttonInDiv);
}

function saveCurrentTextInSpan() {
    span.innerHTML = inputReplace.value;
    inputReplace.replaceWith(span);
    // inputReplace.remove();
    buttonInDiv.remove();
}

function changeValues() {
    let firstInputEl = document.querySelector('#first-value');
    let secondInputEl = document.querySelector('#second-value');
    a = firstInputEl.value;
    b = secondInputEl.value;
    firstInputEl.value = b;
    secondInputEl.value = a;
}

function addErrorClassToInputOneToTen() {
    // let inputElements = document.querySelectorAll('input.input-one-to-ten')
    for (let i = 0; i < inputElements.length; i++) {
        let element = inputElements[i];
        if (element.value >= 10) {
            element.className = 'errorClass';
        }

    }

}

// button.addEventListener('click', changeStarsInput);
button.addEventListener('mousedown', changeStarsInput);
button.addEventListener('mouseup', changeStarsInput);

span.addEventListener('click', changeSpanOnInput);
buttonInDiv.addEventListener('click', saveCurrentTextInSpan);

changeValuesButton.addEventListener('click', changeValues);
inputElements.forEach()addEventListener('input', addErrorClassToInputOneToTen);


