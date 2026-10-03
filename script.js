let form = document.querySelector("form");
let buttonForm = document.querySelector(".btn-order");
let text = document.querySelector(".message");

form.onsubmit = function(event){
  event.preventDefault();
  text.textContent = "Ле брат заявка отправлена.Я наберу";
};
