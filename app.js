let input = document.querySelector("input");
const emailRegex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

const form_input = document.querySelector("form");
const error_logo = document.querySelector("#error_logo");
const invalid_text = document.querySelector("#invalid_text");

document.querySelector("#button").addEventListener("click", function () {
  if (!emailRegex.test(input.value)) {
    error_logo.style.display = "block";
    form_input.style.border = "1px solid red";
    invalid_text.style.display = "block";
  } else {
    error_logo.style.display = "none";
    invalid_text.style.display = "none";
    form_input.style.border = "1px solid hsla(0, 36%, 70%, 0.288)";
  }
});
