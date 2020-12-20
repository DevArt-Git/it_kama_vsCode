let someImageToChangeOnClickId = document.getElementsByClassName("someImageToChangeOnClick");
let buttonPressMeId = document.getElementById('buttonPressMe');
function sayThanks() {
    // alert('Thank you!')
    someImageToChangeOnClickId[0].src = "http://komotoz.ru/photo/zhivotnye/images/schegol/schegol_02.jpg";
};
// buttonPressMeId.onclick = sayThanks;
buttonPressMeId.addEventListener("click", sayThanks);





setTimeout(function () {

    let labels = document.getElementsByClassName('namesInput')
    // let firstNameEl = document.getElementsByClassName('firstNameInput');
    // let secondNameEl = document.getElementById('sNameInput');
    // firstNameEl[0].defaultValue = "Max";
    // secondNameEl.value = "Pain";
    labels[0].value = "Max";
    labels[1].value = "Pain";
}, 1000);