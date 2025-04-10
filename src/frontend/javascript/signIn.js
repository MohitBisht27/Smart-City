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

// //sign up
// btnSignUp.addEventListener("click", function (e) {
//   e.preventDefault();

//   console.log(userEmail.value.trim(), userPassword.value.trim());
//   console.log("Stored Accounts:", accounts);

//   let currentAccount = accounts.find(
//     (account) =>
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
const loginForm = document.getElementById("signup-form"); // You're using the same ID for both forms

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
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(loginForm);

  // AJAX request to submit form
  fetch("../php/login_process.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Success message
        const messageDiv = document.createElement("div");
        messageDiv.innerHTML = `<p class="success">${data.message}</p>`;
        document.querySelector(".box").appendChild(messageDiv);

        // Redirect to index page after successful login
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      } else {
        // Error message
        const messageDiv = document.createElement("div");
        messageDiv.innerHTML = `<p class="error">${data.message}</p>`;
        document.querySelector(".box").appendChild(messageDiv);
      }
    })
    .catch((error) => {
      const messageDiv = document.createElement("div");
      messageDiv.innerHTML = `<p class="error">An error occurred: ${error.message}</p>`;
      document.querySelector(".box").appendChild(messageDiv);
    });
});
