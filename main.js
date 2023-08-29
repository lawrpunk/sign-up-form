const form = document.querySelector("form");
const fName = document.getElementById("fname");
const fNameError = document.getElementById("fNameError");
const lName = document.getElementById("lname");
const lNameError = document.getElementById("lNameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const password = document.getElementById("pass");
const passwordError = document.getElementById("passError");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fNameValue = fName.value;
  const lNameValue = lName.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (fNameValue.length < 1) {
    fName.classList.add("signup-form-item-error");
    fNameError.textContent = "First Name cannot be empty";
  } else {
    fName.classList.remove("signup-form-item-error");
    fNameError.textContent = "";
  }

  if (lNameValue.length < 1) {
    lName.classList.add("signup-form-item-error");
    lNameError.textContent = "Last Name cannot be empty";
  } else {
    lName.classList.remove("signup-form-item-error");
    lNameError.textContent = "";
  }

  if (!isValidEmail(emailValue)) {
    email.classList.add("signup-form-item-error");
    emailError.textContent = "Looks like this is not an email";
  } else {
    email.classList.remove("signup-form-item-error");
    emailError.textContent = "";
  }

  if (passwordValue.length < 1) {
    password.classList.add("signup-form-item-error");
    passwordError.textContent = "Password cannot be empty";
  } else if (passwordValue.length < 8) {
    password.classList.add("signup-form-item-error");
    passwordError.textContent = "Password cannot be lesser then 8 characters";
  } else {
    password.classList.remove("signup-form-item-error");
    passwordError.textContent = "";
  }
});
