document.addEventListener("DOMContentLoaded", function () {
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

  function setupEyeToggle(passwordId, eyeIconId) {
    const passwordInput = document.getElementById(passwordId);
    const eyeIcon = document.getElementById(eyeIconId);

    eyeIcon.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";
      eyeIcon.src = `../test/eye-${isPassword ? "open" : "close"}.svg`;
    });
  }

  setupEyeToggle("signInPassword", "signInEyeIcon");
  setupEyeToggle("signUpPassword", "signUpEyeIcon");
});
