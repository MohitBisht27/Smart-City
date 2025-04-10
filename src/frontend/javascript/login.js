// "use strict";

// // Selectors
// let eyeIcon = document.getElementById("eyeIcon");
// let password = document.getElementById("password");
// const user = document.querySelector(".user-name");
// const userEmail = document.querySelector(".email");
// const userPassword = document.querySelector("#password");
// const btnSignUp = document.querySelector(".sign-button");

// // Account data
// const account1 = {
//   owner: "Mohit Bisht",
//   email: "bishtmohit@gmail.com",
//   pin: "Draco123",
// };
// const account2 = {
//   owner: "Lakshya Agarwal",
//   email: "la123@gmail.com",
//   pin: "La@12345",
// };

// const accounts = [account1, account2];

// //Events
// eyeIcon.onclick = function () {
//   if (password.type === "password") {
//     password.type = "text";
//     eyeIcon.src = "../image/eye-open.svg";
//   } else {
//     password.type = "password";
//     eyeIcon.src = "../image/eye-close.svg";
//   }
// };

// // sign up
// btnSignUp.addEventListener("click", function (e) {
//   e.preventDefault();

//   console.log(
//     user.value.trim(),
//     userEmail.value.trim(),
//     userPassword.value.trim()
//   );
//   console.log("Stored Accounts:", accounts);

//   let currentAccount = accounts.find(
//     (account) =>
//       user.value.trim() === account.owner &&
//       userEmail.value.trim() === account.email &&
//       userPassword.value.trim() === account.pin
//   );

//   if (currentAccount) {
//     window.location.href = "index.html";

//     user.value = "";
//     userEmail.value = "";
//     userPassword.value = "";
//   } else {
//     alert("Invalid credentials! Please try again.");
//   }
// });

"use strict";

// Selectors
let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");
const signupForm = document.getElementById("signup-form");
const messageDiv = document.getElementById("message");

// Toggle password visibility
eyeIcon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.src = "../image/eye-open.svg";
  } else {
    password.type = "password";
    eyeIcon.src = "../image/eye-close.svg";
  }
};

// Form submission
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(signupForm);

  // AJAX request to submit form
  fetch("../php/signup_process.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        messageDiv.innerHTML = `<p class="success">${data.message}</p>`;
        // Redirect to login page after successful registration
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1500);
      } else {
        messageDiv.innerHTML = `<p class="error">${data.message}</p>`;
      }
    })
    .catch((error) => {
      messageDiv.innerHTML = `<p class="error">An error occurred: ${error.message}</p>`;
    });
});
