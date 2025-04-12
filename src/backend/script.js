document.addEventListener("DOMContentLoaded", function () {
  // Toggle between forms
  const signUpButton = document.getElementById("signUpButton");
  const signInButton = document.getElementById("signInButton");
  const signInForm = document.getElementById("signIn");
  const signUpForm = document.getElementById("signup");

  signUpButton.addEventListener("click", () => {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
  });

  signInButton.addEventListener("click", () => {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
  });

  // Eye icon functionality for both forms
  const togglePassword = (passwordField, eyeIcon) => {
    const isPassword = passwordField.type === "password";
    passwordField.type = isPassword ? "text" : "password";
    eyeIcon.src = `../test/eye-${isPassword ? "open" : "close"}.svg`;
  };

  // Sign In Form
  const signInPassword = document.getElementById("signInPassword");
  const signInEyeIcon = document.getElementById("signInEyeIcon");
  signInEyeIcon.addEventListener("click", () => {
    togglePassword(signInPassword, signInEyeIcon);
  });

  // Sign Up Form
  const signUpPassword = document.getElementById("signUpPassword");
  const signUpEyeIcon = document.getElementById("signUpEyeIcon");
  signUpEyeIcon.addEventListener("click", () => {
    togglePassword(signUpPassword, signUpEyeIcon);
  });
});
