"use strict";

// Selectors
let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");
const user = document.querySelector(".user-name");
const userEmail = document.querySelector(".email");
const userPassword = document.querySelector("#password");
const btnSignUp = document.querySelector(".sign-button");

// Account data
const account1 = {
  owner: "Mohit Bisht",
  email: "bishtmohit@gmail.com",
  pin: "Draco123",
};
const account2 = {
  owner: "Lakshya Agarwal",
  email: "la123@gmail.com",
  pin: "La@12345",
};

const accounts = [account1, account2];

//Events
eyeIcon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.src = "eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "eye-close.png";
  }
};

//sign up
btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();

  console.log(userEmail.value.trim(), userPassword.value.trim());
  console.log("Stored Accounts:", accounts);

  let currentAccount = accounts.find(
    (account) =>
      userEmail.value.trim() === account.email &&
      userPassword.value.trim() === account.pin
  );

  if (currentAccount) {
    window.location.href = "index.html";

    user.value = "";
    userEmail.value = "";
    userPassword.value = "";
  } else {
    alert("Invalid credentials! Please try again.");
  }
});
