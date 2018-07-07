document.documentElement
.classList.replace('no-js', 'js');

var button = document.querySelector(".search-hotel__button");
var form = document.querySelector(".search-hotel__form");
var dateArrive = document.querySelector("[name=date-arrive]");
var dateLeave = document.querySelector("[name=date-leave]");
var adult = document.querySelector("[name=adult]");
var children = document.querySelector("[name=children]");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("display-none");
    form.classList.toggle("form-animation");
});

form.addEventListener("submit", function (evt) {
    if (!dateArrive.value || !dateLeave.value || !children.value || !children.value) {
      evt.preventDefault();
      console.log("Заполните поля формы");
    }
  });