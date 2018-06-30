var button = document.querySelector(".search-hotel__button");
var form = document.querySelector(".search-hotel__form");
button.addEventListener("click", function (evt) {
evt.preventDefault();
form.classList.toggle("visually-hidden");
});