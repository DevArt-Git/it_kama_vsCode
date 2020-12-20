function findAndDeleteElement(idElement) {
    let element = document.getElementById(idElement);
    if (element !== null) {
        element.remove();
    } else window.alert("This is not a correct ID")
}

function findAndAddCssClass(idElement, cssClass) {
    let element = document.getElementById(idElement);
    if (element !== null) {
        setTimeout(function () {
            element.className = cssClass
        }, 00);
    } else window.alert("This is not a correct ID")
}

function hideElementSlow(idElement, cssClass) {
    findAndAddCssClass(idElement, cssClass)
}


function findElementInArray(classElement, valueForDelete) {
    let element = document.getElementsByClassName(classElement);
    for (let i = 0; i < element.length; i++) {
        if (element[i].value === valueForDelete) {
            element[i].remove();
        }
    }
}

function findAndDeleteElementByClass(classElement) {
    let array = document.querySelectorAll('ul > li');

    for (let i = 0; i < array.length; i++) {
        let elementOfArray = array[i];
        if (elementOfArray.className === classElement) {
            elementOfArray.remove();
        }
    }
}

function predicate(result) {
    let array = document.querySelectorAll(elements);
    if (elementOfArray.className === 'hey') {
        let elementOfArray = array[i];
        elementOfArray.remove();
        return true;
    } else {
        return false;
    }
}

function removeElementsIfConditionTrue(elements, predicate) {
    let array = document.querySelectorAll(elements);

    for (let i = 0; i < array.length; i++) {
        let elementOfArray = array[i];
        if (predicate(elements)) {
            elementOfArray.remove();
        }
    }

}

// findAndAddCssClass('id1', 'redLine');

hideElementSlow('id2', 'hideElement');

setTimeout(function () {
    hideElementSlow('id2', 'showElement')
}, 3000);

// findElementInArray('someLiClass', 8);
// findAndDeleteElementByClass('hey someLiClass');
removeElementsIfConditionTrue('li', predicate);

