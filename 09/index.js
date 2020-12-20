let firstNameEl = document.getElementById('first-name');
let lastNameEl = document.getElementById('last-name');
let addressEl = document.getElementById('address');
let hobbiesEl = document.getElementById('hobbies');
let imgId = document.getElementById('img');
let citiesEl = document.getElementById('cities');
let divImgEl = document.getElementById('div-img');

console.log(firstNameEl.value);
console.log(lastNameEl.value);
console.log(addressEl.value);
console.log(hobbiesEl.value);

console.log(document.getElementById('cities').value);
console.log(hobbiesEl.value);
console.log(hobbiesEl.innerHTML);

console.log(document.getElementById('div-img').innerHTML);
console.log(document.getElementById('img').src);
console.log(document.getElementById('img').alt);
console.log(document.getElementById('cities').innerHTML);

firstNameEl.value = 'Max';
lastNameEl.value = 'Pain';

lastNameEl.className = 'last-name-input default-input error-input';
// window.alert(lastNameEl.className);

imgId.src = 'https://english4life.ru/wp-content/uploads/2017/06/knock.jpg';

imgId.title = 'I`m Avatar!';
lastNameEl.title = "Wrong lastname";
citiesEl.value = 'Moscow city';
hobbiesEl.value = 'I have not hobbies!';
divImgEl.innerHTML = "<ol id='technologies - list'><li>JS</li><li>HTML</li><li>CSS</li><li></li><li></li></ol>";