const kirim = document.getElementsByClassName("send")[0];
const name = document.getElementsByClassName("name")[0];
const email = document.getElementsByClassName("email")[0];
const message = document.getElementsByClassName("message")[0];
kirim.addEventListener("click", function () {
  name.setAttribute("required", "");
  email.setAttribute("required", "");
  message.setAttribute("required", "");
  if (name.value === "") {
    name.style.border = "5px solid red";
  } else if (email.value === "") {
    email.style.border = "5px solid red";
  } else if (message.value === "") {
    message.style.border = "5px solid red";
  }
});
